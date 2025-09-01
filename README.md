# Ghana Lands Commission Rent Management System (GLC RMS)

![https://www.zeusatlasltd.com/img/logo3.png]([https://www.zeusatlasltd.com/assets/media/logos/logo_main.png](https://www.zeusatlasltd.com/img/logo3.png))

Official Rent Management System for Ghana Lands Commission. This platform streamlines the management of state lands, tenants, invoices, payments, and reporting. Designed for efficiency, transparency, and security in land and rent administration.

## Table of Contents
- [Project Overview](#project-overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [System Architecture](#system-architecture)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)
  - [Mobile App Setup](#mobile-app-setup)
- [Database](#database)
- [API Documentation](#api-documentation)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Project Overview
The Ghana Lands Commission Rent Management System is a web and mobile application designed to track state-owned lands and leases, manage tenant information, generate invoices, record payments, and provide detailed reports for administrators. The system ensures accountability, prevents revenue leakage, and provides a centralized digital platform for managing state land assets.

## Features
- **Dashboard:** Summary of lands, tenants, payments, and notifications.
- **State Lands Management:** Add, update, and view land information and ownership history.
- **Tenant Management:** Track tenant details, lease agreements, and rental history.
- **Invoice Manager:** Generate and manage invoices, view invoice history.
- **Payments:** Record payments, track outstanding dues, generate receipts.
- **Inbox:** Messaging system for internal communication and tenant notifications.
- **Reports:** Generate monthly, yearly, and custom reports for tenants, lands, and payments.
- **Help & Documentation:** Access user guides, system documentation, and support resources.

## Tech Stack
**Backend:** Node.js, Express.js, PostgreSQL, JWT, bcrypt  
**Frontend:** React.js, React Router, Redux/Context API (optional), Metronic Theme  
**Mobile App:** React Native, React Navigation, Axios/Fetch API  
**Dev Tools:** Vite/Webpack, ESLint, Prettier, Postman/Insomnia, Git/GitHub  

## System Architecture
      ┌─────────────────────┐
      │   React Native App  │
      └─────────┬──────────┘
                │
                │ REST API / GraphQL
                │
      ┌─────────▼──────────┐
      │     React Web App   │
      └─────────┬──────────┘
                │
                │ HTTP Requests
                │
      ┌─────────▼──────────┐
      │    Node.js + Express│
      └─────────┬──────────┘
                │
                │ SQL Queries
                │
      ┌─────────▼──────────┐
      │     PostgreSQL DB  │
      └────────────────────┘

### Contact
Project Owner: Ghana Lands Commission
Developer / Maintainer: Zeus Atlas Ltd
Website: https://www.zeusatlasltd.com
Email: support@zeusatlasltd.com


## Getting Started

### Prerequisites
- Node.js >= 18.x  
- PostgreSQL >= 14.x  
- npm / yarn  
- Git  
- (Optional) Docker  

### Backend Setup
1. Clone the repository:
```bash
git clone https://github.com/yourusername/glc-rms.git
cd glc-rms/backend
2. npm install

glc-rms/
├─ backend/
│  ├─ controllers/
│  ├─ models/
│  ├─ routes/
│  ├─ middlewares/
│  └─ server.js
├─ frontend/
│  ├─ src/
│  │  ├─ components/
│  │  ├─ pages/
│  │  ├─ services/
│  │  └─ App.jsx
├─ mobile/
│  ├─ src/
│  │  ├─ components/
│  │  ├─ screens/
│  │  └─ App.jsx
└─ README.md


