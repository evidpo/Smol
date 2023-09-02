import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { auth } from '../services/auth';
import '../styles/Dashboard.css';

const Dashboard: React.FC = () => {
  const [user, setUser] = useState(null);
  const history = useHistory();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        history.push('/login');
      }
    });
  }, [history]);

  const handleLogout = async () => {
    try {
      await auth.signOut();
      history.push('/login');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div id="dashboard">
      <h1>Welcome, {user ? user.email : 'Guest'}</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;