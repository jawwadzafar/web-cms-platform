# Git Setup Guide

## 📁 Repository Structure

This repository contains the complete System CMS platform:

```
system-cms/                 # Root repository
├── .gitignore             # Comprehensive gitignore for all components
├── README.md              # Main documentation
├── PROJECT-UNDERSTANDING.md # Complete system overview
├── cms-admin/             # Payload CMS v3 backend
├── nextjs-frontend/       # Next.js 15 frontend with Turbopack
├── docker-compose.yml     # Development setup
├── docker-compose.prod.yml # Production setup
└── nginx.conf             # Production nginx config
```

## 🚀 Initial Git Setup

### 1. First Commit
```bash
# Add all files (respecting .gitignore)
git add .

# Create initial commit
git commit -m "🎉 Initial commit: Medical Center CMS

✅ Next.js 15.5.0 frontend with Turbopack
✅ Payload CMS backend with TypeScript
✅ Tailwind CSS v4 with modern configuration
✅ Docker setup for development and production
✅ Complete medical center theme and components

Features:
- Homepage with hero section
- Contact form with validation
- Responsive design with shadcn/ui
- Modern development stack (React 19, ESLint v9)
- Turbopack for faster builds
- MongoDB with sample data seeding
- Production-ready Docker configuration"

# Add remote (replace with your repository URL)
git remote add origin https://github.com/yourusername/medical-cms.git

# Push to main branch
git push -u origin main
```

## 🔄 Development Workflow

### Branch Strategy
```bash
# Create feature branch
git checkout -b feature/new-component

# Work on your changes...
# Add and commit
git add .
git commit -m "✨ Add new medical services component"

# Push feature branch
git push -u origin feature/new-component

# Create PR, merge, then cleanup
git checkout main
git pull origin main
git branch -d feature/new-component
```

### Common Commands
```bash
# Check status
git status

# View ignored files (should respect .gitignore)
git status --ignored

# Add specific directories
git add nextjs-frontend/
git add cms-admin/

# Commit with conventional format
git commit -m "🐛 Fix form validation in contact page"
git commit -m "✨ Add new blog listing component"  
git commit -m "📦 Update dependencies to latest versions"
git commit -m "🔧 Configure Turbopack for faster builds"
```

## 📋 What's Ignored

The root `.gitignore` automatically excludes:

### Development Files
- `node_modules/` in all directories
- `.env*` files (environment variables)
- Build outputs (`.next/`, `dist/`, `build/`)
- TypeScript build info

### Sensitive Data
- Database uploads (`cms-admin/uploads/`)
- SSL certificates
- Private keys and certificates
- Environment configuration files

### IDE & OS Files
- `.DS_Store` (macOS)
- `.vscode/` settings
- Editor temporary files

## 🚨 Security Notes

### Never Commit These Files:
- `.env` files with real credentials
- `uploads/` directory with user files
- SSL certificates or private keys
- Database connection strings with passwords
- API keys or secrets

### Safe to Commit:
- `.env.example` (template files)
- Source code and configurations
- Docker compose files (without secrets)
- Documentation and README files

## 🔧 Git Configuration

### Set up your identity:
```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

### Useful Git aliases:
```bash
git config --global alias.st status
git config --global alias.co checkout  
git config --global alias.br branch
git config --global alias.cm commit
```

## 📦 Pre-commit Hooks (Optional)

Consider adding pre-commit hooks for:
- ESLint checks
- TypeScript compilation
- Format checking
- Build verification

## 🚀 Deployment

When ready to deploy:

1. **Development**: Push to `develop` branch
2. **Staging**: Create release branch → merge to `staging`
3. **Production**: Merge `staging` → `main` → tag release

## 🆘 Troubleshooting

### Large Files
If you accidentally commit large files:
```bash
# Remove from git but keep local
git rm --cached path/to/large/file
git commit -m "🗑️ Remove large file from tracking"
```

### Sensitive Data
If you committed sensitive data:
```bash
# Remove from history (use carefully!)
git filter-branch --force --index-filter \
'git rm --cached --ignore-unmatch path/to/sensitive/file' \
--prune-empty --tag-name-filter cat -- --all
```

---

**Happy coding! 🎉**