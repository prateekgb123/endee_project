#Endee AI Study Copilot
AI-powered contextual assistant for smarter exam preparation

Endee AI Study Copilot is a full-stack Retrieval Augmented Generation (RAG) learning platform that helps students get answers strictly from their own study material.
Unlike generic AI systems, this application uses vector search powered by Endee Labs to retrieve relevant knowledge from uploaded notes, PDFs, and syllabus documents before generating answers.

The result → accurate, explainable, syllabus-aligned responses.

1. Why This Project Matters:-

This project demonstrates how modern AI products are built in industry:

1.1 Private knowledge retrieval
1.2 Vector databases
1.3 API-first backend
1.4 Production-style pipelines
1.5 Stateful user analytics
1.6 Clean UI + infrastructure setup

It moves beyond demos into real product engineering.

2. Core Features:-

2.1 Upload PDFs, notes, study materials
2.2 Answers generated only from uploaded content
2.3 Embedding-based semantic retrieval
2.4 Retrieval Augmented Generation (RAG)
2.5 Question & activity history
2.6 Progress + weak area tracking
2.7 Admin visibility
2.8 Authentication-ready structure
2.9 Modular backend
2.10 Dockerized environment

3. System Workflow:-

Upload → Chunk → Embed → Store in Endee → Retrieve → Prompt → Answer → Track


3.1 Student uploads documents
3.2 Backend extracts and chunks text
3.3 Chunks are converted into embeddings
3.4 Stored in Endee vector database

When a question is asked:

3.5 Semantic search retrieves relevant context
3.6 Context sent to LLM
3.7 Grounded answer returned

3.8 Activity saved for analytics

4. High Level Architecture:-

React UI
   ↓
Python REST API
   ↓
Document Processing
   ↓
Embeddings
   ↓
Endee Vector DB
   ↓
  LLM
   ↓
Answer + Analytics

5. Practical AI Use Case Demonstrated:-

5.1 Retrieval Augmented Generation (RAG)
5.2 Semantic Search
5.3 Knowledge-grounded responses
5.4 AI learning assistant workflows

Vector retrieval is the core engine of the system.

6. Tech Stack:-

6.1 Frontend-

React.js, React Router, Component-based architecture, Responsive UI

6.2 Backend-

Python, REST APIs, Document ingestion pipeline

6.3 AI Layer-

Embeddings generation, Semantic similarity search, Prompt construction, Context injection

6.4 Vector Database-

Endee

6.5 Infrastructure-

Docker, Environment configuration, Local deployment ready

7. Project Structure:-

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
├── frontend/
├── data/
├── infra/
└── docker-compose.yml

8. Application Flow:-

8.1 Upload material
8.2 Process & embed
8.3 Store in Endee
8.4 Ask question
8.5 Retrieve best context
8.6 Generate answer
8.7 Save history
8.8 Track improvement

9. UI Modules:-

9.1 Dashboard
9.2 Ask AI
9.3 Upload Documents
9.4 History
9.5 Weak Areas
9.6 Analytics
9.7 Admin

10. Engineering Highlights:-

10.1 Clear separation of concerns
10.2 Pluggable AI components
10.3 Scalable retrieval pipeline
10.4 Replaceable LLM layer
10.5 Persistent learning data
10.6 API-driven design
10.7 Production-ready structure

11. Run Locally:-

11.1 Clone the repository-
git clone <your-forked-repo>
cd ai_exam_preparation

11.2 Backend setup-
pip install -r backend/requirements.txt
python backend/main.py


Backend → http://localhost:8000

11.3 Frontend setup-
cd frontend
npm install
npm start


Frontend → http://localhost:3000

12. Run with Docker:-

docker-compose up --build

13. Future Improvements:-

13.1 Multi-user analytics
13.2 Smarter weak topic detection
13.3 Personalized learning paths
13.4 Voice-based questioning
13.5 Cloud deployment
13.6 Role-based admin system

14. Skills Demonstrated:-

14.1 Full Stack Development
14.2 AI product engineering
14.3 Vector database integration
14.4 Retrieval pipeline design
14.5 React application architecture
14.6 Backend API systems
14.7 Docker workflows

15. Author:-

Built to enhance exam preparation using context-aware AI and modern retrieval systems.