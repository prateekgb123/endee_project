Endee AI Study Copilot--

AI-powered contextual assistant for exam preparation using Retrieval Augmented Generation (RAG).

1. Project Overview:-

Endee AI Study Copilot is a backend system that generates answers strictly from a student’s own study materials such as syllabus documents, notes, and question banks.

Unlike generic AI tools, this platform retrieves relevant content from a private knowledge base before generating responses.
This produces accurate, explainable, and curriculum-aligned answers.

The project demonstrates how modern AI assistants are engineered using vector search, retrieval pipelines, and modular APIs.

2. Problem Statement:-

Students require:

2.1 Reliable answers
2.2 Alignment with their syllabus
2.3 Source-grounded responses
2.4 A way to continuously analyze preparation

Large language models alone are not sufficient because they may hallucinate or provide generic information.

This system solves that problem using Retrieval Augmented Generation.

3. System Design / Technical Approach:-

The backend follows a RAG architecture.

3.1 Documents are split into chunks
3.2 Each chunk is converted into an embedding
3.3 Embeddings are stored in a vector database
3.4 A user question is embedded
3.5 Similar vectors are retrieved
3.6 Retrieved context is injected into the prompt
3.7 LLM generates a grounded response

This ensures traceability and syllabus relevance.

4. How Endee is Used:-

Endee acts as the semantic memory layer of the system.

4.1 Stores vector representations of document chunks
4.2 Performs similarity search
4.3 Returns top relevant matches
4.4 Enables fast retrieval at scale

Without vector retrieval, grounded answering is not possible.

5. System Workflow:-
5.1 During ingestion-

Upload → Chunk → Embed → Store in Endee

5.2 During questioning-

Question → Embed → Retrieve → Build Prompt → Generate → Return Answer

6. High Level Architecture:-

Client / Swagger
↓
FastAPI Backend
↓
Embedding Model
↓
Endee Vector DB
↓
LLM
↓
Answer

7. Core Backend Capabilities:-

7.1 Document ingestion
7.2 Embedding generation
7.3 Vector storage
7.4 Semantic retrieval
7.5 Context construction
7.6 LLM grounded answering
7.7 Upload API
7.8 Failure-safe responses

8. Tech Stack:-
8.1 Backend-

Python, FastAPI, REST APIs

8.2 AI Layer-

Sentence Transformers, prompt construction, context injection

8.3 Vector Database-

Endee

8.4 Infrastructure-

Docker, environment-based configuration

9. Project Structure:-

ai_exam_preparation/
│
├── backend/
│   ├── main.py
│   ├── ingest.py
│   ├── embedder.py
│   ├── llm.py
│   ├── endee_client.py
│   └── requirements.txt
│
├── infra/
└── docker-compose.yml


Frontend and raw datasets are excluded in this submission to focus on backend evaluation.

10. Setup & Execution Instructions:-

10.1 Clone repository-
git clone <repo-url>
cd ai_exam_preparation

10.2 Start Endee using Docker-
docker compose up -d


Runs on:

http://localhost:8080

10.3 Backend setup-
pip install -r backend/requirements.txt


Create .env inside backend:

GOOGLE_API_KEY=your_key_here

10.4 Run API server-
uvicorn main:app --reload


API:

http://127.0.0.1:8000


Swagger:

http://127.0.0.1:8000/docs

11. How Recruiters Can Test:-

11.1 Health check-

GET /health


11.2 Ask a question-

POST /ask
{
  "question": "Important OS topics?"
}


11.3 Upload material-

POST /upload


The API is built to respond gracefully even if external services fail.

12. Engineering Highlights:-

12.1 Clear separation of concerns
12.2 Replaceable vector DB
12.3 Replaceable LLM layer
12.4 Robust error handling
12.5 Modular services
12.6 Production-style RAG flow

13. Skills Demonstrated:-

13.1 Backend system design
13.2 Retrieval pipeline implementation
13.3 Vector database integration
13.4 Prompt orchestration
13.5 API reliability
13.6 Infrastructure awareness

14. Author:-

Built as a demonstration of how real-world AI learning assistants are implemented using modern retrieval architectures.