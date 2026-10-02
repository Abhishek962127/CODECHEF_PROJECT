import { useState } from 'react';
import { Link } from 'react-router-dom';
import { club } from '../data/initialEvents.js';

export default function Navbar() {
  const [open, setOpen] = useState(false); // is the mobile menu open?
  const close = () => setOpen(false);
  return (
    <header className="navbar">
      <div className="nav-inner">
        <Link to="/" className="brand" onClick={close}>{club.name}</Link>
        <button className="menu-btn" onClick={() => setOpen(!open)} aria-label="Toggle menu">☰</button>
        <nav className={open ? 'nav-links open' : 'nav-links'}>
          <Link to="/" onClick={close}>Home</Link>
          <Link to="/events" onClick={close}>Events</Link>
          <a href="/#about" onClick={close}>About Club</a>
          <Link to="/admin/login" onClick={close}>Admin Login</Link>
        </nav>
      </div>
    </header>
  );
}
