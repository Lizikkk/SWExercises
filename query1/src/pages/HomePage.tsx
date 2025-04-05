import React from 'react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
    }}>
      <Link to="/users" style={{ fontSize: "50px" }}>Users</Link>
    </div>
  );
};

export default HomePage;
