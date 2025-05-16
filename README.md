
# Bug Tracker Dashboard

A full-stack bug tracking web application designed to demonstrate proficiency across frontend, backend, databases, and DevOps.

## Features
- User authentication
- Bug creation, listing, filtering
- Role-based access control
- Dashboard analytics
- Email notifications via Python microservice
- Optional background worker for data import (Java/C#)
- GraphQL support
- Redis caching
- Dockerized services with NGINX reverse proxy
- CI/CD with GitHub Actions

## Tech Stack

### Frontend
- React
- Axios
- Bootstrap/Tailwind CSS

### Backend
- Node.js + Express
- Flask (Python)
- Java (optional background service)

### Database
- MongoDB
- PostgreSQL or MySQL
- Redis

### DevOps
- Docker, Docker Compose
- NGINX
- GitHub Actions
- AWS/GCP optional deployment

## Setup

1. **Clone the repo**
```bash
git clone https://github.com/yourusername/bug-tracker-dashboard.git
cd bug-tracker-dashboard
```

2. **Docker**
```bash
docker-compose up --build
```

3. **Frontend**
```bash
cd client
npm install
npm run dev
```

4. **Backend**
```bash
cd server/api
npm install
npm start
```

5. **Python Microservice**
```bash
cd server/python_service
pip install -r requirements.txt
python app.py
```

## Folder Structure

- `client/`: React frontend
- `server/api/`: Express REST API
- `server/python_service/`: Python notification service
- `server/graphql/`: GraphQL API service
- `docker/`: Docker and Compose files
- `nginx/`: NGINX configuration
- `.github/workflows/`: CI/CD setup

## License
MIT License
---

## MongoDB Setup with Atlas

1. Go to [https://www.mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free cluster
3. Create a new database user
4. Allow IP access from anywhere (0.0.0.0/0)
5. Copy your connection string and replace `<username>`, `<password>`, and `<dbname>`

Example:
```
MONGO_URI=mongodb+srv://myuser:mypass@cluster0.mongodb.net/bugtracker
```

Add this to your `.env` or Render environment settings.

---

## Seeding the Database

To populate with test data (users, bugs), run:

```bash
node server/scripts/seed.js
```

- Admin login: `admin@example.com` / `password123`
- User login: `jane@example.com` / `password123`