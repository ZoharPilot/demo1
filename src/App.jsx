import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import ReFrame from './components/reframe-app';
import UserProfile from './components/user-profile';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ReFrame />} />
        <Route path="/user-profile" element={<UserProfile />} />
      </Routes>
    </Router>
  );
}

export default App