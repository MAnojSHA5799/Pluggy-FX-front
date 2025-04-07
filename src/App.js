import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Quotes from './components/Quotes';
import Average from './components/Average';
import Slippage from './components/Slippage';
import { useState } from 'react';

const App = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow">
        <div className="container">
          <Link className="navbar-brand fw-bold" to="/">Pluggy FX</Link>
          
          <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarNav" 
            aria-controls="navbarNav" 
            aria-expanded={!isNavCollapsed} 
            aria-label="Toggle navigation"
            onClick={handleNavCollapse}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/" onClick={handleNavCollapse}>Quotes</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/average" onClick={handleNavCollapse}>Average</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/slippage" onClick={handleNavCollapse}>Slippage</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Quotes />} />
        <Route path="/average" element={<Average />} />
        <Route path="/slippage" element={<Slippage />} />
      </Routes>
    </Router>
  );
};

export default App;
