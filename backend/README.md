# Agents

Backend API for the Agents project, built with Fastify, TypeScript and PostgreSQL.

## 🛠️ Technologies

- **Runtime**: Node.js with TypeScript
- **Framework**: Fastify
- **Database**: PostgreSQL with pgvector
- **ORM**: Drizzle ORM
- **Validation**: Zod
- **AI**: Google Gemini AI
- **Linter**: Biome
- **Containerization**: Docker

## 📋 Prerequisites

- Node.js 18+
- Docker and Docker Compose
- Google Gemini API key

## 🚀 Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/PaulaCCarvalho/project-agents.git
   cd backend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   Create a `.env` file in the project root:
   ```env
   PORT=3333
   DATABASE_URL=postgresql://docker:docker@localhost:5432/agents
   GEMINI_API_KEY=your_api_key_here
   ```

4. **Start the database**
   ```bash
   docker-compose up -d
   ```

5. **Generate migrations**
   ```bash
   npm run db:generate
   ```

6. **Run migrations**
   ```bash
   npm run db:migrate
   ```

7. **Start the server**
   ```bash
   # Development
   npm run dev
   
   # Production
   npm start
   ```

## 📁 Project Structure

```
src/
├── db/
│   ├── connection.ts      # Database connection
│   ├── schema/           # Drizzle schemas
│   ├── migrations/       # Database migrations
│   ├── services/         # Services (ex: Gemini AI)
│   └── http/routes/      # API routes
├── env.ts               # Environment configuration
└── server.ts           # Fastify server
```

## 🔧 Available Scripts

- `npm run dev` - Starts server in development mode
- `npm start` - Starts server in production
- `npm run db:generate` - Generates Drizzle migrations
- `npm run db:migrate` - Runs migrations
- `npm run db:seed` - Populates database with initial data

## 🌐 Endpoints

- Routes for room and question management
- Audio upload with AI processing

## 🐳 Docker

The project includes Docker configuration for PostgreSQL with pgvector:

```bash
docker-compose up -d
```

## 📝 Patterns

- **TypeScript** for static typing
- **Zod** for schema validation
- **Drizzle ORM** for type-safe queries
- **Fastify** with plugins for CORS and multipart
- **Biome** for linting and formatting 