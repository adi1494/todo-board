import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/Home/Home';
import Blank from './components/Blank/Blank';

import './App.css'

function App() {
  return (
    <div className='app'>
      <Router>
        <Routes>
          <Route path='/' exact element={<Blank />}></Route>
          <Route path='/home' exact element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
