import requests
from embedder import get_embedding

ENDEE_URL = "http://localhost:8080/add"

def load_file(path):
    with open(path, "r", encoding="utf-8") as f:
        return f.read().split("\n")

files = {
    "syllabus": "../data/syllabus.txt",
    "questions": "../data/questionpaper.txt",
    "notes": "../data/notes.txt"
}

doc_id = 1

for category, file in files.items():
    lines = load_file(file)

    for line in lines:
        if len(line.strip()) > 10:
            vector = get_embedding(line)
            requests.post(ENDEE_URL, json={
                "id": f"doc{doc_id}",
                "vector": vector,
                "text": line,
                "category": category
            })
            doc_id += 1

print("Data successfully stored in Endee")
