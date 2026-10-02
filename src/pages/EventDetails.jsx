import { useParams, Link } from 'react-router-dom';
import {
  getEvents,
  formatEventDate,
  isUpcoming
} from '../storage.js';

export default function EventDetails() {

  const { id } = useParams();

  const event = getEvents().find(
    e => e.id === Number(id)
  );

  if (!event) {
    return (
      <section className="page">
        <p className="empty">
          Event not found.
        </p>

        <Link className="btn" to="/events">
          Back to events
        </Link>
      </section>
    );
  }

  const upcoming = isUpcoming(event);

  return (
    <section className="page detail">

      {event.image ? (
        <img
          src={event.image}
          alt={event.name}
          className="detail-img"
        />
      ) : (
        <div className="detail-img placeholder">
          [EVENT IMAGE]
        </div>
      )}

      <span className="tag">
        {event.category}
      </span>

      <h1>{event.name}</h1>

      <p className="meta">
        {formatEventDate(event)}
        <br />
        {event.venue}
      </p>

      <p>{event.description}</p>

      {upcoming && (
        <Link
          className="btn"
          to={`/register/${event.id}`}
        >
          Register
        </Link>
      )}

      {!upcoming && (
        <p className="meta">
          This event has already ended.
        </p>
      )}

    </section>
  );
}