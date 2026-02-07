import openai
from query import search

openai.api_key = "YOUR_OPENAI_KEY"

query = "Important exam topics from syllabus and previous questions"
results = search(query)

context = ""
for r in results["results"]:
    context += r["text"] + "\n"

prompt = f"""
You are an exam preparation AI.

Based on these materials:
{context}

Create:
1. Important Topics
2. Study Plan (7 days)
3. High priority areas
"""

response = openai.ChatCompletion.create(
    model="gpt-4",
    messages=[{"role": "user", "content": prompt}]
)

print(response["choices"][0]["message"]["content"])
