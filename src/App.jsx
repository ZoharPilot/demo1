import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import ReFrame from './components/reframe-app';
import UserProfile from './components/user-profile';

function App() {
  // קבע את הבסיס דינמית
  const basename = import.meta.env.PROD ? '/demo1' : '/';
    console.log('BASE_URL:', import.meta.env.BASE_URL);

  return (
    <Router basename={basename}>
      <Routes>
        <Route path="/" element={<ReFrame />} />
          <Route path="/user-profile/:userId" element={<UserProfile />} />
      </Routes>
    </Router>
  );
}

export default App;