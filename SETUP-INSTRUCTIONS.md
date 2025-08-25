# 🚀 System CMS Setup Instructions

This guide will help you set up both the **cms-admin** backend and **nextjs-frontend** to work together locally.

## 📋 Prerequisites

- Node.js 18+ and npm/pnpm
- MongoDB running locally (or Docker)
- Both projects cloned and dependencies installed

## 🔧 Backend Setup (cms-admin)

### 1. Navigate to cms-admin directory
```bash
cd cms-admin
```

### 2. Create .env file
Create a `.env` file in the `cms-admin` directory with:
```bash
# Database
DATABASE_URI=mongodb://localhost:27017/payload

# Payload
PAYLOAD_SECRET=your-secret-here-change-in-production
PAYLOAD_PUBLIC_SERVER_URL=http://localhost:3100

# Port
PORT=3100

# Next.js
NEXT_PUBLIC_SERVER_URL=http://localhost:3100
```

### 3. Update package.json scripts
Edit `cms-admin/package.json` and update the scripts:
```json
{
  "scripts": {
    "dev": "cross-env NODE_OPTIONS=--no-deprecation next dev -p 3100",
    "start": "cross-env NODE_OPTIONS=--no-deprecation next start -p 3100"
  }
}
```

### 4. Start the backend
```bash
npm run dev
```

The Payload CMS admin panel will be available at: **http://localhost:3100/admin**

## 🌐 Frontend Setup (nextjs-frontend)

### 1. Navigate to nextjs-frontend directory
```bash
cd nextjs-frontend
```

### 2. Create .env.local file
Create a `.env.local` file in the `nextjs-frontend` directory with:
```bash
# API Configuration
NEXT_PUBLIC_API_URL=http://localhost:3100
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# Site Configuration
NEXT_PUBLIC_SITE_NAME="Company Name"
NEXT_PUBLIC_SITE_DESCRIPTION="Professional services and solutions for modern businesses"
```

### 3. Start the frontend
```bash
npm run dev
```

The frontend will be available at: **http://localhost:3000**

## 🔗 What's Connected

### Backend Collections (cms-admin)
- **Users** - Team members and admin users
- **Pages** - Dynamic website pages with content blocks
- **Posts** - Blog posts with rich content
- **Services** - Company services with pricing and features
- **Team** - Team member profiles
- **Categories** - Content categorization
- **Tags** - Content tagging
- **Locations** - Company office locations
- **Media** - File uploads and management
- **Contact** - Contact form submissions
- **Newsletter** - Email subscription management

### Frontend Pages (nextjs-frontend)
- **Homepage** - Displays featured content from backend
- **Services** - Lists all services from backend
- **Blog** - Shows blog posts from backend
- **About** - Company information
- **Contact** - Contact form that submits to backend

### API Integration
- **API Client** - `src/lib/api-client.ts` handles all backend communication
- **Real-time Data** - Frontend fetches data from cms-admin in real-time
- **Form Submissions** - Contact and newsletter forms submit to backend
- **Content Management** - All content is managed through Payload CMS admin

## 🎯 Features

### ✅ What's Working
- **Payload CMS v3** - Full admin panel with all collections
- **Content Management** - Create, edit, and manage all content types
- **Media Management** - Upload and organize images and files
- **User Management** - Admin users and team members
- **Live Preview** - Preview content changes before publishing
- **SEO Management** - Meta tags, descriptions, and Open Graph
- **Responsive Design** - Mobile-first design with Tailwind CSS v4
- **Dark/Light Mode** - Theme toggle with next-themes
- **Form Handling** - Contact and newsletter forms with validation

### 🚧 What You Can Do Next
1. **Add Content** - Use the admin panel to create posts, services, and pages
2. **Customize Design** - Modify Tailwind classes and components
3. **Add More Collections** - Extend the CMS with new content types
4. **Implement Search** - Add search functionality across content
5. **Add Authentication** - Implement user login/registration
6. **Email Integration** - Connect contact forms to email services
7. **Analytics** - Add Google Analytics or other tracking

## 🐛 Troubleshooting

### Backend Issues
- **Port 3100 in use**: Change PORT in .env file
- **MongoDB connection**: Ensure MongoDB is running
- **Admin panel not loading**: Check browser console for errors

### Frontend Issues
- **API errors**: Verify cms-admin is running on port 3100
- **Build errors**: Check TypeScript and ESLint configurations
- **Styling issues**: Ensure Tailwind CSS is properly configured

### Common Commands
```bash
# Backend
cd cms-admin
npm run dev

# Frontend (in new terminal)
cd nextjs-frontend
npm run dev

# Check MongoDB
mongosh
# or
docker-compose up -d
```

## 🎉 Success!

Once both systems are running:
- **Backend**: http://localhost:3100/admin
- **Frontend**: http://localhost:3000
- **API**: http://localhost:3100/api

You now have a fully functional headless CMS with a modern Next.js frontend! 🚀
