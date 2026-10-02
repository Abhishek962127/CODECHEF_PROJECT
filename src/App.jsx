import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import Events from './pages/Events.jsx';
import EventDetails from './pages/EventDetails.jsx';
import Register from './pages/Register.jsx';
import AdminLogin from './pages/AdminLogin.jsx';
import AdminDashboard from './pages/AdminDashboard.jsx';
import ManageEvents from './pages/ManageEvents.jsx';
import Registrations from './pages/Registrations.jsx';
import { isAdmin } from './storage.js';

// DEMO PROTECTION ONLY: anyone can set localStorage by hand, so this is not real security.
function AdminRoute({ children }) {
  return isAdmin() ? children : <Navigate to="/admin/login" />;
}

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/events/:id" element={<EventDetails />} />
          <Route path="/register/:eventId" element={<Register />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<AdminRoute><AdminDashboard /></AdminRoute>} />
          <Route path="/admin/events" element={<AdminRoute><ManageEvents /></AdminRoute>} />
          <Route path="/admin/registrations" element={<AdminRoute><Registrations /></AdminRoute>} />
          <Route path="*" element={<p className="page">Page not found.</p>} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
