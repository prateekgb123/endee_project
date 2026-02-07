import requests

BASE = "http://localhost:8080/api/v1"

def search(vector, top_k=5):
    res = requests.post(f"{BASE}/vector/search", json={
        "vector": vector,
        "top_k": top_k
    })

    print("ENDEE STATUS:", res.status_code)
    print("ENDEE RESPONSE:", res.text[:300])

    # if response is not json → return empty results
    try:
        return res.json()
    except Exception:
        return {"results": []}
