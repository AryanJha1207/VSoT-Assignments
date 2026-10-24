import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './Login';
import Home from './Home';

const ReactRouter = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div>
      ReactRouter
      <Routes>
        <Route path="/" element={<ProtectedRoute isLoggedIn={isLoggedIn} />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

function ProtectedRoute(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <Home />;
  } else {
    return <Login />;
  }
}

export default ReactRouter;