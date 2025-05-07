import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FloatingNavbar from './components/FloatingNavbar';
import RidesSection from './components/RidesSection';
import RideDetailsPage from './components/RideDetailsPage';

function App() {
  return (
    <Router>
      <div className="App">
        <FloatingNavbar />
        <div className="pt-20 mt-10"> {/* Add padding to account for fixed navbar */}
          <Routes>
            <Route path="/" element={<RidesSection />} />
            <Route path="/rides/:city/:rideName" element={<RideDetailsPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;