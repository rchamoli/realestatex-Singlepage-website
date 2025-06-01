# Estate Website

## Project Structure

- `frontend/` — React.js app (Vite)
  - `src/pages/` — Home, Amenities, Gallery, Floor Plans, Contact
  - `src/components/` — Reusable components
  - `src/images/` — Images
  - `src/styles/` — Stylesheets
- `backend/` — Node.js + Express API
  - MongoDB config placeholder (`config.js`)
  - Lead model/controller/routes for `/api/leads`

## Getting Started

### Frontend
```sh
cd frontend
npm install
npm run dev
```

### Backend
```sh
cd backend
npm install
npm start
```

- Update `backend/.env` with your MongoDB URI if needed.
- The backend exposes a POST `/api/leads` endpoint for lead capture.
