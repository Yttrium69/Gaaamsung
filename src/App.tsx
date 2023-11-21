import React from 'react';
import Main from './view/Main';
import './CSS/base.scss';
import './CSS/components.scss';
import Nav from './component/Nav';
import Admin from './view/Admin';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Main />
            }
          />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
