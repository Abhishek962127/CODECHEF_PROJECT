import { initialEvents } from './data/initialEvents.js';

const EVENTS_KEY = 'events';
const REGISTRATIONS_KEY = 'registrations';
const ADMIN_KEY = 'adminLoggedIn';


// ================= EVENTS =================

export function getEvents() {
    const saved = localStorage.getItem(EVENTS_KEY);

    if (!saved) {
        localStorage.setItem(EVENTS_KEY, JSON.stringify(initialEvents));
        return initialEvents;
    }

    return JSON.parse(saved);
}


export function saveEvents(events) {
    localStorage.setItem(EVENTS_KEY, JSON.stringify(events));
}


// ================= REGISTRATIONS =================

export function getRegistrations() {
    return JSON.parse(
        localStorage.getItem(REGISTRATIONS_KEY)
    ) || [];
}


export function saveRegistrations(registrations) {
    localStorage.setItem(
        REGISTRATIONS_KEY,
        JSON.stringify(registrations)
    );
}


// ================= DATE =================

export function formatDate(date) {
    return new Date(date).toLocaleDateString('en-IN', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
    });
}


export function formatEventDate(event) {

    if (
        event.endDate &&
        event.endDate !== event.date
    ) {
        return `${formatDate(event.date)} - ${formatDate(event.endDate)}`;
    }

    return formatDate(event.date);
}


// ================= UPCOMING / PAST =================

export function isUpcoming(event) {

    const today = new Date();

    today.setHours(0, 0, 0, 0);

    const endDate = new Date(
        event.endDate || event.date
    );

    endDate.setHours(23, 59, 59, 999);

    return endDate >= today;
}


export function isPast(event) {
    return !isUpcoming(event);
}


// ================= ADMIN =================

export function isAdmin() {
    return localStorage.getItem(ADMIN_KEY) === 'true';
}


export function setAdminLoggedIn(value) {
    localStorage.setItem(
        ADMIN_KEY,
        value ? 'true' : 'false'
    );
}


export function logoutAdmin() {
    localStorage.removeItem(ADMIN_KEY);
}