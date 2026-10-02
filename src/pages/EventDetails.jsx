import { useParams, Link } from 'react-router-dom';
import { getEvents, formatDate } from '../storage.js';

export default function EventDetails() {
  const { id } = useParams(); // URL params are text, so convert with Number()
  const event = getEvents().find(e => e.id === Number(id));
  if (!event) return <section className="page"><p className="empty">Event not found.</p><Link className="btn" to="/events">Back to events</Link></section>;
  return (
    <section className="page detail">
      {event.image ? <img src={event.image} alt={event.name} className="detail-img" /> : <div className="detail-img placeholder">[EVENT IMAGE]</div>}
      <span className="tag">{event.category}</span>
      <h1>{event.name}</h1>
      <p className="meta">{formatDate(event.date)} at {event.time}<br />{event.venue}</p>
      <p>{event.description}</p>
      <Link className="btn" to={`/register/${event.id}`}>Register</Link>
    </section>
  );
}
