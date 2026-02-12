// Seed script to populate database with initial products
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Product from './models/Product.js';

dotenv.config();

// Sample products data
const products = [
  { name: 'Laptop', price: 999, description: 'High-performance laptop', stock: 50 },
  { name: 'Smartphone', price: 699, description: 'Latest smartphone model', stock: 100 },
  { name: 'Headphones', price: 199, description: 'Noise-cancelling headphones', stock: 75 },
  { name: 'Smartwatch', price: 299, description: 'Fitness tracking smartwatch', stock: 60 },
  { name: 'Tablet', price: 499, description: '10-inch tablet', stock: 40 },
  { name: 'Camera', price: 799, description: 'Digital camera 24MP', stock: 30 },
  { name: 'Speaker', price: 149, description: 'Bluetooth speaker', stock: 80 },
  { name: 'Monitor', price: 349, description: '27-inch 4K monitor', stock: 45 },
  { name: 'Keyboard', price: 89, description: 'Mechanical keyboard', stock: 120 },
  { name: 'Mouse', price: 49, description: 'Wireless mouse', stock: 150 }
];

const seedProducts = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('MongoDB connected');

    await Product.deleteMany();
    await Product.insertMany(products);
    
    console.log('Products seeded successfully');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding products:', error);
    process.exit(1);
  }
};

seedProducts();
