#!/bin/bash

# 🧪 Blog System Test Script
# This script will test if your blog system is working properly

set -e

echo "🧪 Testing Blog System..."
echo "=========================="

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Test 1: Check if MongoDB is running
print_status "Testing MongoDB connection..."
if curl -s http://localhost:27017 > /dev/null 2>&1; then
    print_success "MongoDB is running on port 27017"
else
    print_error "MongoDB is not running on port 27017"
    echo "   Start MongoDB with: docker run -d --name system-cms-mongodb -p 27017:27017 mongo:7.0"
fi

# Test 2: Check if CMS backend is running
print_status "Testing CMS backend..."
if curl -s http://localhost:3100/health > /dev/null 2>&1; then
    print_success "CMS backend is running on port 3100"
else
    print_error "CMS backend is not running on port 3100"
    echo "   Start it with: cd cms-admin && npm run dev"
fi

# Test 3: Check if frontend is running
print_status "Testing frontend..."
if curl -s http://localhost:3000 > /dev/null 2>&1; then
    print_success "Frontend is running on port 3000"
else
    print_error "Frontend is not running on port 3000"
    echo "   Start it with: cd nextjs-frontend && npm run dev"
fi

# Test 4: Check CMS API endpoints
print_status "Testing CMS API endpoints..."
if curl -s http://localhost:3100/api/posts > /dev/null 2>&1; then
    print_success "Posts API endpoint is working"
else
    print_warning "Posts API endpoint not responding"
fi

if curl -s http://localhost:3100/api/categories > /dev/null 2>&1; then
    print_success "Categories API endpoint is working"
else
    print_warning "Categories API endpoint not responding"
fi

if curl -s http://localhost:3100/api/tags > /dev/null 2>&1; then
    print_success "Tags API endpoint is working"
else
    print_warning "Tags API endpoint not responding"
fi

# Test 5: Check environment files
print_status "Checking environment files..."

if [ -f "cms-admin/.env" ]; then
    print_success "cms-admin .env file exists"
else
    print_error "cms-admin .env file missing"
    echo "   Create it with the content from BLOG-SETUP-GUIDE.md"
fi

if [ -f "nextjs-frontend/.env.local" ]; then
    print_success "nextjs-frontend .env.local file exists"
else
    print_error "nextjs-frontend .env.local file missing"
    echo "   Create it with the content from BLOG-SETUP-GUIDE.md"
fi

echo ""
echo "🎯 Summary:"
echo "==========="

if curl -s http://localhost:27017 > /dev/null 2>&1 && \
   curl -s http://localhost:3100/health > /dev/null 2>&1 && \
   curl -s http://localhost:3000 > /dev/null 2>&1; then
    print_success "All services are running! 🎉"
    echo ""
    echo "🌐 Access Points:"
    echo "   • Frontend: http://localhost:3000"
    echo "   • Blog: http://localhost:3000/blog"
    echo "   • CMS Admin: http://localhost:3100/admin"
    echo ""
    echo "📝 Next Steps:"
    echo "   1. Go to http://localhost:3100/admin"
    echo "   2. Create your first admin user"
    echo "   3. Add categories and tags"
    echo "   4. Create blog posts"
    echo "   5. Visit http://localhost:3000/blog to see your posts!"
else
    print_error "Some services are not running. Please check the errors above."
    echo ""
    echo "🔧 Quick Fix:"
    echo "   1. Follow the BLOG-SETUP-GUIDE.md"
    echo "   2. Make sure MongoDB is running"
    echo "   3. Start cms-admin backend"
    echo "   4. Start nextjs-frontend"
fi

echo ""
echo "📚 For detailed setup instructions, see: BLOG-SETUP-GUIDE.md"
