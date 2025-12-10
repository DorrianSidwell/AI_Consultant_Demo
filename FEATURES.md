# DorrianAI - Complete Feature List

> This document provides a detailed feature matrix for each page in the DorrianAI application. The platform is **industry-agnostic**—while examples reference HR/IT/Training workflows, the same features apply to any domain: healthcare, public sector, SaaS customer success, operations, and more.

---

## 💬 Chat Page (All Users)

This page provides the core AI assistant experience for end users.

| Feature | Description |
|---------|-------------|
| **AI Consultation** | Users ask questions and receive contextual, knowledge-grounded responses |
| **Email Chain Parsing** | Paste complex email threads—the AI extracts the underlying issue automatically |
| **Clarifying Questions** | Context-aware follow-ups tailored to the query category (e.g., HR, IT, Training) |
| **Step-by-Step Guidance** | Clear "Next Steps" with actionable advice drawn from your SOPs and policies |
| **Confidence Indicators** | Visual badges showing AI certainty (High / Medium / Low) |
| **Source Citations** | Transparent display of which documents were used for the response |
| **Draft Email** | One-click generation of professional email responses |
| **Request Info Email** | Generate follow-up emails asking users for missing details |
| **Flag Response** | Mark incorrect AI responses for admin review and continuous improvement |
| **Multi-Turn Conversations** | Context is maintained across the entire session for natural dialogue |

---

## 📁 Documents Page (Admin+)

This page allows administrators to manage the knowledge base that powers the AI.

| Feature | Description |
|---------|-------------|
| **Document Upload** | Drag-and-drop upload for PDF, DOCX, TXT, and EML files |
| **Category Assignment** | Organize documents by category (SOP, Policy, Guide, Curated Examples) |
| **Search & Filter** | Find documents by name or filter by indexing status |
| **Index Status Dashboard** | View knowledge base health, document counts, and last ingestion time |
| **Document Preview** | Preview document content directly in the browser |
| **Status Tracking** | Track which documents are uploaded vs indexed in the vector store |
| **Missing File Detection** | Alerts when database records don't match actual files on disk |
| **Bulk Ingestion** | Process all pending documents into the vector store in one action |
| **Delete Documents** | Remove outdated or incorrect documents from the knowledge base |

---

## 📂 Sessions Page (All Users)

This page allows users to view and manage their conversation history.

| Feature | Description |
|---------|-------------|
| **Session History** | View all past conversations with message previews |
| **Continue Conversations** | Resume any previous session with full context preserved |
| **Session Search** | Search sessions by content or keywords |
| **Delete Sessions** | Remove old or unwanted conversation threads |
| **Session Metadata** | View timestamps, message counts, and session status |

---

## 🔍 Knowledge Gaps Page (Admin+)

This page surfaces queries where the AI lacked sufficient knowledge—enabling continuous improvement.

| Feature | Description |
|---------|-------------|
| **Low Confidence Queries** | Auto-logged queries where the AI had less than 40% confidence |
| **Flagged Responses** | Review responses marked as incorrect by end users |
| **Status Management** | Mark items as Pending, Reviewed, Resolved, or Dismissed |
| **Escalate to Devs** | Send critical issues to Developers for AI instruction creation |
| **Upload Missing Docs** | Add new documents directly from the gap details view |
| **Query Context** | See the full query, AI response, and similarity scores |
| **Source Type Tracking** | Identify whether the issue originated from a chat query or email draft |
| **Export Data** | Export knowledge gaps as JSON or CSV for offline analysis |

---

## 👥 User Management Page (Admin+)

This page allows administrators to manage user accounts and access levels.

| Feature | Description |
|---------|-------------|
| **Create Users** | Add new users and assign their initial role |
| **Edit Users** | Update user names, emails, and passwords |
| **Role Assignment** | Assign Developer, Admin, or User roles with granular permissions |
| **Role Badges** | Visual indicators showing each user's access level |
| **Password Reset** | Securely reset user passwords from the admin interface |

---

## 🛠️ Developer Settings Page (Developer Only)

This page provides full control over the application's branding, AI behaviour, and configuration. Only users with the Developer role can access these settings.

### Tab 1: Branding

Configure the application's identity for white-label deployments.

| Feature | Description |
|---------|-------------|
| **App Name** | Customize the application title displayed throughout the UI |
| **Tagline** | Set a custom tagline shown on the login page |
| **Team Name** | Your organization's name for branding |
| **Logo Upload** | Upload a custom logo for the header and login page (PNG, SVG) |
| **Favicon Upload** | Set a custom browser tab icon |

### Tab 2: Theme

Customize the visual appearance to match your organization's brand.

| Feature | Description |
|---------|-------------|
| **8 Background Presets** | Ocean Depths, Midnight Blue, Forest Green, Royal Purple, Sunset Orange, Northern Lights, Dark Elegance, Rose Gold |
| **Custom Colors** | Configure primary, secondary, error, warning, and success colors |
| **Font Selection** | Choose from 6 professional fonts (Inter, Roboto, Open Sans, Lato, Poppins, Montserrat) |
| **Login Background** | Select gradient, solid color, or upload a custom background image |
| **Live Preview** | Preview all changes before saving |

### Tab 3: AI Prompts

Define the AI's personality and communication style for your industry.

| Feature | Description |
|---------|-------------|
| **System Role** | Define the AI's core personality and purpose |
| **Industry Context** | Set the domain context (healthcare, aerospace, finance, etc.) |
| **Communication Style** | Choose professional, friendly, or formal tone |
| **Email Sign-off** | Configure the default email signature style |
| **Email Greeting** | Configure the default email opening |

### Tab 4: AI Config

Fine-tune the RAG pipeline and LLM settings for optimal performance.

| Feature | Description |
|---------|-------------|
| **Model Selection** | Choose from available Ollama models (auto-detected from local installation) |
| **Azure OpenAI** | Optional cloud LLM with endpoint and API key configuration |
| **Temperature** | Control creativity vs precision (0.0–2.0 scale) |
| **Max Tokens** | Set response length limits (100–8000 tokens) |
| **Confidence Thresholds** | Configure when to log knowledge gaps (low/medium confidence) |
| **Retrieval Top-K** | Number of documents to retrieve per query (1–20) |
| **Similarity Threshold** | Minimum relevance score for document inclusion (0.1–0.9) |

### Tab 5: AI Behavior

Control how the AI interacts with users and handles edge cases.

| Feature | Description |
|---------|-------------|
| **Clarifying Questions Mode** | Always, When Needed, Only Critical, or Never |
| **Max Clarifying Questions** | Limit questions per response (0–5) |
| **Response Verbosity** | Concise, Balanced, or Detailed |
| **Technical Detail Level** | Beginner, Intermediate, or Expert |
| **Escalation Sensitivity** | Low, Medium, or High threshold for suggesting escalation |
| **Auto-Generate Emails** | Enable or disable automatic email draft generation |
| **Proactive Suggestions** | Enable or disable proactive tips in responses |
| **Citation Style** | None, Inline, or Footnotes |
| **Conversation Memory** | Short (5 turns), Medium (10), or Long (20) |

### Tab 6: Escalated Items

Review issues escalated by Admins and convert them into AI instructions.

| Feature | Description |
|---------|-------------|
| **View Escalated Feedback** | See all items escalated by Admins for developer attention |
| **Create AI Instructions** | Convert escalated issues into persistent AI memory rules |
| **Review & Resolve** | Mark escalated items as resolved after action |
| **Source Context** | View the original query, AI response, and user feedback |

### Tab 7: AI Memory

Manage persistent instructions that shape the AI's behaviour across all queries.

| Feature | Description |
|---------|-------------|
| **Custom Instructions** | Add rules the AI always follows (e.g., "Never recommend X") |
| **AI Refinement** | Let the AI improve your instructions for clarity and effectiveness |
| **Toggle Active/Inactive** | Enable or disable instructions without deleting them |
| **Edit & Delete** | Full CRUD management of all instructions |
| **Persistent Memory** | Instructions are injected into every prompt automatically |

---

## 🔐 Security Features

DorrianAI is built with enterprise security requirements in mind.

| Feature | Description |
|---------|-------------|
| **JWT Authentication** | Secure token-based login with short-lived access tokens |
| **Refresh Tokens** | Automatic token renewal without re-authentication |
| **bcrypt Hashing** | Industry-standard secure password storage |
| **3-Tier RBAC** | Granular permissions: User → Admin → Developer |
| **Multi-Tenant** | Complete data isolation per organization |
| **Local-First** | Full functionality without any external API calls |
| **No Data Leakage** | When using Ollama, 100% of processing happens locally |

---

<p align="center">
  <sub>© 2025 Dorrian Sidwell. All rights reserved.</sub>
</p>
