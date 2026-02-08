import os
from dotenv import load_dotenv
import google.generativeai as genai

# load env
load_dotenv()

# read values
API_KEY = os.getenv("GOOGLE_API_KEY")
MODEL_NAME = os.getenv("GEMINI_MODEL", "gemini-2.0-flash")

# configure
genai.configure(api_key=API_KEY)


def generate_answer(prompt: str) -> str:
    model = genai.GenerativeModel(MODEL_NAME)
    response = model.generate_content(prompt)
    return response.text
