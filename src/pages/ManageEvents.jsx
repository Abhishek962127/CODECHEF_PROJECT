import { useState } from 'react';
import AdminNav from '../components/AdminNav.jsx';
import EventForm from '../components/EventForm.jsx';
import { getEvents, saveEvents, getRegistrations, saveRegistrations, formatDate } from '../storage.js';

export default function ManageEvents() {
  const [events, setEvents] = useState(getEvents());
  const [editing, setEditing] = useState(null); // null = adding a new event
  const [message, setMessage] = useState('');

  // CREATE and UPDATE share one function.
  function handleSave(form) {
    let updated;
    if (editing) updated = events.map(e => (e.id === editing.id ? { ...form, id: editing.id } : e)); // UPDATE: swap the matching event
    else updated = [...events, { ...form, id: Date.now() }]; // CREATE: add to the end
    setEvents(updated); saveEvents(updated);
    setMessage(editing ? 'Event updated.' : 'Event added.');
    setEditing(null);
  }

  // DELETE: keep every event except the chosen one.
  function handleDelete(id) {
    if (!window.confirm('Are you sure you want to delete this event?')) return;
    const updated = events.filter(e => e.id !== id);
    setEvents(updated); saveEvents(updated);
    saveRegistrations(getRegistrations().filter(r => r.eventId !== id)); // remove its registrations too
    setMessage('Event deleted.');
  }

  return (
    <section className="page">
      <h1>Manage Events</h1><AdminNav />
      {message && <p className="success">{message}</p>}
      {/* key makes React rebuild the form when we switch events, so it pre-fills correctly */}
      <EventForm key={editing ? editing.id : 'new'} editing={editing} onSave={handleSave} onCancel={() => setEditing(null)} />
      {events.length === 0 ? <p className="empty">No events yet. Add one above.</p> : (
        <div className="table-wrap"><table>
          <thead><tr><th>Name</th><th>Category</th><th>Date</th><th>Venue</th><th>Actions</th></tr></thead>
          <tbody>{events.map(e => (
            <tr key={e.id}><td>{e.name}</td><td>{e.category}</td><td>{formatDate(e.date)}</td><td>{e.venue}</td>
              <td className="row"><button className="link-btn" onClick={() => { setEditing(e); window.scrollTo(0, 0); }}>Edit</button><button className="link-btn red" onClick={() => handleDelete(e.id)}>Delete</button></td></tr>
          ))}</tbody>
        </table></div>
      )}
    </section>
  );
}
