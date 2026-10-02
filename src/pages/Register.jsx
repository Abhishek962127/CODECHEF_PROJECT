import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import RegistrationForm from '../components/RegistrationForm.jsx';
import { getEvents, getRegistrations, saveRegistrations } from '../storage.js';

export default function Register() {
  const { eventId } = useParams();
  const event = getEvents().find(e => e.id === Number(eventId));
  const [done, setDone] = useState(false);
  const [error, setError] = useState('');

  if (!event) return <section className="page"><p className="empty">Event not found.</p></section>;

  function handleSubmit(form) {
    const all = getRegistrations();
    // Stop the same email registering twice for the same event.
    if (all.some(r => r.eventId === event.id && r.email.toLowerCase() === form.email.toLowerCase())) {
      setError('This email is already registered for this event.');
      return;
    }
    saveRegistrations([...all, { id: Date.now(), eventId: event.id, ...form }]);
    setError('');
    setDone(true);
  }

  if (done) return (
    <section className="page narrow">
      <h1>Registration Successful!</h1>
      <p>You have registered for <b>{event.name}</b>.</p>
      <Link className="btn" to="/events">Back to events</Link>
    </section>
  );
  return (
    <section className="page narrow">
      <h1>Register</h1>
      <p>Event: <b>{event.name}</b></p>
      {error && <p className="error">{error}</p>}
      <RegistrationForm onSubmit={handleSubmit} />
    </section>
  );
}
