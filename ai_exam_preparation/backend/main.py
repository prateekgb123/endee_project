from fastapi import FastAPI, UploadFile, File, Form
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

from embedder import get_embedding
from endee_client import search, add_doc
from llm import generate_answer


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


# health
@app.get("/health")
def health():
    return {"status": "ok"}


# ===============================
# ASK (RAG)
# ===============================
@app.post("/ask")
def ask(q: Query):
    try:
        vector = get_embedding(q.question)

        results = search(vector)

        # correct for Endee OSS
        matches = results.get("matches", [])

        if not matches:
            return {"answer": "No data found in knowledge base.", "sources": []}

        context = ""
        for m in matches[:5]:
            context += m["metadata"]["text"] + "\n"

        prompt = f"""
You are an exam preparation AI.

Answer ONLY from the provided context.

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
            "sources": [m["metadata"]["text"] for m in matches[:5]]
        }

    except Exception as e:
        print("🔥 ERROR IN /ask:", str(e))
        return {"answer": "Backend error: " + str(e), "sources": []}


# ===============================
# UPLOAD
# ===============================
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
            line = line.strip()

            if len(line) > 10:
                vector = get_embedding(line)

                add_doc(
                    f"{file.filename}_{i}",
                    vector,
                    {
                        "text": line,
                        "category": category,
                        "source": file.filename
                    }
                )

                inserted += 1

        return {"message": "Uploaded successfully", "chunks": inserted}

    except Exception as e:
        print("UPLOAD ERROR:", e)
        return {"error": str(e)}
