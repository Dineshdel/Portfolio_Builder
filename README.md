# PortfolioForge

PortfolioForge is a production-ready SaaS platform that allows users to create, customize, and publish their portfolios dynamically.

## Architecture

This platform leverages a **Runtime Rendering Architecture**. Instead of generating a separate React project or build for every user portfolio, the system uses a single React application that dynamically fetches the user's selected template, content, and theme configuration from the backend at runtime.

### Tech Stack

- **Frontend**: React, Vite, TypeScript, Tailwind CSS, shadcn/ui, Zustand, TanStack Query
- **Backend**: NestJS, REST API, TypeScript, Prisma
- **Database**: PostgreSQL
- **Monorepo**: Turborepo, pnpm

## Getting Started

### Prerequisites

- Node.js (v18+)
- pnpm
- Docker (for PostgreSQL)

### Setup

1. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```

2. Start the local database:
   ```bash
   docker-compose up -d
   ```

3. Install dependencies:
   ```bash
   pnpm install
   ```

4. Run database migrations:
   ```bash
   cd backend && pnpm prisma db push
   ```

5. Start the development server:
   ```bash
   pnpm dev
   ```

This will start both the Vite frontend and the NestJS backend concurrently.
