import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/Home/Home';

import './App.css'

function App() {
  return (
    <div className='app'>
      <Router>
        <Routes>
          <Route path='/home' exact element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
