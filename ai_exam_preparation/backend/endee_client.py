import requests

ENDEE_URL = "http://localhost:8080"
INDEX_NAME = "exam_index"


# create index (run once)
def create_index(dimension=384):
    res = requests.post(
        f"{ENDEE_URL}/api/v1/index/create",
        json={
            "index_name": INDEX_NAME,
            "dimension": dimension
        }
    )
    print("CREATE INDEX:", res.status_code)
    print(res.text)


# insert vector
INDEX_NAME = "exam_index"

def add_doc(doc_id, vector, metadata):
    payload = {
        "index_name": INDEX_NAME,
        "vectors": [
            {
                "id": doc_id,
                "values": vector,
                "metadata": metadata
            }
        ]
    }

    res = requests.post(f"{ENDEE_URL}/api/v1/vector/upsert", json=payload)

    print("UPSERT:", res.status_code)
    print(res.text)



# search vectors
def search(vector, top_k=5):
    res = requests.post(
        f"{ENDEE_URL}/api/v1/vector/search",
        json={
            "index_name": INDEX_NAME,
            "vector": vector,
            "top_k": top_k
        }
    )

    print("STATUS:", res.status_code)
    print("RAW RESPONSE:", res.text)

    return res.json()
