import requests
from embedder import get_embedding

def search(topic):
    vector = get_embedding(topic)
    res = requests.post("http://localhost:8080/search", json={
        "vector": vector,
        "top_k": 10
    })
    return res.json()
