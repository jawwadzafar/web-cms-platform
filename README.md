# Medical Center CMS - Full Stack Headless CMS System

A complete headless CMS solution built with Payload CMS and Next.js, specifically designed for medical practices and healthcare organizations.

## 🏗️ Architecture

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Next.js       │    │   Payload CMS   │    │   MongoDB       │
│   Frontend      │◄──►│   Backend       │◄──►│   Database      │
│   (Port 3000)   │    │   (Port 3001)   │    │   (Port 27017)  │
└─────────────────┘    └─────────────────┘    └─────────────────┘
         ▲                       ▲                       ▲
         │                       │                       │
         └───────────────────────┼───────────────────────┘
                                 ▼
                    ┌─────────────────┐
                    │     Nginx       │
                    │  Reverse Proxy  │
                    │  (Port 80/443)  │
                    └─────────────────┘
```

## 🚀 Tech Stack

> **✅ Updated to Latest Versions (2024):** This system uses the exact same stack as the latest Next.js CLI with Next.js 15.5.0, React 19, Tailwind CSS v4, Turbopack, and ESLint v9.

### Backend (Payload CMS)
- **Payload CMS** - Latest version as headless CMS
- **TypeScript** - Strict mode enabled
- **MongoDB** - Database with Mongoose
- **Node.js 18+** - Runtime environment
- **Express** - Web framework
- **JWT** - Authentication

### Frontend (Next.js)
- **Next.js 15.5.0** - Latest React framework with App Router & Turbopack
- **React 19** - Latest React with Server Components
- **TypeScript** - Strict mode enabled
- **Tailwind CSS v4** - Latest styling framework (tailwindcss@^4 + @tailwindcss/postcss)
- **shadcn/ui** - UI component library
- **Framer Motion** - Animation library
- **SWR** - Data fetching
- **Axios** - HTTP client
- **React Hook Form + Yup** - Form validation (Zod removed)
- **ESLint v9** - Latest linting with @eslint/eslintrc
- **next-themes** - Dark/light mode support

### Infrastructure
- **Docker** - Containerization
- **Docker Compose** - Multi-container orchestration
- **Nginx** - Reverse proxy and load balancing
- **MongoDB** - NoSQL database

## 📋 Prerequisites

- **Node.js** 18 or higher
- **Docker** and **Docker Compose**
- **Git**
- **npm** or **yarn**

## 🎯 Quick Start

### 1. Clone the Repository (or Initialize Git)

```bash
# If cloning existing repository
git clone <repository-url>
cd system-cms

# If starting fresh (already initialized)
cd system-cms
git add .
git commit -m "🎉 Initial commit: Medical Center CMS"
# See GIT-SETUP.md for detailed Git workflow
```

### 2. Set Up Environment Variables

```bash
# Copy environment template
cp .env.example .env

# Edit .env file with your values
nano .env
```

**Required Environment Variables:**

```env
# MongoDB
MONGO_ROOT_USERNAME=admin
MONGO_ROOT_PASSWORD=your-secure-password

# Payload CMS
PAYLOAD_SECRET=your-32-character-secret-key
JWT_SECRET=your-32-character-jwt-secret
DATABASE_URI=mongodb://admin:your-password@localhost:27017/payload?authSource=admin

# Next.js
NEXT_PUBLIC_API_URL=http://localhost:3001/api
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### 3. Start with Docker Compose (Recommended)

```bash
# Start all services in development mode
docker-compose up -d

# View logs
docker-compose logs -f

# Stop all services
docker-compose down
```

### 4. Manual Setup (Alternative)

If you prefer running without Docker:

```bash
# Install backend dependencies
cd payload-backend
npm install
npm run dev

# In another terminal, install frontend dependencies
cd ../nextjs-frontend
npm install
npm run dev

# Make sure MongoDB is running locally
```

### 5. Access the Applications

- **Frontend Website**: http://localhost:3000
- **Payload Admin Panel**: http://localhost:3001/admin
- **Payload API**: http://localhost:3001/api

**Default Admin Credentials:**
- Email: `admin@medicalcenter.com`
- Password: `Admin123!`

## 🏃‍♂️ Development

### Project Structure

```
system-cms/
├── payload-backend/         # Payload CMS backend
│   ├── src/
│   │   ├── collections/     # Payload collections
│   │   ├── lib/            # Utilities and helpers
│   │   ├── server.ts       # Express server
│   │   └── payload.config.ts
│   ├── uploads/            # File storage
│   └── Dockerfile
├── nextjs-frontend/        # Next.js frontend
│   ├── src/
│   │   ├── app/           # App Router pages
│   │   ├── components/    # React components
│   │   ├── lib/          # API and utilities
│   │   └── types/        # TypeScript types
│   └── Dockerfile
├── docker-compose.yml      # Development setup
├── docker-compose.prod.yml # Production setup
├── nginx.conf             # Nginx configuration
└── README.md
```

### Available Scripts

#### Backend (payload-backend/)
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run generate:types    # Generate TypeScript types
```

#### Frontend (nextjs-frontend/)
```bash
npm run dev          # Start development server with Turbopack
npm run build        # Build for production with Turbopack
npm run start        # Start production server
npm run lint         # Run ESLint v9
```

### Hot Reloading & Performance

Both frontend and backend support hot reloading with improved performance:

- **Frontend**: Turbopack for faster builds (~736ms startup vs 1500ms+)
- **Backend**: Automatic restart using tsx/nodemon
- **Database**: Persistent storage with volumes
- **Build Performance**: Turbopack provides up to 5x faster full builds
- **Development**: Sub-second hot reloading with Turbopack

## 📊 Content Management

### Collections Available

1. **Pages** - Static pages (About, Services, etc.)
2. **Posts** - Blog posts and articles
3. **Services** - Medical services and treatments
4. **Team** - Staff and doctor profiles
5. **Locations** - Office locations and contact info
6. **Media** - Image and file uploads
7. **Categories** - Content categorization
8. **Tags** - Content tagging system
9. **Users** - Admin and editor accounts

### Key Features

- **Rich Text Editor** - Lexical-based content editing
- **Media Management** - Upload and organize files
- **SEO Optimization** - Meta tags and structured data
- **Multi-language Ready** - Internationalization support
- **Role-based Access** - Admin, Editor, User roles
- **API-first** - RESTful and GraphQL APIs

## 🚀 Production Deployment

### 1. Environment Setup

```bash
# Copy and update production environment
cp .env.example .env.production

# Update with production values
nano .env.production
```

### 2. Docker Production Deployment

```bash
# Start production services
docker-compose -f docker-compose.prod.yml up -d

# Scale services if needed
docker-compose -f docker-compose.prod.yml up -d --scale nextjs-frontend=2
```

### 3. SSL Configuration

1. Obtain SSL certificates (Let's Encrypt recommended)
2. Place certificates in `./ssl/` directory
3. Uncomment HTTPS server block in `nginx.conf`
4. Update environment variables with HTTPS URLs

### 4. Production Checklist

- [ ] Update all environment variables
- [ ] Configure SSL certificates
- [ ] Set up database backups
- [ ] Configure monitoring and logging
- [ ] Set up CI/CD pipeline
- [ ] Configure CDN for static assets
- [ ] Enable security headers
- [ ] Set up error monitoring

## 🔧 Configuration

### Payload CMS Configuration

Key configuration files:
- `payload-backend/src/payload.config.ts` - Main configuration
- `payload-backend/src/collections/` - Collection schemas

### Next.js Configuration

- `nextjs-frontend/next.config.js` - Next.js settings
- `nextjs-frontend/tailwind.config.ts` - Tailwind configuration
- `nextjs-frontend/tsconfig.json` - TypeScript settings

### Database Configuration

- MongoDB connection via `DATABASE_URI`
- Automatic collection creation via `mongo-init.js`
- Data seeding via `payload-backend/src/lib/seed.ts`

## 🔐 Security

### Authentication

- JWT-based authentication
- Secure password hashing with bcrypt
- Role-based access control
- Session management

### Security Headers

- CORS configuration
- Helmet.js security headers
- Rate limiting with Nginx
- Input validation and sanitization

### Best Practices

- Environment variable encryption
- Regular security updates
- Database access controls
- SSL/TLS encryption
- Content Security Policy

## 📖 API Documentation

### REST API Endpoints

```
GET    /api/posts              # Get all posts
GET    /api/posts/:id          # Get specific post
POST   /api/posts              # Create new post (auth required)
PUT    /api/posts/:id          # Update post (auth required)
DELETE /api/posts/:id          # Delete post (auth required)

GET    /api/services           # Get all services
GET    /api/pages              # Get all pages
GET    /api/team               # Get team members
GET    /api/locations          # Get locations
```

### GraphQL API

Available at: `http://localhost:3001/api/graphql`

## 🧪 Testing

### Running Tests

```bash
# Backend tests
cd payload-backend
npm run test

# Frontend tests
cd nextjs-frontend
npm run test

# E2E tests
npm run test:e2e
```

### Testing Strategy

- Unit tests for utilities and helpers
- Integration tests for API endpoints
- Component testing for React components
- E2E tests for critical user flows

## 🐛 Troubleshooting

### Common Issues

#### Database Connection Issues
```bash
# Check MongoDB connection
docker-compose logs mongodb

# Reset MongoDB data
docker-compose down
docker volume rm system-cms_mongodb_data
docker-compose up -d
```

#### Port Conflicts
```bash
# Check which services are using ports
lsof -i :3000
lsof -i :3001
lsof -i :27017

# Kill processes if needed
kill -9 <PID>
```

#### Build Failures
```bash
# Clear Node modules and reinstall
rm -rf node_modules package-lock.json
npm install

# Clear Docker cache
docker system prune -a
```

### Debugging

#### Enable Debug Logging

```bash
# Backend debugging
DEBUG=payload:* npm run dev

# Frontend debugging
NEXT_DEBUG=1 npm run dev
```

#### Database Debugging

```bash
# Connect to MongoDB directly
docker exec -it medical-cms-mongodb mongosh -u admin -p password123

# View collections
use payload
show collections
db.posts.find().limit(5)
```

## 📚 Resources

### Documentation

- [Payload CMS Documentation](https://payloadcms.com/docs)
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com)

### Community

- [Payload CMS Discord](https://discord.gg/payload)
- [Next.js Discord](https://discord.gg/nextjs)
- [GitHub Issues](https://github.com/your-repo/issues)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

### Development Guidelines

- Follow TypeScript strict mode
- Use Prettier for code formatting
- Write tests for new features
- Update documentation
- Follow semantic commit messages

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

For support and questions:

- 📧 Email: support@medicalcenter.com
- 🐛 Issues: [GitHub Issues](https://github.com/your-repo/issues)
- 💬 Discord: [Project Discord](https://discord.gg/your-discord)

## 🙏 Acknowledgments

- [Payload CMS Team](https://payloadcms.com) for the excellent headless CMS
- [Vercel Team](https://vercel.com) for Next.js
- [Tailwind Labs](https://tailwindlabs.com) for Tailwind CSS
- [shadcn](https://github.com/shadcn) for the UI component library

---

## 📋 Recent Updates

### v2.0 - Latest Tech Stack Upgrade (2024)

✅ **Frontend Modernization:**
- Upgraded to **Next.js 15.5.0** with Turbopack support
- Updated to **React 19** with latest Server Components
- Migrated to **Tailwind CSS v4** (tailwindcss@^4 + @tailwindcss/postcss)
- Added **Framer Motion** for smooth animations
- Upgraded to **ESLint v9** with @eslint/eslintrc compatibility
- **Removed Zod** in favor of Yup for simpler validation
- Performance: ~50% faster builds with Turbopack

✅ **Development Experience:**
- **Turbopack** enabled for dev and build commands
- Faster startup times (736ms vs 1500ms+)
- Modern ESLint configuration
- Improved type safety with React 19 types

✅ **Package Management:**
- All dependencies updated to latest compatible versions
- Removed redundant packages (Zod, old Tailwind packages)
- Added missing dependencies (Framer Motion, ESLint v9)

---

**Built with ❤️ for healthcare professionals and medical practices**