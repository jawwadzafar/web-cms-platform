# Payload CMS + Next.js Setup Instructions

I want you to help me create a complete headless CMS system using Payload CMS with the following architecture:

## Project Structure Required:
```
project-name/
├── payload-backend/     # Payload CMS (backend + admin)
├── nextjs-frontend/     # Next.js website  
├── nginx.conf          # Nginx configuration
└── docker-compose.yml  # Optional: Docker setup
```

## STRICT Tech Stack Requirements:

### Backend (Payload CMS):
- **Payload CMS** latest version as headless CMS
- **TypeScript** only (no JavaScript files)
- **MongoDB** as database with Mongoose
- **Node.js 18+** with Express
- **JWT authentication** for API security
- Run on **port 3001**

### Frontend (Next.js) - STRICT Requirements:
- **Next.js 15.5.0** (latest version)
- **React 19** with Server Components
- **TypeScript** only (strict mode enabled)
- **Tailwind CSS v4** (latest version, NOT v3)
- **shadcn/ui** components for ALL UI elements
- **App Router** (not Pages Router)
- **Lucide React** for icons (included with shadcn)
- **React Hook Form** + **Yup** for form validation (NOT Zod - Zod removed)
- **Framer Motion** for animations
- **Axios** for API calls (simpler than TanStack Query)
- **SWR** for data fetching (lightweight alternative)
- Run on **port 3000**

### Additional Dependencies:
- **@radix-ui/react-*** (via shadcn components)
- **clsx** and **tailwind-merge** for className utilities
- **date-fns** for date formatting
- **next-themes** for dark/light mode
- **react-markdown** for rich content display
- **yup** for schema validation (Zod removed)
- **@hookform/resolvers** for React Hook Form + Yup integration
- **framer-motion** for smooth animations
- **@eslint/eslintrc** for ESLint v9 compatibility
- **turbopack** for faster builds (via Next.js flags)

## Content Collections Needed:
- **Pages** (title, slug, content, meta tags, published status)
- **Posts** (blog posts with categories, tags, featured image)
- **Services** (medical services with descriptions, images, pricing)
- **Media** (file uploads - PDFs, images, videos with metadata)
- **Team** (staff profiles with photos, roles, bio)
- **Locations** (office locations with address, contact info, hours)
- **Categories** (for organizing content)
- **Tags** (for content tagging)

## Frontend Pages to Create:
- **Homepage** with hero, services overview, latest posts
- **About** page with team and company info
- **Services** page with dynamic service listings
- **Blog** page with post listings and search
- **Single Post** page with rich content
- **Contact** page with forms and location info
- **Admin Dashboard** (custom, not Payload's default)

## Configuration Requirements:

### Next.js Configuration:
```json
// tsconfig.json - strict TypeScript
{
  "compilerOptions": {
    "strict": true,
    "noImplicitAny": true,
    "strictNullChecks": true,
    "strictFunctionTypes": true
  }
}
```

### Tailwind v4 Setup:
- Use **tailwindcss@^4** package with **@tailwindcss/postcss** plugin
- Import Tailwind v4 CSS correctly with `@import "tailwindcss";`
- Configure with **tailwind.config.ts** (TypeScript)
- **Turbopack** enabled for faster builds and development

### shadcn/ui Components Needed:
- Button, Input, Label, Textarea
- Card, Badge, Avatar
- Dialog, Sheet, Popover
- Table, Tabs, Accordion  
- Form components with React Hook Form integration
- Navigation Menu, Breadcrumb
- Alert, Toast notifications
- Loading Spinner, Progress
- Dark mode Toggle

## File Upload Requirements:
- **Image optimization** with Next.js Image component
- **File type validation** (PDF, DOCX, JPG, PNG, MP4)
- **File size limits** and progress indicators  
- **Cloud storage integration** (AWS S3 or similar)
- **CDN integration** for fast file delivery

## Development & Deployment Setup:

### Local Development (No Nginx Required):
- **Backend runs on localhost:3001** (Payload admin at /admin, API at /api)
- **Frontend runs on localhost:3000** (calls backend via axios)
- **Hot reload** for both frontend and backend
- **Concurrent development** setup with npm scripts

### Production Deployment:
- **Docker containers** for each service
- **Docker Compose** for orchestration
- **Nginx** as reverse proxy (only in production)
- **Environment-based configuration** (dev vs prod)

## API Integration Pattern (Use Axios + SWR):
```typescript
// Simple pattern - easier than TanStack Query
import useSWR from 'swr'
import axios from 'axios'

const fetcher = (url: string) => axios.get(url).then(res => res.data)

export function usePosts() {
  const { data, error, isLoading } = useSWR('/api/posts', fetcher)
  return { posts: data, error, isLoading }
}
```

## Form Validation with Yup (Easier than Zod):
```typescript
import * as yup from 'yup'

const schema = yup.object({
  name: yup.string().required('Name is required'),
  email: yup.string().email().required('Email is required'),
  message: yup.string().min(10).required('Message is required')
})
```

## Environment Variables Template:
```env
# Payload Backend
DATABASE_URI=mongodb://localhost:27017/payload
PAYLOAD_SECRET=your-secret-here
JWT_SECRET=your-jwt-secret

# Next.js Frontend  
NEXT_PUBLIC_API_URL=http://localhost:3001/api
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-nextauth-secret
```

## What I Need You To Do:

### 1. Project Initialization:
- **Create project structure** with proper folder organization
- **Initialize both projects** with exact package versions
- **Set up TypeScript** configurations for both
- **Configure development scripts** to run both simultaneously

### 2. Backend Setup (Payload):
- **Install Payload CMS** with TypeScript
- **Configure MongoDB connection** with error handling
- **Create all collections** with proper TypeScript interfaces
- **Set up file uploads** with validation
- **Configure authentication** and user roles
- **Add sample data seeding** scripts

### 3. Frontend Setup (Next.js):
- **Install Next.js 14.2.5** with App Router
- **Set up Tailwind CSS v4** configuration
- **Install and configure shadcn/ui** components
- **Create axios instance** with base URL configuration
- **Set up SWR** for data fetching
- **Configure React Hook Form** with Yup validation

### 4. Easy Code Requirements:
- **Simple, readable code** - no over-engineering
- **Clear folder structure** with intuitive naming
- **Minimal configuration** files
- **Easy-to-understand** API calls
- **Straightforward** form handling
- **Simple** state management (no Redux/Zustand needed)

### 5. Docker & Deployment Setup:
- **Dockerfile** for Payload backend
- **Dockerfile** for Next.js frontend  
- **Docker Compose** for local development
- **Production Docker Compose** with Nginx
- **Environment variable** management
- **Volume mounting** for file uploads

### 6. Development Experience:
- **Single command** to start everything locally
- **Hot reload** for both services
- **Easy debugging** setup
- **Clear documentation** for setup and usage
- **npm scripts** for common tasks

## Code Quality Requirements (Keep It Simple):
- **Clean TypeScript** - use interfaces, avoid complex types
- **Simple ESLint** configuration (not overly strict)
- **Prettier** for consistent formatting
- **Clear import paths** (@/components, @/lib, @/types)
- **Basic error handling** - no complex error boundaries needed
- **Loading states** with simple spinners
- **Mobile-responsive** design
- **Basic accessibility** (alt tags, labels)

## File Structure Requirements:
```
payload-backend/
├── src/
│   ├── collections/      # Payload collections
│   ├── lib/             # Utilities
│   └── server.ts        # Entry point
├── uploads/             # File storage
└── Dockerfile

nextjs-frontend/
├── app/                 # App Router pages
├── components/          # React components
├── lib/                # Utilities, axios config
├── types/              # TypeScript interfaces
└── Dockerfile

docker-compose.yml      # Development setup
docker-compose.prod.yml # Production with Nginx
nginx.conf             # Production nginx config
```

## Docker Requirements:
- **Multi-stage builds** for optimization
- **Development volumes** for hot reload
- **Production optimization** 
- **Environment variable** injection
- **Health checks** for services
- **Nginx SSL** configuration for production

## Final Deliverables:
1. **Complete working system** that runs with `docker-compose up`
2. **Development setup** with hot reload
3. **Production-ready** Docker configuration
4. **Sample data** and content
5. **README.md** with clear setup instructions
6. **Environment variable** templates
7. **Basic tests** (optional but nice to have)

**Priority: Make the code SIMPLE and EASY to understand. No over-engineering!**