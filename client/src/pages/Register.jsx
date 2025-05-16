import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [form, setForm] = useState({ username: '', email: '', password: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:5000/api/users/register', form);

    window.location.href = '/login';
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={form.username} onChange={e => setForm({ ...form, username: e.target.value })} placeholder="Username" />
      <input type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder="Email" />
      <input type="password" value={form.password} onChange={e => setForm({ ...form, password: e.target.value })} placeholder="Password" />
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;