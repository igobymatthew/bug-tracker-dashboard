import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post('https://bugtracker-api.onrender.com/api/users/login', form);

    localStorage.setItem('token', res.data.token);
    window.location.href = '/';
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder="Email" />
      <input type="password" value={form.password} onChange={e => setForm({ ...form, password: e.target.value })} placeholder="Password" />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;