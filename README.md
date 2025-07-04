# Adut: Modern E-commerce with Next.js

## Description

Adut is a high-performance, server-rendered e-commerce application built with Next.js 15. It leverages React Server Components, Server Actions, and Suspense to provide a seamless shopping experience. This project demonstrates modern web development practices and e-commerce functionalities.


## Tech Stack

- Node 22.10.0
- Npm 10.2.3
- Next.js 15
- TypeScript
- Zustand
- Module Sass
- Custom middleware for authentication
- Server Actions to hide requests to backend app
- ____ (for payment processing)


## Features

- Responsive design for optimal viewing on all devices
- Zustand global storage
- Dynamic product pages with real-time inventory updates
- Shopping cart with persistent storage
- Secure checkout process
- User authentication and account management
- Guest user view
- SEO optimization with dynamic metadata


## Installation

1. Clone the repository
2. Make sure you have node v22.10.0 installed
3. Navigate to the project directory:
```bash
cd adut-website
```
4. Install dependencies:
```bash
npm install
```
5. Set up environment variables:
Create a `.env.local` file in the root directory and add the following variables:
```bash
DATABASE_URL=your_database_connection_string
...
```
6. Run the development server:
```bash
npm run dev
```
7. Open `http://localhost:3000` to view the app


## Project Structure
adut-website/
├── public/
├── src/
|  ├── app/
│  |  ├── api/
│  |  |  └── ...requests to backend app
│  |  ├── auth/
│  |  |  └── ...auth related pages
│  |  ├── layout.tsx
│  |  └── page.tsx
|  ├── components/
│  |  └── ...page related components
|  ├── constants/
|  |  └── ...application related constants
|  ├── hooks/
|  ├── layout/
|  ├── lib/
|  │  ├── api
|  │  |  └── axiosConfig.ts
|  │  ├── mapers
|  │  └── cookies.ts
|  ├── schemas/
|  ├── store/
|  ├── types/
|  └── ui/
└── ...configuration files



## API Integration

This project uses a decoupled architecture with a separate Laravel backend that exposes API endpoints. The Next.js frontend communicates with these endpoints using server actions to ensure secure and efficient data transfer.

## Manual Deployment

Note: Currently, there is no .env

1. Build the application:
```bash
npm run build
```

2. Start the production server:
```bash
npm start
```
