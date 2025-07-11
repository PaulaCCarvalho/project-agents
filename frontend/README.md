# Agents

Frontend application for Agents, built with React and TypeScript.

## 🛠️ Technologies

### Core
- **React 19** - Main interface library
- **TypeScript** - Static typing
- **Vite** - Build tool and dev server

### UI/UX
- **Tailwind CSS 4** - Styling framework
- **Radix UI** - Accessible components
- **Lucide React** - Icons
- **Class Variance Authority** - Component variants

### Forms and Validation
- **React Hook Form** - Form management
- **Zod** - Schema validation
- **@hookform/resolvers** - React Hook Form + Zod integration

### State and Routing
- **React Router DOM** - Routing
- **TanStack Query** - State and cache management

### Utilities
- **Day.js** - Date manipulation
- **clsx** - CSS class composition
- **tailwind-merge** - Tailwind class merging

### Development
- **Biome** - Linter and formatter
- **Ultracite** - Linting configuration

## 📁 Project Structure

```
src/
├── components/     # Reusable components
│   └── ui/        # Base components (shadcn/ui)
├── http/          # HTTP request hooks
│   └── types/     # TypeScript API types
├── lib/           # Utilities and configurations
├── pages/         # Application pages
└── App.tsx        # Root component
```

## 🚀 Setup

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/PaulaCCarvalho/project-agents.git
cd frontend

# Install dependencies
npm install

# Start development server
npm run dev
```

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview build
```

## 🔧 Configurations

### TypeScript
- Strict configuration with `strictNullChecks`
- Path mapping configured (`@/*` → `./src/*`)

### Vite
- React plugin configured
- Tailwind CSS integrated
- Path alias configured

### Biome
- Configuration based on Ultracite preset
- Automatic formatting

## 📱 Features

- Room creation
- Room listing
- Question system
- Audio recording
- Responsive interface

## 🎨 Project Patterns

- **Functional Components** with hooks
- **Custom Hooks** for business logic
- **TypeScript** for typing
- **Tailwind CSS** for styling
- **React Query** for cache and state
- **React Hook Form** for forms 