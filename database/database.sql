CREATE DATABASE ng_products_db;
USE ng_products_db;
CREATE TABLE products(
  id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(180),
  description VARCHAR(255),
  image VARCHAR(200),
  create_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
DESCRIBE products;