import { Link } from 'react-router-dom';
import EventCard from '../components/EventCard.jsx';
import { club } from '../data/initialEvents.js';
import { getEvents, isUpcoming, formatDate } from '../storage.js';

export default function Home() {
  // Upcoming = today or later, soonest first. [...x] copies the array before sorting.
  const upcoming = getEvents().filter(isUpcoming).sort((a, b) => a.date.localeCompare(b.date));
  const featured = upcoming[0]; // simplest rule: the next event is the featured one
  return (
    <>
      <section className="hero">
        <h1>{club.name}</h1>
        <p className="tagline">{club.tagline}</p>
        <p>{club.intro}</p>
        <Link className="btn" to="/events">Explore Events</Link>
      </section>

      <section className="page" id="about">
        <h2>About Our Club</h2>
        <div className="grid">
          <div className="box"><h3>Who we are</h3><p>[Describe what your club is.]</p></div>
          <div className="box"><h3>What we do</h3><p>[Workshops, contests, hackathons, talks...]</p></div>
          <div className="box"><h3>What you learn</h3><p>[Skills students gain.]</p></div>
          <div className="box"><h3>Why join</h3><p>[Why students should participate.]</p></div>
        </div>
      </section>

      {featured && (
        <section className="page">
          <h2>Featured Event</h2>
          <div className="featured">
            {featured.image ? <img src={featured.image} alt={featured.name} /> : <div className="placeholder">[EVENT IMAGE]</div>}
            <div>
              <h3>{featured.name}</h3>
              <p className="meta">{formatDate(featured.date)} at {featured.time} · {featured.venue}</p>
              <p>{featured.description}</p>
              <Link className="btn" to={`/register/${featured.id}`}>Register</Link>
            </div>
          </div>
        </section>
      )}

      <section className="page">
        <h2>Upcoming Events</h2>
        {upcoming.length === 0 ? <p className="empty">No upcoming events right now.</p> : <div className="grid">{upcoming.map(e => <EventCard key={e.id} event={e} />)}</div>}
      </section>
    </>
  );
}
