import { useState } from 'react';

const empty = { name: '', email: '', college: '', year: '', phone: '' };

export default function RegistrationForm({ onSubmit }) {
  const [form, setForm] = useState(empty);
  const [errors, setErrors] = useState({});

  function handleChange(e) { setForm({ ...form, [e.target.name]: e.target.value }); }

  function validate() {
    const e = {};
    if (!form.name.trim()) e.name = 'Please enter your name.';
    if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = 'Please enter a valid email address.';
    if (!form.college.trim()) e.college = 'Please enter your college.';
    if (!form.year) e.year = 'Please select your year.';
    if (!/^[0-9]{10}$/.test(form.phone)) e.phone = 'Please enter a 10-digit phone number.';
    return e;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const found = validate();
    setErrors(found);
    if (Object.keys(found).length === 0) { onSubmit(form); setForm(empty); }
  }

  return (
    <form className="form box" onSubmit={handleSubmit} noValidate>
      <label>Name<input name="name" value={form.name} onChange={handleChange} />{errors.name && <span className="error">{errors.name}</span>}</label>
      <label>Email<input name="email" value={form.email} onChange={handleChange} />{errors.email && <span className="error">{errors.email}</span>}</label>
      <label>College<input name="college" value={form.college} onChange={handleChange} />{errors.college && <span className="error">{errors.college}</span>}</label>
      <label>Year<select name="year" value={form.year} onChange={handleChange}><option value="">Select year</option>{['1st Year', '2nd Year', '3rd Year', '4th Year'].map(y => <option key={y}>{y}</option>)}</select>{errors.year && <span className="error">{errors.year}</span>}</label>
      <label>Phone number<input name="phone" value={form.phone} onChange={handleChange} />{errors.phone && <span className="error">{errors.phone}</span>}</label>
      <button className="btn">Register</button>
    </form>
  );
}
