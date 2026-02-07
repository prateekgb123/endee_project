import os
import google.generativeai as genai

# use env variable
genai.configure(api_key="AIzaSyAPInS7TCkT4nlOF9bFlsxFA7C0d0QmMqc")

# pick a model from your list
model = genai.GenerativeModel("gemini-2.0-flash")


def generate_answer(prompt: str):
    res = model.generate_content(prompt)
    return res.text
