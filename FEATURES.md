# DorrianAI - Complete Feature List

## 💬 Chat Page (All Users)

| Feature | Description |
|---------|-------------|
| **AI Consultation** | Ask questions and get contextual, knowledge-based responses |
| **Email Chain Parsing** | Paste complex email threads - AI extracts the real issue |
| **Clarifying Questions** | Context-aware follow-ups (HR questions for HR, IT for IT) |
| **Step-by-Step Guidance** | Clear "Next Steps" with actionable advice from your SOPs |
| **Confidence Indicators** | Visual badges showing AI certainty (High/Medium/Low) |
| **Source Citations** | See which documents were used for the response |
| **Draft Email** | One-click generation of professional email responses |
| **Request Info Email** | Generate follow-up emails asking for missing details |
| **Flag Response** | Mark incorrect AI responses for admin review |
| **Multi-Turn Conversations** | Context maintained across the entire session |

---

## 📁 Documents Page (Admin+)

| Feature | Description |
|---------|-------------|
| **Document Upload** | Drag-and-drop PDF, DOCX, TXT, EML files |
| **Category Assignment** | Organize by category (SOP, Policy, Guide, Curated Examples) |
| **Search & Filter** | Find documents by name or filter by status |
| **Index Status Dashboard** | See knowledge base health, document counts, last ingestion |
| **Document Preview** | Preview document content without downloading |
| **Status Tracking** | Track uploaded vs indexed documents |
| **Missing File Detection** | Alerts when database records don't match files |
| **Bulk Ingestion** | Process all documents into the vector store at once |
| **Delete Documents** | Remove outdated or incorrect documents |

---

## 📂 Sessions Page (All Users)

| Feature | Description |
|---------|-------------|
| **Session History** | View all past conversations with previews |
| **Continue Conversations** | Pick up where you left off with full context |
| **Session Search** | Find sessions by content |
| **Delete Sessions** | Remove old or unwanted conversations |
| **Session Metadata** | See timestamps and message counts |

---

## 🔍 Knowledge Gaps Page (Admin+)

| Feature | Description |
|---------|-------------|
| **Low Confidence Queries** | Auto-logged queries where AI had < 40% confidence |
| **Flagged Responses** | Review responses marked as incorrect by users |
| **Status Management** | Mark items as Pending, Reviewed, Resolved, or Dismissed |
| **Escalate to Devs** | Send critical issues to Developer for AI instruction creation |
| **Upload Missing Docs** | Add documents directly from gap details |
| **Query Context** | See full query, response, similarity scores |
| **Source Type Tracking** | Know if issue was from chat or email draft |
| **Export Data** | Export gaps as JSON or CSV for analysis |

---

## 👥 User Management Page (Admin+)

| Feature | Description |
|---------|-------------|
| **Create Users** | Add new users with role assignment |
| **Edit Users** | Update names, emails, passwords |
| **Role Assignment** | Assign Developer, Admin, or User roles |
| **Role Badges** | Visual indicators for each role |
| **Password Reset** | Reset user passwords securely |

---

## 🛠️ Developer Settings Page (Developer Only)

### Tab 1: Branding

| Feature | Description |
|---------|-------------|
| **App Name** | Customize the application title |
| **Tagline** | Set a custom tagline for login page |
| **Team Name** | Your organization's name |
| **Logo Upload** | Custom logo for header and login (PNG, SVG) |
| **Favicon Upload** | Browser tab icon |

### Tab 2: Theme

| Feature | Description |
|---------|-------------|
| **8 Background Presets** | Ocean Depths, Midnight Blue, Forest Green, Royal Purple, Sunset Orange, Northern Lights, Dark Elegance, Rose Gold |
| **Custom Colors** | Primary, secondary, error, warning, success |
| **Font Selection** | 6 professional fonts (Inter, Roboto, Open Sans, Lato, Poppins, Montserrat) |
| **Login Background** | Gradient, solid color, or custom image |
| **Live Preview** | See changes before saving |

### Tab 3: AI Prompts

| Feature | Description |
|---------|-------------|
| **System Role** | Define the AI's personality and purpose |
| **Industry Context** | Set the domain (healthcare, aerospace, finance) |
| **Communication Style** | Professional, friendly, formal |
| **Email Sign-off** | Default signature style |
| **Email Greeting** | Default email opening |

### Tab 4: AI Config

| Feature | Description |
|---------|-------------|
| **Model Selection** | Choose from available Ollama models (auto-detected) |
| **Azure OpenAI** | Optional cloud LLM with endpoint/key configuration |
| **Temperature** | Control creativity vs precision (0.0-2.0) |
| **Max Tokens** | Set response length limits (100-8000) |
| **Confidence Thresholds** | When to log knowledge gaps (low/medium) |
| **Retrieval Top-K** | Number of documents to retrieve (1-20) |
| **Similarity Threshold** | Minimum relevance score (0.1-0.9) |

### Tab 5: AI Behavior

| Feature | Description |
|---------|-------------|
| **Clarifying Questions Mode** | Always, When Needed, Only Critical, Never |
| **Max Clarifying Questions** | Limit questions per response (0-5) |
| **Response Verbosity** | Concise, Balanced, or Detailed |
| **Technical Detail Level** | Beginner, Intermediate, or Expert |
| **Escalation Sensitivity** | Low, Medium, or High |
| **Auto-Generate Emails** | Enable/disable automatic email drafts |
| **Proactive Suggestions** | Enable/disable proactive tips |
| **Citation Style** | None, Inline, or Footnotes |
| **Conversation Memory** | Short (5), Medium (10), or Long (20) turns |

### Tab 6: Escalated Items

| Feature | Description |
|---------|-------------|
| **View Escalated Feedback** | See items escalated by Admins |
| **Create AI Instructions** | Turn escalated issues into AI memory |
| **Review & Resolve** | Mark escalated items as resolved |
| **Source Context** | See original query and response |

### Tab 7: AI Memory

| Feature | Description |
|---------|-------------|
| **Custom Instructions** | Add persistent rules the AI always follows |
| **AI Refinement** | Let AI improve your instructions for clarity |
| **Toggle Active/Inactive** | Enable or disable without deleting |
| **Edit & Delete** | Full management of all instructions |
| **Persistent Memory** | Instructions injected into every prompt |

---

## 🔐 Security Features

| Feature | Description |
|---------|-------------|
| **JWT Authentication** | Secure token-based login |
| **Refresh Tokens** | Automatic token renewal |
| **bcrypt Hashing** | Secure password storage |
| **3-Tier RBAC** | User → Admin → Developer |
| **Multi-Tenant** | Isolated data per organization |
| **Local-First** | No external API calls required |
| **No Data Leakage** | Ollama runs 100% locally |

