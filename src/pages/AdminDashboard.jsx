import AdminNav from '../components/AdminNav.jsx';
import { getEvents, getRegistrations, isUpcoming } from '../storage.js';
export default function AdminDashboard() {
  const events = getEvents();
  const cards = [['Total Events', events.length], ['Upcoming Events', events.filter(isUpcoming).length], ['Total Registrations', getRegistrations().length]];
  return (
    <section className="page">
      <h1>Admin Dashboard</h1><AdminNav />
      <div className="grid">{cards.map(([label, n]) => <div className="box stat" key={label}><b>{n}</b>{label}</div>)}</div>
    </section>
  );
}
