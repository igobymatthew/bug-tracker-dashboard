import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [bugs, setBugs] = useState([]);

  useEffect(() => {
    const fetchBugs = async () => {
      const token = localStorage.getItem('token');
      const res = await axios.get('http://localhost:5000/api/bugs', {
        headers: { Authorization: 'Bearer ' + token }
      });
      setBugs(res.data);
    };
    fetchBugs();
  }, []);

  return (
    <div>
      <h1>Bug Dashboard</h1>
      <ul>
        {bugs.map(bug => (
          <li key={bug._id}>{bug.title} - {bug.status}</li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;