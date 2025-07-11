# Agents

Classroom management system with audio transcription and AI to answer questions based on class content.

## 🚀 Features

- **Room Creation**: Create classrooms with name and description
- **Audio Recording**: Record class audios
- **Automatic Transcription**: Automatic audio transcription using Google Gemini AI
- **Question System**: Ask questions about class content
- **Responsive AI**: Intelligent responses based on transcription context

## 🛠️ Technologies

### Backend
- **Node.js** with TypeScript
- **Fastify** - Web framework
- **Drizzle ORM** - ORM for PostgreSQL
- **PostgreSQL** with pgvector - Database
- **Google Gemini AI** - AI for transcription and responses
- **Zod** - Data validation

### Frontend
- **React 19** with TypeScript
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **React Router** - Routing
- **React Query** - State management
- **Radix UI** - Accessible components

## 📋 Prerequisites

- Node.js 18+
- Docker and Docker Compose
- Google AI Studio account (for Gemini API key)

## ⚙️ Setup

### 1. Clone the repository
```bash
git clone https://github.com/PaulaCCarvalho/project-agents.git
cd project-agents
```

### 2. Configure the database
```bash
cd backend
docker-compose up -d
```

### 3. Configure environment variables
Create a `.env` file in the `backend` folder:
```env
PORT=3333
DATABASE_URL=postgresql://docker:docker@localhost:5432/agents
GEMINI_API_KEY=your_gemini_api_key
```

### 4. Run migrations
```bash
cd backend
npm install
npm run db:generate
npm run db:migrate
```

### 5. Configure the frontend
```bash
cd ../frontend
npm install
```

## 🚀 Running the project

### Backend
```bash
cd backend
npm run dev
```

### Frontend
```bash
cd frontend
npm run dev
```

The frontend will be available at `http://localhost:5173`

## 📁 Project Structure

```
project-agents/
├── backend/          # REST API with Fastify
│   ├── src/
│   │   ├── db/      # Database and routes
│   │   └── server.ts
├── frontend/         # React application
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── http/
└── docker/           # PostgreSQL configuration
```

## 🔧 Available Scripts

### Backend
- `npm run dev` - Run in development mode
- `npm run start` - Run in production
- `npm run db:generate` - Generate migrations
- `npm run db:migrate` - Run migrations

### Frontend
- `npm run dev` - Run in development mode
- `npm run build` - Build for production
- `npm run preview` - Preview the build 