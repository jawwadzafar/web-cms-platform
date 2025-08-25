# 🚀 System CMS - Complete Headless CMS Solution

A production-ready headless CMS built with **Payload CMS v3** and **Next.js 15**, featuring professional article management, advanced content blocks, dynamic pages, and a modern admin interface.

## ✨ Features

### 🎯 Core Features
- **Payload CMS v3** - Latest headless CMS with advanced admin panel
- **Next.js 15** - Latest React framework with App Router
- **TypeScript** - Full type safety across the stack
- **Tailwind CSS v4** - Modern utility-first CSS framework
- **shadcn/ui** - Beautiful, accessible UI components
- **Dark/Light Mode** - Theme toggle with next-themes

### 🏗️ Content Management
- **Dynamic Pages** - Create pages with content blocks
- **Articles** - Professional blog content with advanced workflow
- **Services** - Service management with pricing and features
- **Team Members** - Team profiles and management
- **Media Library** - File uploads and organization
- **Contact Forms** - Form submission handling
- **Newsletter** - Email subscription management

### 🧱 Content Blocks
- **High Impact Hero** - Full-screen hero sections
- **Call to Action** - Engaging CTA sections
- **Content Blocks** - Rich text content areas
- **Media Blocks** - Image and media displays
- **Customizable Layouts** - Flexible content arrangement

### 🔧 Technical Features
- **Live Preview** - Preview content changes in real-time
- **SEO Management** - Meta tags, descriptions, Open Graph
- **API Integration** - RESTful API for frontend consumption
- **Responsive Design** - Mobile-first design approach
- **Performance Optimized** - Fast loading and smooth interactions

## 🏗️ Architecture

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Frontend      │    │   Backend       │    │   Database      │
│   (Next.js)     │◄──►│   (Payload CMS) │◄──►│   (MongoDB)     │
│   Port: 3000    │    │   Port: 3100    │    │   Port: 27017   │
└─────────────────┘    └─────────────────┘    └─────────────────┘
```

## 🚀 Quick Start

### Option 1: Automated Setup (Recommended)

```bash
# Make the setup script executable
chmod +x setup-system.sh

# Run the automated setup
./setup-system.sh
```

This script will:
- ✅ Check requirements
- ✅ Create environment files
- ✅ Install dependencies
- ✅ Start MongoDB (if Docker available)
- ✅ Launch both services
- ✅ Open your browser to the admin panel

### Option 2: Manual Setup

#### 1. Backend Setup (cms-admin)

```bash
cd cms-admin

# Create .env file
cat > .env << EOF
DATABASE_URI=mongodb://localhost:27017/payload
PAYLOAD_SECRET=your-super-secret-payload-key-change-in-production
PAYLOAD_PUBLIC_SERVER_URL=http://localhost:3100
PORT=3100
NODE_ENV=development
NEXT_PUBLIC_SERVER_URL=http://localhost:3100
CORS_ORIGINS=http://localhost:3000,http://localhost:3100
CSRF_ORIGINS=http://localhost:3000,http://localhost:3100
EOF

# Install dependencies
npm install

# Start the backend
npm run dev
```

#### 2. Frontend Setup (nextjs-frontend)

```bash
cd nextjs-frontend

# Create .env.local file
cat > .env.local << EOF
NEXT_PUBLIC_API_URL=http://localhost:3100
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SITE_NAME="Company Name"
NEXT_PUBLIC_SITE_DESCRIPTION="Professional services and solutions for modern businesses"
EOF

# Install dependencies
npm install

# Start the frontend
npm run dev
```

#### 3. Database Setup

```bash
# Option A: Docker (Recommended)
docker run -d \
  --name system-cms-mongodb \
  -p 27017:27017 \
  -e MONGO_INITDB_ROOT_USERNAME=admin \
  -e MONGO_INITDB_ROOT_PASSWORD=password123 \
  -e MONGO_INITDB_DATABASE=payload \
  mongo:7.0

# Option B: Local MongoDB
# Install MongoDB locally and start the service
```

## 🌐 Access Points

Once everything is running:

- **Frontend Website**: http://localhost:3000
- **CMS Admin Panel**: http://localhost:3100/admin
- **API Endpoints**: http://localhost:3100/api
- **Health Check**: http://localhost:3100/health

## 🎨 Content Management

### Creating Your First Page

1. **Access Admin Panel**: Go to http://localhost:3100/admin
2. **Create User**: Set up your first admin user
3. **Create Page**: Use the Pages collection
4. **Add Blocks**: Choose from available content blocks
5. **Publish**: Set the page to published status

### Available Content Blocks

- **High Impact Hero** - Full-screen hero sections with background images
- **Call to Action** - Engaging CTA sections with buttons
- **Content** - Rich text content areas
- **Media** - Image and media displays with captions

### Content Types

- **Pages** - Dynamic website pages with content blocks
- **Articles** - Professional blog content with status workflow (draft/published/archived)
- **Services** - Company services with advanced pricing and features
- **Team** - Team member profiles
- **Categories** - Content categorization
- **Tags** - Content tagging
- **Media** - File uploads and management
- **Contact** - Form submissions
- **Newsletter** - Email subscriptions

## 🐳 Docker Deployment

### Development

```bash
docker-compose up -d
```

### Production

```bash
docker-compose -f docker-compose.prod.yml up -d
```

## 🔧 Configuration

### Environment Variables

#### Backend (.env)
```bash
DATABASE_URI=mongodb://localhost:27017/payload
PAYLOAD_SECRET=your-secret-key
PAYLOAD_PUBLIC_SERVER_URL=http://localhost:3100
PORT=3100
```

#### Frontend (.env.local)
```bash
NEXT_PUBLIC_API_URL=http://localhost:3100
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SITE_NAME="Your Company"
NEXT_PUBLIC_SITE_DESCRIPTION="Your description"
```

### Customization

- **Styling**: Modify `tailwind.config.ts` for design changes
- **Components**: Edit components in `src/components/`
- **Blocks**: Create new content blocks in `src/payload/blocks/`
- **Collections**: Modify collections in `src/collections/`

## 📱 Frontend Pages

- **Homepage** (`/`) - Displays featured content
- **Services** (`/services`) - Lists all services
- **Blog** (`/blog`) - Shows published articles with categories and tags
- **About** (`/about`) - Company information
- **Contact** (`/contact`) - Contact form
- **Dynamic Pages** (`/[slug]`) - CMS-created pages

## 🚀 Production Deployment

### 1. Build the Applications

```bash
# Backend
cd cms-admin
npm run build

# Frontend
cd nextjs-frontend
npm run build
```

### 2. Environment Setup

Create production environment files with:
- Production database URLs
- Secure secrets
- Production domain URLs
- SSL certificates

### 3. Deploy with Docker

```bash
docker-compose -f docker-compose.prod.yml up -d
```

## 🧪 Testing

```bash
# Backend tests
cd cms-admin
npm test

# Frontend tests
cd nextjs-frontend
npm test
```

## 📊 Monitoring

The production setup includes:
- **Prometheus** - Metrics collection
- **Grafana** - Data visualization
- **Health Checks** - Service monitoring
- **Logging** - Comprehensive logging

## 🔒 Security Features

- **CORS Protection** - Configured for production
- **CSRF Protection** - Built-in security
- **User Authentication** - Role-based access control
- **Input Validation** - Form and API validation
- **Environment Isolation** - Separate dev/prod configs

## 🆘 Troubleshooting

### Common Issues

1. **Port 3100 not accessible**
   - Check if cms-admin is running
   - Verify .env file has correct PORT
   - Check for port conflicts

2. **MongoDB connection failed**
   - Ensure MongoDB is running
   - Check DATABASE_URI in .env
   - Verify network connectivity

3. **Frontend can't connect to backend**
   - Check NEXT_PUBLIC_API_URL in .env.local
   - Ensure backend is running on port 3100
   - Check CORS configuration

### Debug Commands

```bash
# Check running processes
ps aux | grep node

# Check ports in use
lsof -i :3000
lsof -i :3100

# Check Docker containers
docker ps

# View logs
cd cms-admin && npm run dev
cd nextjs-frontend && npm run dev
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

- **Documentation**: Check this README and inline code comments
- **Issues**: Create GitHub issues for bugs or feature requests
- **Community**: Join our community discussions

---

## 🎉 What You've Built

Congratulations! You now have a **production-ready headless CMS** that includes:

✅ **Full Content Management System** with Payload CMS v3  
✅ **Modern Frontend** with Next.js 15 and Tailwind CSS v4  
✅ **Advanced Content Blocks** for dynamic page building  
✅ **Complete API Integration** between frontend and backend  
✅ **Professional Admin Interface** for content management  
✅ **Responsive Design** that works on all devices  
✅ **SEO Optimization** with meta tags and Open Graph  
✅ **Docker Support** for easy deployment  
✅ **Production Configuration** with monitoring and security  

**Your System CMS is ready to power professional websites, article platforms, and business applications!** 🚀