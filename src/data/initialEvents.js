// SAMPLE DATA - replace with your club's real events. Only used on the very first load.
export const categories = ['Coding', 'Workshop', 'Hackathon', 'Seminar', 'Cultural', 'Sports', 'Other'];

// Club info used in Navbar, Home and Footer. Edit these placeholders.
export const club = {
  name: '[CLUB NAME]',
  tagline: 'Discover. Learn. Connect.',
  intro: '[CLUB DESCRIPTION PLACEHOLDER] We are a student club that runs workshops, contests and talks.',
  email: '[CONTACT EMAIL]',
};

export const initialEvents = [
  { id: 1, name: 'Web Development Workshop', category: 'Workshop', date: '2026-10-10', time: '10:00 AM', venue: 'Seminar Hall', description: 'Learn the fundamentals of modern web development.', image: '' },
  { id: 2, name: 'Coding Contest', category: 'Coding', date: '2026-10-15', time: '2:00 PM', venue: 'Computer Lab', description: 'Test your problem-solving and coding skills.', image: '' },
  { id: 3, name: '24-Hour Hackathon', category: 'Hackathon', date: '2026-10-25', time: '9:00 AM', venue: 'Main Auditorium', description: 'Build a project with your team in 24 hours and present it to judges.', image: '' },
  { id: 4, name: 'Career in Tech Seminar', category: 'Seminar', date: '2026-09-01', time: '11:00 AM', venue: 'Seminar Hall', description: 'A past event, shown on the Events page but not under Upcoming.', image: '' },
];
