import { Link } from 'react-router-dom';
import { formatDate } from '../storage.js';

// Props: "event" is one event object. Used on Home and Events pages.
export default function EventCard({ event }) {
  return (
    <article className="card">
      {event.image ? <img src={event.image} alt={event.name} className="card-img" /> : <div className="card-img placeholder">[EVENT IMAGE]</div>}
      <div className="card-body">
        <span className="tag">{event.category}</span>
        <h3>{event.name}</h3>
        <p className="meta">{formatDate(event.date)} at {event.time}<br />{event.venue}</p>
        <p>{event.description}</p>
        <div className="row">
          <Link className="btn outline" to={`/events/${event.id}`}>View Details</Link>
          <Link className="btn" to={`/register/${event.id}`}>Register</Link>
        </div>
      </div>
    </article>
  );
}
