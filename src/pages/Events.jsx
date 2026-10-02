import { useState } from 'react';
import EventCard from '../components/EventCard.jsx';
import { categories } from '../data/initialEvents.js';
import { getEvents } from '../storage.js';

export default function Events() {
  const [events] = useState(getEvents());
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');

  // Both conditions must be true, so search and category work together.
  const shown = events.filter(e =>
    e.name.toLowerCase().includes(search.toLowerCase()) && (category === 'All' || e.category === category));

  return (
    <section className="page">
      <h1>All Events</h1>
      <div className="filters">
        <input placeholder="Search events..." value={search} onChange={e => setSearch(e.target.value)} />
        <select value={category} onChange={e => setCategory(e.target.value)}>
          <option>All</option>{categories.map(c => <option key={c}>{c}</option>)}
        </select>
      </div>
      {shown.length === 0 ? <p className="empty">No events found. Try changing your search or category.</p> : <div className="grid">{shown.map(e => <EventCard key={e.id} event={e} />)}</div>}
    </section>
  );
}
