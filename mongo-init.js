// MongoDB initialization script
db = db.getSiblingDB('payload');

// Create collections if they don't exist
db.createCollection('pages');
db.createCollection('posts');
db.createCollection('services');
db.createCollection('media');
db.createCollection('team');
db.createCollection('locations');
db.createCollection('categories');
db.createCollection('tags');
db.createCollection('users');

print('Database initialized successfully!');