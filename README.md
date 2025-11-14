# Marketplace Backend — Full Starter (Node.js + TypeScript + MySQL + Sequelize)

This repository is a full starter for the Marketplace Backend assignment covering Seller, Delivery, Salesman and Customer modules with Swagger docs and seed data.

## Quick Start

1. Edit `.env` with your database credentials.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Seed the database (development only — this recreates tables):
   ```bash
   npm run seed
   ```
4. Run in dev mode:
   ```bash
   npm run dev
   ```
5. Swagger UI: http://localhost:3000/api-docs

## What is included
- JWT auth (signup/login)
- Models: User, Seller, Product, Order, OrderItem, Delivery, Salesman, Beat, Visit, Complaint
- Controllers and routes for core flows
- Swagger setup with basic endpoint docs
- Seed data (2 sellers, 1 salesman, 1 delivery person, 2 customers)
- Postman collection (postman_collection.json)

## Notes
- This is a starter scaffold with working endpoints and examples. Expand business rules and validation as needed.
- All identifiers use camelCase as requested.
