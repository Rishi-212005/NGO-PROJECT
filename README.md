# NGO Foundation Portal

A full-stack (MERN) platform built to manage volunteer registrations, showcase NGO initiatives, and provide a clean, dynamic administration interface for organizers.

## 🚀 How the Website Works

The platform is divided into two primary experiences:

### 1. Public Facing Website 
- **Landing & Info Pages**: Visitors can explore the NGO's mission, team, and contact information.
- **Volunteer Registration (`/volunteer`)**: A dynamic form where interested individuals can sign up to volunteer. They provide their Name, Email, Phone, Age, City, Area of Interest, and a personal message. This data is instantly securely stored in a MongoDB Atlas database.

### 2. Admin Portal & Logins
The application features **One primary Admin Login** flow:
- **Admin Login (`/admin/login`)**: A secure gateway for NGO organizers.
- **Admin Dashboard (`/admin/dashboard`)**: Once authenticated, admins have access to a live dashboard that fetches real-time data from MongoDB. 
  - **Dynamic Statistics**: Automatically calculates total registered volunteers, Active Projects (based on unique areas of interest), and Regions Covered (based on unique applicant cities).
  - **Volunteer Management**: Displays a searchable, paginated table of all applicants. Admins can click "View Details" to open a modal with the applicant's full contact information and personal messages.

---

## 🛠 Tech Stack

- **Frontend**: React (Vite), TypeScript, TailwindCSS + shadcn/ui, Framer Motion
- **Backend**: Node.js, Express.js
- **Database**: MongoDB Atlas (Mongoose)

---

## 📂 File Structure

The project utilizes a split-monorepo architecture separating the backend and the frontend:

```text
NGO-Project/
├── backend/                  # Node.js/Express Server
│   ├── models/               # Mongoose Database Schemas
│   │   └── Volunteer.js      # Volunteer data model
│   ├── routes/               # Express API endpoints
│   │   └── volunteers.js     # GET/POST logic for registrations & stats
│   ├── server.js             # Main backend entry point
│   └── .env                  # Environment Variables (MONGODB_URI)
│
├── src/                      # React Frontend Source Code
│   ├── components/           # Reusable UI components (Navbar, Footer, Modals)
│   ├── pages/                # Main Application Views
│   │   ├── AdminDashboard.tsx# Protected admin control panel
│   │   ├── AdminLoginPage.tsx# Admin authentication page
│   │   ├── VolunteerPage.tsx # Registration form
│   │   └── Index.tsx         # Landing page
│   ├── App.tsx               # Primary React Router / App Wrapper
│   └── index.css             # Tailwind base styles
│
├── vite.config.ts            # Vite bundler & API proxy config
└── package.json              # Frontend dependencies
```

---

## 💻 Local Setup

### 1. Backend Setup
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the `backend/` directory with your database URI:
   ```env
   MONGODB_URI=your_mongodb_connection_string
   PORT=5000
   ```
4. Start the backend:
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
   *(Vite proxy will automatically route all `/api/*` frontend fetch requests directly to your local backend on port 5000)*

---

## 🌐 Deployment Instructions

This repository is optimized for modern continuous deployment:
1. **Frontend (Vercel / Netlify)**: Deploy the root repository (`/`). Ensure the build command is `npm run build` and the output folder is `dist`. Add a `VITE_API_URL` environment variable pointing to your deployed backend.
2. **Backend (Render / Railway)**: Explicitly deploy the `/backend` folder. Set your `MONGODB_URI` environment variable so the production server can authenticate with MongoDB Atlas.

---

## 👨‍💻 Contributors

- **Sai Rishi Kumar** ([@Rishi-212005](https://github.com/Rishi-212005)) - *Full Stack Developer & Architect*
