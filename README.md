# AI Knowledge Inbox – Frontend

This is the **frontend application** for the **AI Knowledge Inbox** project.  
It provides a minimal, clean black-and-white UI to interact with an AI-powered RAG knowledge system.

Users can:
- Ingest text notes or URLs
- Ask questions over the ingested data
- View AI-generated answers with source citations
- List and delete previously ingested items

---

## ⚠️ Prerequisites (Important)

Before running the frontend, **make sure these services are already running**:

1. **MiniLM Embedding Server (Python – Flask/FastAPI)**
2. **Backend API (Node.js + Express)**

The frontend depends entirely on backend APIs and will show a blank or error state if they are not running.

---

## 🛠 Tech Stack

- React (Hooks)
- Vite
- Axios
- React Router DOM
- Plain CSS (Black & White AI-style theme)

---

## 📦 Installation

Clone the repository and move into the frontend folder:

```bash
git clone https://github.com/rohsingh26/AI_Assignment-Knowledgeinbox-frontend.git
cd AI_Assignment-Knowledgeinbox-frontend
```

## Install dependencies:

```bash
npm install
```

## 🔧 Environment Setup

Create a .env file in the project root:

Code snippet
VITE_API_BASE_URL=http://localhost:5000
Ensure this matches your backend server URL.

## ▶️ Run the Frontend
Start the development server:

``` bash
npm run dev
```

The app will be available at:
```bash
http://localhost:5173
```


## 🧭 Application Pages

# 🏠 Home Page

Ask questions over ingested knowledge.

Displays AI-generated summary answers based on the context.

Shows source chunks with similarity scores.

Ingest content via raw text or URL inputs.


# 📋 View Saved Content Page

Lists all stored items in the database.

Displays metadata: ID, Type (text/url), Title, Content, and Created timestamp.

Delete functionality to remove specific items from the knowledge base.


## 🔄 Frontend Flow

User Ingests Content: User submits text/URL → Frontend calls /ingest.

Backend Processing: Backend chunks, embeds, and stores the data.

User Asks Question: User sends query → Frontend calls /query.

RAG Response: Backend performs semantic search and generates an answer.

UI Display: Frontend renders the summary answer and a source table with relevance scores.


## ❗ Troubleshooting
Blank screen? Check browser console (F12) for errors.

Connection Refused? Confirm backend and MiniLM servers are running.

No Data? Verify VITE_API_BASE_URL in your .env matches your running backend.


## 📌 Notes

Single-user system: No authentication required for this version.

Focus: Clarity, speed, and explainability of AI sources.

Architecture: All AI logic is handled server-side to keep the frontend lightweight.


## 📄 Next Steps
Refer to the main repository README for:

MiniLM server setup

Backend setup and End-to-end project startup instructions.