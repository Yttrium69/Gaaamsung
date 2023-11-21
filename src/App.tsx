import React from 'react';
import Main from './view/Main';
import './CSS/base.scss';
import './CSS/components.scss';
import Nav from './component/Nav';
import Admin from './view/Admin';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './CSS/interactive.scss';

function App() {
  return (
    <div className="App mobile">
      <Nav left={{text:null, link: '/', img:{src:'LOGO.svg', width:"7.5rem"}}} right={[{text:"About US", link:"/about"}, {text:"Order", link:"/order"}]}/>
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
