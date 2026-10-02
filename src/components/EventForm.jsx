import { useState } from 'react';
import { categories } from '../data/initialEvents.js';

const empty = { name: '', category: 'Coding', date: '', time: '', venue: '', description: '', image: '' };

// Used for both Add and Edit. "editing" is the event being edited (or null when adding).
export default function EventForm({ editing, onSave, onCancel }) {
  const [form, setForm] = useState(editing || empty); // pre-filled when editing
  const [error, setError] = useState('');

  // One handler for every input: the input's "name" says which field to update.
  function handleChange(e) { setForm({ ...form, [e.target.name]: e.target.value }); }

  function handleSubmit(e) {
    e.preventDefault(); // stop the page from reloading
    if (!form.name.trim() || !form.date || !form.time.trim() || !form.venue.trim() || !form.description.trim()) {
      setError('Please fill in all required fields.');
      return;
    }
    onSave(form);
    if (!editing) setForm(empty);
    setError('');
  }

  return (
    <form className="form box" onSubmit={handleSubmit}>
      <h2>{editing ? 'Edit Event' : 'Add Event'}</h2>
      <label>Event name *<input name="name" value={form.name} onChange={handleChange} /></label>
      <label>Category *<select name="category" value={form.category} onChange={handleChange}>{categories.map(c => <option key={c}>{c}</option>)}</select></label>
      <label>Date *<input type="date" name="date" value={form.date} onChange={handleChange} /></label>
      <label>Time * (e.g. 10:00 AM)<input name="time" value={form.time} onChange={handleChange} /></label>
      <label>Venue *<input name="venue" value={form.venue} onChange={handleChange} /></label>
      <label>Description *<textarea name="description" rows="3" value={form.description} onChange={handleChange} /></label>
      <label>Image URL (optional)<input name="image" value={form.image} onChange={handleChange} /></label>
      {error && <p className="error">{error}</p>}
      <div className="row"><button className="btn">{editing ? 'Save Changes' : 'Add Event'}</button>{editing && <button type="button" className="btn outline" onClick={onCancel}>Cancel</button>}</div>
    </form>
  );
}
