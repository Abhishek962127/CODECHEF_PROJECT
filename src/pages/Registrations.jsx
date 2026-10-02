import { useState } from 'react';
import AdminNav from '../components/AdminNav.jsx';
import { getEvents, getRegistrations } from '../storage.js';

export default function Registrations() {
  const events = getEvents();
  const [registrations] = useState(getRegistrations());
  const [search, setSearch] = useState('');
  const [eventFilter, setEventFilter] = useState('All');

  // A registration stores only eventId, so look up the event name when needed.
  const eventName = id => { const ev = events.find(e => e.id === id); return ev ? ev.name : '(deleted event)'; };

  const s = search.toLowerCase();
  const shown = registrations.filter(r =>
    (r.name.toLowerCase().includes(s) || r.email.toLowerCase().includes(s) || eventName(r.eventId).toLowerCase().includes(s)) &&
    (eventFilter === 'All' || r.eventId === Number(eventFilter)));

  return (
    <section className="page">
      <h1>Registrations</h1><AdminNav />
      <div className="filters">
        <input placeholder="Search name, email or event..." value={search} onChange={e => setSearch(e.target.value)} />
        <select value={eventFilter} onChange={e => setEventFilter(e.target.value)}>
          <option value="All">All events</option>{events.map(e => <option key={e.id} value={e.id}>{e.name}</option>)}
        </select>
      </div>
      {shown.length === 0 ? <p className="empty">No registrations found.</p> : (
        <div className="table-wrap"><table>
          <thead><tr><th>Name</th><th>Email</th><th>College</th><th>Year</th><th>Phone</th><th>Event</th></tr></thead>
          <tbody>{shown.map(r => <tr key={r.id}><td>{r.name}</td><td>{r.email}</td><td>{r.college}</td><td>{r.year}</td><td>{r.phone}</td><td>{eventName(r.eventId)}</td></tr>)}</tbody>
        </table></div>
      )}
    </section>
  );
}
