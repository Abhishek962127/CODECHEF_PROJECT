import { NavLink, useNavigate } from 'react-router-dom';
export default function AdminNav() {
  const navigate = useNavigate();
  function logout() { localStorage.removeItem('adminLoggedIn'); navigate('/admin/login'); }
  return (
    <div className="admin-nav">
      <NavLink to="/admin/dashboard">Dashboard</NavLink>
      <NavLink to="/admin/events">Manage Events</NavLink>
      <NavLink to="/admin/registrations">Registrations</NavLink>
      <button className="link-btn" onClick={logout}>Logout</button>
    </div>
  );
}
