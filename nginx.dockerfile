FROM nginx:alpine

# Copy nginx configuration
COPY nginx.conf /etc/nginx/nginx.conf

# Create directories for SSL certificates (for production)
RUN mkdir -p /etc/nginx/ssl

# Create directory for uploads
RUN mkdir -p /var/www/uploads

# Set proper permissions
RUN chown -R nginx:nginx /var/www/uploads
RUN chmod -R 755 /var/www/uploads

# Expose ports
EXPOSE 80 443

# Health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
    CMD curl -f http://localhost/health || exit 1

# Start nginx
CMD ["nginx", "-g", "daemon off;"]