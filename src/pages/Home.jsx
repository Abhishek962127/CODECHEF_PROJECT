import { Link } from 'react-router-dom';
import EventCard from '../components/EventCard.jsx';
import { club } from '../data/initialEvents.js';
import {
  getEvents,
  isUpcoming,
  formatEventDate
} from '../storage.js';

export default function Home() {

  const upcoming = getEvents()
    .filter(isUpcoming)
    .sort((a, b) =>
      a.date.localeCompare(b.date)
    );

  const featured = upcoming[0];

  return (
    <>
      <section className="hero">

        <h1>{club.name}</h1>

        <p className="tagline">
          {club.tagline}
        </p>

        <p>
          {club.intro}
        </p>

        <Link className="btn" to="/events">
          Explore Events
        </Link>

      </section>


      <section className="page" id="about">

        <h2>About Our Club</h2>

        <div className="grid">

          <div className="box">
            <h3>Who we are</h3>
            <p>
              CodeChef ABES EC Chapter is a student
              community focused on coding and
              competitive programming.
            </p>
          </div>

          <div className="box">
            <h3>What we do</h3>
            <p>
              We organize coding contests,
              hackathons, technical events and
              learning activities.
            </p>
          </div>

          <div className="box">
            <h3>What you learn</h3>
            <p>
              Students improve problem-solving,
              programming and teamwork skills.
            </p>
          </div>

          <div className="box">
            <h3>Why join</h3>
            <p>
              Participate in coding activities,
              collaborate with students and
              gain practical experience.
            </p>
          </div>

        </div>

      </section>


      {featured && (
        <section className="page">

          <h2>Featured Event</h2>

          <div className="featured">

            {featured.image ? (
              <img
                src={featured.image}
                alt={featured.name}
              />
            ) : (
              <div className="placeholder">
                [EVENT IMAGE]
              </div>
            )}

            <div>

              <h3>{featured.name}</h3>

              <p className="meta">
                {formatEventDate(featured)}
                <br />
                {featured.venue}
              </p>

              <p>
                {featured.description}
              </p>

              <Link
                className="btn"
                to={`/register/${featured.id}`}
              >
                Register
              </Link>

            </div>

          </div>

        </section>
      )}


      <section className="page">

        <h2>Upcoming Events</h2>

        {upcoming.length === 0 ? (

          <p className="empty">
            No upcoming events right now.
          </p>

        ) : (

          <div className="grid">

            {upcoming.map(event => (
              <EventCard
                key={event.id}
                event={event}
              />
            ))}

          </div>

        )}

      </section>
    </>
  );
}