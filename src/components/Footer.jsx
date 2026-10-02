import { Link } from 'react-router-dom';
import { club } from '../data/initialEvents.js';
export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div><b>{club.name}</b><p>{club.intro}</p></div>
        <div><b>Links</b><p><Link to="/">Home</Link><br /><Link to="/events">Events</Link></p></div>
        <div><b>Contact</b><p>{club.email}</p></div>
      </div>
      <p className="copy">© {new Date().getFullYear()} {club.name}. All rights reserved.</p>
    </footer>
  );
}
