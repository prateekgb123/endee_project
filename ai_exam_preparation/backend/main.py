from fastapi import FastAPI
from pydantic import BaseModel
from embedder import get_embedding
from endee_client import search
from llm import generate_answer
from fastapi.middleware.cors import CORSMiddleware
from fastapi import UploadFile, File, Form
from endee_client import add_doc

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Query(BaseModel):
    question: str


@app.get("/health")
def health():
    return {"status": "ok"}


@app.post("/ask")
@app.post("/ask")
def ask(q: Query):
    try:
        vector = get_embedding(q.question)

        results = search(vector)

        context = ""
        matches = results["results"][0]["matches"]

        for m in matches:
            context += m["metadata"]["text"] + "\n"

        prompt = f"""
You are an exam preparation AI.

Question:
{q.question}

Context:
{context}

Provide:
1. Important topics
2. Study strategy
3. Priority order
"""

        answer = generate_answer(prompt)

        return {
            "answer": answer,
            "sources": [m["metadata"]["text"] for m in matches]
        }

    except Exception as e:
        print("🔥 ERROR IN /ask:", str(e))
        return {"answer": "Backend error: " + str(e), "sources": []}

@app.post("/upload")
async def upload_file(
    file: UploadFile = File(...),
    category: str = Form(...)
):
    try:
        content = await file.read()
        text = content.decode("utf-8")

        lines = text.split("\n")

        inserted = 0

        for i, line in enumerate(lines):
            if len(line.strip()) > 10:
                vector = get_embedding(line)

                add_doc({
                    "id": f"{file.filename}_{i}",
                    "vector": vector,
                    "metadata": {
                        "text": line,
                        "category": category,
                        "source": file.filename
                    }
                })

                inserted += 1

        return {
            "message": "Uploaded successfully",
            "chunks": inserted
        }

    except Exception as e:
        print("UPLOAD ERROR:", e)
        return {"error": str(e)}
