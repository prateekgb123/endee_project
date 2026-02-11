import requests

ENDEE_URL = "http://localhost:8080"
INDEX_NAME = "exam_index"


# create index (run once)
def create_index(dimension=384):
    res = requests.post(
        f"{ENDEE_URL}/api/v1/index/create",
        json={
            "index": {
                "name": INDEX_NAME,
                "dimension": dimension,
                "metric": "cosine"
            }
        }
    )
    print("CREATE INDEX:", res.status_code)
    print(res.text)


# insert vector
def add_doc(doc_id, vector, metadata):
    res = requests.post(
        f"{ENDEE_URL}/api/v1/index/upsert",
        json={
            "index_name": INDEX_NAME,
            "vectors": [
                {
                    "id": doc_id,
                    "values": vector,
                    "metadata": metadata
                }
            ]
        }
    )

    print("UPSERT:", res.status_code)

    if res.status_code != 200:
        raise Exception(res.text)

    return res.text



# search vectors
def search(vector, top_k=5):
    vector_str = ",".join(map(str, vector))

    res = requests.get(
        f"{ENDEE_URL}/api/search",
        params={
            "index": INDEX_NAME,
            "top_k": top_k,
            "vector": vector_str
        }
    )

    print("SEARCH:", res.status_code)
    print("RAW:", res.text[:200])

    if res.status_code != 200:
        raise Exception(res.text)

    try:
        return res.json()
    except Exception:
        print("Non JSON response from Endee")
        return {"matches": []}

