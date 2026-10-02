// Small helpers so every page reads/writes localStorage the same way.
// localStorage only stores text, so we convert with JSON.stringify / JSON.parse.
import { initialEvents } from './data/initialEvents.js';

export function getEvents() {
  const saved = localStorage.getItem('events');
  if (saved === null) { // first visit: store the sample events
    localStorage.setItem('events', JSON.stringify(initialEvents));
    return initialEvents;
  }
  return JSON.parse(saved);
}
export function saveEvents(list) { localStorage.setItem('events', JSON.stringify(list)); }
export function getRegistrations() { return JSON.parse(localStorage.getItem('registrations') || '[]'); }
export function saveRegistrations(list) { localStorage.setItem('registrations', JSON.stringify(list)); }
export const isAdmin = () => localStorage.getItem('adminLoggedIn') === 'true';

export const today = () => new Date().toISOString().slice(0, 10);
export const isUpcoming = e => e.date >= today(); // ISO dates compare correctly as text
export const formatDate = d => new Date(d + 'T00:00:00').toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
