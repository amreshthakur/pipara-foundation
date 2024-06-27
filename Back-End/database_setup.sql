-- Create the database
CREATE DATABASE IF NOT EXISTS user_management;

-- Use the database
USE user_management;

-- Create the users table
CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert initial users (for testing) (optional)
INSERT INTO users (username, email, password) VALUES
('testuser1', 'testuser1@example.com', '$2y$10$e0NR0Q7n5m0j9j39u5sX3O1a7Z9EzRUz/ZBfP0z1yDJ.sZXAfFyR2'), -- Password: Test@1234
('testuser2', 'testuser2@example.com', '$2y$10$e0NR0Q7n5m0j9j39u5sX3O1a7Z9EzRUz/ZBfP0z1yDJ.sZXAfFyR2'); -- Password: Test@1234
