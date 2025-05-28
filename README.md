# 🐞 Bug Tracker Dashboard

A full-stack web application for tracking software bugs, designed to demonstrate proficiency in frontend, backend, database management, and cloud deployment workflows.

---

## ✅ Features

- User authentication (JWT)
- Bug creation, listing, and filtering
- Role-based access control (admin/user)
- Dashboard UI for managing bug reports
- MongoDB-backed persistence
- Seed scripts for user/bug generation
- Role change automation via CLI
- Full deployment via Render using Dockerized MongoDB (local) and Vite + Express (production)

---

## 🧱 Tech Stack

### Frontend
- React + Vite
- Axios
- Tailwind CSS

### Backend
- Node.js + Express
- Mongoose (MongoDB ODM)
- JWT for authentication
- REST API architecture

### Database
- MongoDB (local via Docker or hosted via Atlas)

### DevOps
- Docker (MongoDB containerized locally)
- Render (deployed backend + static frontend build)
- GitHub for version control
- CLI seed tools for role management

---

## 🛠 Getting Started (Local Development)

### 1. Spin up MongoDB locally
```bash
docker run -d -p 27017:27017 --name mongo mongo
```

### 2. Seed database
```bash
cd server
node scripts/seed.js
```

### 3. Start the backend server
```bash
cd server/api
npm install
npm start
```

### 4. Start the frontend client
```bash
cd client
npm install
npm run dev
```

Frontend: `http://localhost:5173`  
Backend API: `http://localhost:5000/api`

---

## 🚀 Deployment (Render)

### 1. Create a new Web Service on [Render.com](https://render.com)

- **Root directory**: `server/api`
- **Start command**: `npm start`
- **Environment Variables**:
  - `MONGO_URI`: your Atlas DB URI
  - `JWT_SECRET`: random secure string

### 2. Deploy static client

- Build locally:
  ```bash
  cd client
  npm run build
  ```
- Upload `/dist` to a new **Static Site** on Render

---

## 🔧 Utility Scripts

### Change role from user → admin
```bash
node scripts/roleChanger.js promote <username>
```

### Change role from admin → user
```bash
node scripts/roleChanger.js demote <username>
```

---

## 📦 Future Enhancements

- Add email notifications via microservice (Python)
- Redis caching layer for query optimization
- Optional background worker (Java/C#) for analytics
- GraphQL endpoint support
- CI/CD integration via GitHub Actions

---

## 📄 License

MIT
