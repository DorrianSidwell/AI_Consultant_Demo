# DorrianAI - Enterprise AI Knowledge Assistant

<p align="center">
  <img src="screenshots/hero-banner.png" alt="DorrianAI Banner" width="100%">
</p>

<p align="center">
  <strong>🤖 A white-label, local-first AI assistant that keeps your data private</strong>
</p>

<p align="center">
  <a href="#-the-problem">Problem</a> •
  <a href="#-my-solution">Solution</a> •
  <a href="#-features">Features</a> •
  <a href="#-screenshots">Screenshots</a> •
  <a href="#-architecture">Architecture</a> •
  <a href="#-tech-stack">Tech Stack</a>
</p>

---

## 🎯 The Problem

Organizations face a critical dilemma when implementing AI-powered support:

| Challenge | Impact |
|-----------|--------|
| **Data Privacy** | 78% of enterprises worry about sending data to cloud AI providers |
| **Compliance** | GDPR, HIPAA, SOC2 requirements make cloud AI complex |
| **Escalating Costs** | Cloud AI APIs charge $0.01-0.10 per query ($10k+/month at scale) |
| **Generic Solutions** | One-size-fits-all AI doesn't understand your organization |

---

## 💡 My Solution

**DorrianAI** is an enterprise-grade AI assistant I built from scratch that solves these problems:

| Feature | How It Works |
|---------|--------------|
| **100% Local** | Runs on your infrastructure - data never leaves your servers |
| **Zero AI Costs** | Uses Ollama (local LLM) - no per-query API fees |
| **Your Knowledge** | RAG system trained on YOUR documents, policies, and SOPs |
| **White-Label** | Fully customizable branding, colors, and AI personality |
| **Enterprise Ready** | JWT auth, 3-tier RBAC, multi-tenant architecture |

---

## ✨ Features

### 🤖 AI-Powered Support
- **RAG (Retrieval-Augmented Generation)** - AI responses grounded in your knowledge base
- **Email Chain Parsing** - Extracts the real issue from complex email threads
- **Confidence Scoring** - Transparency on how certain the AI is
- **Draft Email Generation** - One-click professional email responses
- **Context-Aware Questions** - Smart follow-ups based on query type (HR vs IT vs Training)

### 📊 Knowledge Management
- **Document Upload** - PDF, DOCX, TXT, EML support
- **Automatic Indexing** - ChromaDB vector store for semantic search
- **Knowledge Gap Detection** - Auto-logs queries the AI couldn't answer confidently
- **Flagged Response Review** - Users can flag incorrect AI responses for admin review

### 🎨 White-Label Branding
- **Custom Identity** - App name, logo, favicon, tagline
- **Theme System** - Presets + custom colors, fonts, backgrounds
- **AI Personality** - Configure system role, industry context, communication style
- **8 Background Presets** - Ocean Depths, Midnight Blue, Forest Green, and more

### 🔐 Enterprise Security
- **JWT Authentication** - Secure token-based login with refresh
- **3-Tier RBAC** - User → Admin → Developer permissions
- **Multi-Tenant** - Isolated data per organization
- **Local-First** - No external API calls required

### 🧠 AI Memory System
- **Persistent Instructions** - Custom rules the AI always follows
- **AI Refinement** - Let AI improve your instructions
- **Escalation Workflow** - Knowledge Gaps → Admin Review → AI Memory

---

## 📸 Screenshots

### Authentication & Onboarding

| Screenshot | Description |
|------------|-------------|
| ![Login Page](screenshots/01-login-page.png) | **Login Page** - Glassmorphism design with custom branding, gradient button, dynamic theming |

### AI Chat Experience

| Screenshot | Description |
|------------|-------------|
| ![Chat Interface](screenshots/02-chat-interface.png) | **Chat Interface** - Multi-turn conversations with AI |
| ![AI Response](screenshots/03-ai-response.png) | **AI Response** - Confidence badge, category, next steps, source citations |
| ![Draft Email](screenshots/04-draft-email.png) | **Draft Email Modal** - One-click professional email generation |

### Knowledge Base Management

| Screenshot | Description |
|------------|-------------|
| ![Documents Page](screenshots/05-documents-page.png) | **Documents Page** - Upload, preview, and manage knowledge base |
| ![Index Status](screenshots/06-index-status.png) | **Index Status** - Monitor knowledge base health |

### Admin Features

| Screenshot | Description |
|------------|-------------|
| ![Knowledge Gaps](screenshots/07-knowledge-gaps.png) | **Knowledge Gaps** - Auto-logged low-confidence queries |
| ![User Management](screenshots/08-users-page.png) | **User Management** - Create, edit, assign roles |

### Developer Settings (7 Tabs)

| Screenshot | Description |
|------------|-------------|
| ![Branding Tab](screenshots/09-dev-branding.png) | **Branding Tab** - App identity customization |
| ![Theme Tab](screenshots/10-dev-theme.png) | **Theme Tab** - Colors, fonts, presets |
| ![AI Config Tab](screenshots/11-dev-ai-config.png) | **AI Config** - Model selection, temperature, retrieval settings |
| ![AI Memory Tab](screenshots/12-dev-ai-memory.png) | **AI Memory** - Persistent custom instructions |

### White-Label Examples

| Screenshot | Description |
|------------|-------------|
| ![Theme Example 1](screenshots/13-theme-example-1.png) | **Healthcare Theme** - NHS Blue preset |
| ![Theme Example 2](screenshots/14-theme-example-2.png) | **Corporate Theme** - Professional dark mode |

---

## 🏗️ Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                   React Frontend (PWA)                      │
│  ├─ Material-UI + Glassmorphism Design                     │
│  ├─ TypeScript + Zustand State Management                   │
│  └─ Dynamic Theming System                                  │
└────────────────────────┬────────────────────────────────────┘
                         │ REST API (JWT Auth)
                         ▼
┌─────────────────────────────────────────────────────────────┐
│                   FastAPI Backend                           │
│  ├─ JWT Authentication + 3-Tier RBAC                       │
│  ├─ Multi-tenant Session Management                         │
│  ├─ White-label Branding System                             │
│  └─ Document Processing Pipeline                            │
└────────────────────────┬────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────┐
│              DorrianAI Core Engine                          │
│  ├─ RAG Pipeline (Semantic Search + Generation)            │
│  ├─ Email Parser (Chain Extraction)                        │
│  ├─ Confidence Scorer + Knowledge Gap Detection            │
│  └─ Intent Classifier                                       │
└────────────────────────┬────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────┐
│              AI & Storage Layer                             │
│  ├─ Ollama (Local LLM) or Azure OpenAI                     │
│  ├─ ChromaDB (Vector Store)                                │
│  └─ SQLite (Users, Sessions, Config)                        │
└─────────────────────────────────────────────────────────────┘
```

---

## 🛠️ Tech Stack

### Frontend
| Technology | Purpose |
|------------|---------|
| **React 18** | Modern UI with hooks |
| **TypeScript** | Type-safe development |
| **Material-UI (MUI)** | Component library with theming |
| **Zustand** | Lightweight state management |
| **Vite** | Fast build and HMR |

### Backend
| Technology | Purpose |
|------------|---------|
| **FastAPI** | High-performance async API |
| **Pydantic v2** | Request/response validation |
| **SQLite** | User, session, and config storage |
| **JWT + bcrypt** | Secure authentication |

### AI/ML
| Technology | Purpose |
|------------|---------|
| **Ollama** | Local LLM runtime (Qwen, Llama, etc.) |
| **Azure OpenAI** | Optional cloud LLM provider |
| **ChromaDB** | Vector store for semantic search |
| **sentence-transformers** | Local embedding generation |

---

## 📊 Project Metrics

| Metric | Value |
|--------|-------|
| **Frontend Pages** | 8 |
| **API Endpoints** | 40+ |
| **Backend Services** | 8 |
| **RAG Components** | 9 |
| **Lines of Code** | 15,000+ |
| **Development Time** | 3 months |

---

## 🎓 Skills Demonstrated

This project showcases my expertise in:

### Full-Stack Development
- ✅ React 18 with TypeScript and modern hooks
- ✅ FastAPI backend with async/await patterns
- ✅ REST API design with OpenAPI documentation
- ✅ JWT authentication and refresh token flow

### AI/ML Engineering
- ✅ RAG (Retrieval-Augmented Generation) pipeline
- ✅ Vector embeddings and semantic search
- ✅ LLM prompt engineering and optimization
- ✅ Confidence scoring algorithms

### Enterprise Architecture
- ✅ Multi-tenant data isolation
- ✅ Role-based access control (RBAC)
- ✅ White-label/SaaS architecture
- ✅ Knowledge management systems

### DevOps & Tooling
- ✅ Docker containerization
- ✅ Git version control
- ✅ CI/CD pipeline design
- ✅ Local-first architecture

---

## 👥 Role-Based Access

```
Developer (Full Access)
    ↓ inherits
Admin (Documents, Users, Knowledge Gaps)
    ↓ inherits
User (Chat, Sessions, Settings)
```

| Page | User | Admin | Developer |
|------|:----:|:-----:|:---------:|
| Chat | ✅ | ✅ | ✅ |
| Sessions | ✅ | ✅ | ✅ |
| Settings | ✅ | ✅ | ✅ |
| Documents | ❌ | ✅ | ✅ |
| Knowledge Gaps | ❌ | ✅ | ✅ |
| Users | ❌ | ✅ | ✅ |
| Developer (7 tabs) | ❌ | ❌ | ✅ |

---

## 🎥 Demo Video

> 📹 **[Watch the full demo on YouTube](#)** *(coming soon)*

---

## 🚧 Roadmap

### Completed ✅
- [x] Full-stack React + FastAPI application
- [x] RAG-based knowledge retrieval
- [x] JWT auth with 3-tier RBAC
- [x] White-label branding system
- [x] AI Memory (persistent instructions)
- [x] Knowledge gap detection
- [x] Azure OpenAI integration

### In Progress 🔄
- [ ] Dark mode toggle
- [ ] Real-time WebSocket updates
- [ ] Bulk document operations

### Planned 📋
- [ ] Microsoft Teams integration
- [ ] ServiceNow/JIRA connectors
- [ ] Analytics dashboard
- [ ] Docker Compose deployment
- [ ] Kubernetes helm charts

---

## 📬 Contact

**Dorrian Sidwell**

- 💼 [LinkedIn](https://linkedin.com/in/dorriansidwell)
- 🐙 [GitHub](https://github.com/DorrianSidwell)
- 📧 Email: *(add your email)*

---

## ⚠️ Note

This is a **showcase repository** demonstrating the features and architecture of DorrianAI. The source code is proprietary and maintained in a private repository.

Interested in a demo or collaboration? Feel free to reach out!

---

<p align="center">
  <strong>Built with ❤️ by Dorrian Sidwell</strong>
</p>

<p align="center">
  <em>A local-first AI assistant that respects your privacy while delivering enterprise results.</em>
</p>

