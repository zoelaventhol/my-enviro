// get rid of logo?
import logo from './logo.svg';
import React, { useState } from "react";
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.js';
import FeaturedIndicatorView from './components/FeaturedIndicatorView.js';
import IconGridView from './components/IconGridView.js';
import HomeView from './components/HomeView.js';
import AboutView from './components/AboutView.js';

function App() {
  const [data, setData] = useState(94608);
  const [indicator, setIndicator] = useState({});

  // get local data based on form entry (ZIP code)
  function getLocalData() {
    
  }

  // get indicator info based on click
  // need to pass localData for dynamic components (good/bad news & value)
  function getIndicatorInfo() {

  }

  return (
    <div className="App">
      {/* only have things that should be visible from every page */}
      <Navbar />

      <Routes>
        {/* can pass props here */}
        {/* / is implied, homeview should load automatically */}
        <Route path="/" element={<HomeView />} />
        <Route path="/about" element={<AboutView />} />
        <Route path="/indicators" element={<IconGridView data={data}/>} />
        <Route path="/indicators/:id" element={<FeaturedIndicatorView id={indicator}/>} /> 
      </Routes>
    </div>
  );
}

export default App;
