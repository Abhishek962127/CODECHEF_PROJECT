import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    // DEMO ONLY: the password is visible in the code. Real sites need a backend.
    if (email === 'admin@example.com' && password === 'admin123') {
      localStorage.setItem('adminLoggedIn', 'true');
      navigate('/admin/dashboard');
    } else setError('Invalid email or password.');
  }
  return (
    <section className="page narrow">
      <h1>Admin Login</h1>
      <form className="form box" onSubmit={handleSubmit}>
        <label>Email<input value={email} onChange={e => setEmail(e.target.value)} /></label>
        <label>Password<input type="password" value={password} onChange={e => setPassword(e.target.value)} /></label>
        {error && <p className="error">{error}</p>}
        <button className="btn">Login</button>
      </form>
    </section>
  );
}
