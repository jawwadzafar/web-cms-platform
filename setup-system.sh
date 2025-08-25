#!/bin/bash

# 🚀 System CMS Setup Script
# This script will set up both cms-admin and nextjs-frontend to work together

set -e

echo "🚀 Setting up System CMS..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
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

# Check if required tools are installed
check_requirements() {
    print_status "Checking requirements..."
    
    if ! command -v node &> /dev/null; then
        print_error "Node.js is not installed. Please install Node.js 18+ first."
        exit 1
    fi
    
    if ! command -v npm &> /dev/null; then
        print_error "npm is not installed. Please install npm first."
        exit 1
    fi
    
    if ! command -v docker &> /dev/null; then
        print_warning "Docker is not installed. You can still run locally without Docker."
    fi
    
    print_success "Requirements check passed!"
}

# Setup cms-admin backend
setup_cms_admin() {
    print_status "Setting up cms-admin backend..."
    
    cd cms-admin
    
    # Create .env file if it doesn't exist
    if [ ! -f .env ]; then
        print_status "Creating .env file for cms-admin..."
        cat > .env << EOF
# Database Configuration
DATABASE_URI=mongodb://localhost:27017/payload

# Payload CMS Configuration
PAYLOAD_SECRET=your-super-secret-payload-key-change-in-production
PAYLOAD_PUBLIC_SERVER_URL=http://localhost:3100

# Server Configuration
PORT=3100
NODE_ENV=development

# Next.js Configuration
NEXT_PUBLIC_SERVER_URL=http://localhost:3100

# CORS Configuration
CORS_ORIGINS=http://localhost:3000,http://localhost:3100
CSRF_ORIGINS=http://localhost:3000,http://localhost:3100
EOF
        print_success "Created .env file for cms-admin"
    else
        print_status ".env file already exists in cms-admin"
    fi
    
    # Install dependencies
    print_status "Installing dependencies for cms-admin..."
    npm install
    
    print_success "cms-admin setup completed!"
    cd ..
}

# Setup nextjs-frontend
setup_frontend() {
    print_status "Setting up nextjs-frontend..."
    
    cd nextjs-frontend
    
    # Create .env.local file if it doesn't exist
    if [ ! -f .env.local ]; then
        print_status "Creating .env.local file for nextjs-frontend..."
        cat > .env.local << EOF
# API Configuration
NEXT_PUBLIC_API_URL=http://localhost:3100
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# Site Configuration
NEXT_PUBLIC_SITE_NAME="Company Name"
NEXT_PUBLIC_SITE_DESCRIPTION="Professional services and solutions for modern businesses"
EOF
        print_success "Created .env.local file for nextjs-frontend"
    else
        print_status ".env.local file already exists in nextjs-frontend"
    fi
    
    # Install dependencies
    print_status "Installing dependencies for nextjs-frontend..."
    npm install
    
    print_success "nextjs-frontend setup completed!"
    cd ..
}

# Start MongoDB (if Docker is available)
start_mongodb() {
    if command -v docker &> /dev/null; then
        print_status "Starting MongoDB with Docker..."
        
        # Check if MongoDB container is already running
        if docker ps | grep -q "system-cms-mongodb"; then
            print_status "MongoDB is already running"
        else
            # Start MongoDB
            docker run -d \
                --name system-cms-mongodb \
                -p 27017:27017 \
                -e MONGO_INITDB_ROOT_USERNAME=admin \
                -e MONGO_INITDB_ROOT_PASSWORD=password123 \
                -e MONGO_INITDB_DATABASE=payload \
                mongo:7.0
            
            print_success "MongoDB started successfully"
            
            # Wait for MongoDB to be ready
            print_status "Waiting for MongoDB to be ready..."
            sleep 10
        fi
    else
        print_warning "Docker not available. Please ensure MongoDB is running on localhost:27017"
    fi
}

# Start the entire system
start_system() {
    print_status "Starting the entire system..."
    
    # Start MongoDB
    start_mongodb
    
    # Start cms-admin in background
    print_status "Starting cms-admin backend on port 3100..."
    cd cms-admin
    npm run dev &
    CMS_ADMIN_PID=$!
    cd ..
    
    # Wait for cms-admin to be ready
    print_status "Waiting for cms-admin to be ready..."
    sleep 15
    
    # Start nextjs-frontend in background
    print_status "Starting nextjs-frontend on port 3000..."
    cd nextjs-frontend
    npm run dev &
    FRONTEND_PID=$!
    cd ..
    
    # Wait for frontend to be ready
    print_status "Waiting for frontend to be ready..."
    sleep 10
    
    print_success "System started successfully!"
    echo ""
    echo "🌐 Your System CMS is now running:"
    echo "   • Frontend: http://localhost:3000"
    echo "   • Backend: http://localhost:3100"
    echo "   • CMS Admin: http://localhost:3100/admin"
    echo ""
    echo "📝 To stop the system, run:"
    echo "   kill $CMS_ADMIN_PID $FRONTEND_PID"
    echo ""
    echo "🔧 To view logs:"
    echo "   • cms-admin: cd cms-admin && npm run dev"
    echo "   • frontend: cd nextjs-frontend && npm run dev"
}

# Main execution
main() {
    echo "=========================================="
    echo "🚀 System CMS Setup & Launch Script"
    echo "=========================================="
    echo ""
    
    check_requirements
    setup_cms_admin
    setup_frontend
    start_system
    
    echo ""
    echo "🎉 Setup completed successfully!"
    echo "Your System CMS is now running and ready to use!"
}

# Run main function
main "$@"
