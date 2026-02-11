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
        text = line.strip()

        if len(text) > 10:
            vector = get_embedding(text)

            metadata = {
                "text": text,
                "category": category,
                "source": os.path.basename(file)
            }

            add_doc(f"doc{doc_id}", vector, metadata)
            doc_id += 1

print("✅ Data inserted into Endee")
