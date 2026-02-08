import requests

ENDEE_URL = "http://localhost:8080"

# insert vector
def add_doc(data):
    res = requests.post(f"{ENDEE_URL}/api/v1/vector/upsert", json=data)
    print("UPSERT:", res.status_code)
    return res.text


# search vectors
def search(vector, top_k=5):
    res = requests.post(
        f"{ENDEE_URL}/api/v1/index/query",
        json={
            "vector": vector,
            "top_k": top_k
        }
    )

    print("STATUS:", res.status_code)
    print("RAW RESPONSE:", res.text)

    return res.json()

