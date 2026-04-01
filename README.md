# NGO Foundation Portal

A full-stack (MERN) platform built to manage volunteer registrations and a clean, dynamic administration interface.

## Tech Stack
- **Frontend**
  - React (Vite)
  - TypeScript
  - TailwindCSS + shadcn/ui
  - Framer Motion
- **Backend**
  - Node.js
  - Express
  - MongoDB (Mongoose)

## Project Structure

This is a split repository.
- **`/src`**: Contains the React UI and pages (`AdminDashboard.tsx`, `VolunteerPage.tsx`).
- **`/backend`**: Contains the Express Node application, models, and routes.

## Local Setup

### 1. Backend Setup
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the `backend/` directory:
   ```env
   MONGODB_URI=your_mongodb_connection_string
   PORT=5000
   ```
4. Start the server:
   ```bash
   node server.js
   ```

### 2. Frontend Setup
1. Open a new terminal from the root of the project:
   ```bash
   npm install
   ```
2. Start the Vite development server:
   ```bash
   npm run dev
   ```
   *(Vite proxy will automatically route `/api/*` requests to your backend on port 5000)*

## Deployment

The repository is built for split deployment architectures:
1. **Frontend Deployment**: Connect the root repository to **Vercel** or **Netlify**. Ensure the build command is `npm run build` and output folder is `dist`. Add the Environment Variable `VITE_API_URL` pointing to your deployed Backend URL.
2. **Backend Deployment**: Connect the `/backend` folder explicitly to **Render**, **Railway**, or **Heroku**. Add your `MONGODB_URI` environment variable.

## API Documentation

- `POST /api/volunteers` - Registers a new volunteer directly to MongoDB. Requires standard JSON body (name, email, phone, city, etc.).
- `GET /api/volunteers` - Fetches all volunteers (sorted by recency).
- `GET /api/volunteers/stats` - Compiles and returns aggregate dynamics dynamically calculated from the volunteer database.
