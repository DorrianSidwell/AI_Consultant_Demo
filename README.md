# DorrianAI - Enterprise AI Knowledge Assistant

<p align="center">
  <img src="screenshots/hero/hero-banner.png" alt="DorrianAI Banner" width="100%">
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
| ![Login Page](screenshots/login-page.jpg) | **Login Page** - Glassmorphism design with custom branding, gradient button, dynamic theming |

### AI Chat Experience

| Screenshot | Description |
|------------|-------------|
| ![Chat Empty](screenshots/03-chat-empty.jpg) | **Chat Interface** - Clean starting point for new conversations |
| ![Chat Response](screenshots/chat/chat%20and%20response.jpg) | **AI Response** - Confidence badge, category, next steps, source citations |
| ![Flag Response 1](screenshots/chat/flag%20response%2001.jpg) | **Flag Response** - Users can flag incorrect AI responses |
| ![Flag Response 2](screenshots/chat/flag%20response%2002.jpg) | **Flag Confirmation** - Feedback submitted for admin review |
| ![Email Draft Request](screenshots/chat/email%20draft%20-%20request%20more%20info%20.jpg) | **Draft Email Modal** - One-click professional email generation |
| ![Email Draft Full](screenshots/chat/email%20draft%20to%20user%20to%20request%20more%20info.jpg) | **Draft Email Preview** - Ready to copy and send |

### Knowledge Base Management

| Screenshot | Description |
|------------|-------------|
| ![Documents Page](screenshots/documents/21-documents-list.png) | **Documents Page** - Upload, preview, and manage knowledge base |

### Admin Features

| Screenshot | Description |
|------------|-------------|
| ![Knowledge Gaps](screenshots/knowledge-gaps/27-gaps-list.png) | **Knowledge Gaps** - Auto-logged low-confidence queries |
| ![User Management](screenshots/users/33-users-list.png) | **User Management** - Create, edit, assign roles |
| ![Sessions](screenshots/sessions/18-sessions-list.png) | **Sessions** - View and manage chat history |
| ![Settings](screenshots/settings/63-settings-page.png) | **Settings** - User preferences and configuration |

### Developer Settings (7 Tabs)

| Screenshot | Description |
|------------|-------------|
| ![Branding Tab](screenshots/devpage/branding/branding.jpg) | **Branding Tab** - App name, logo, tagline customization |
| ![Theme Tab](screenshots/devpage/theme/theme%20.jpg) | **Theme Tab** - Colors, fonts, 8 background presets |
| ![AI Prompts Tab](screenshots/devpage/ai-prompts/AI%20prompt.jpg) | **AI Prompts** - System role, personality, industry context |
| ![AI Config Tab](screenshots/devpage/ai-config/AI%20config.jpg) | **AI Config** - Model selection, temperature, retrieval settings |
| ![AI Behavior Tab](screenshots/devpage/ai-behavior/AI%20Behaviour.jpg) | **AI Behavior** - Response style, confidence thresholds |
| ![Escalated Items Tab](screenshots/devpage/escalated/Escalated%20items.jpg) | **Escalated Items** - Flagged responses for developer review |
| ![AI Memory Tab](screenshots/devpage/AI%20memory.jpg) | **AI Memory** - Persistent custom instructions |
| ![Categories Tab](screenshots/devpage/Categories.jpg) | **Categories** - Organize knowledge by department |
| ![Data Storage Tab](screenshots/devpage/Data%20storage%20page.jpg) | **Data Storage** - Database and storage configuration |

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

