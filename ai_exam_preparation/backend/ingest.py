import os
from embedder import get_embedding
from endee_client import add_doc

BASE_DIR = os.path.dirname(os.path.abspath(__file__))

files = {
    "syllabus": os.path.join(BASE_DIR, "../data/syllabus.txt"),
    "questions": os.path.join(BASE_DIR, "../data/questionpaper.txt"),
}

doc_id = 1

for category, file in files.items():
    with open(file, "r", encoding="utf-8") as f:
        lines = f.readlines()

    for line in lines:
        if len(line.strip()) > 10:
            vector = get_embedding(line)
            add_doc({
                "id": f"doc{doc_id}",
                "vector": vector,
                "text": line,
                "category": category
            })
            doc_id += 1

print("✅ Data inserted into Endee")
