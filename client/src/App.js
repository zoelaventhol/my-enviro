// get rid of logo?
import logo from './logo.svg';
import React, { useEffect, useState } from "react";
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.js';
import FeaturedIndicatorView from './components/FeaturedIndicatorView.js';
import IndicatorView from './components/IndicatorView.js';
import HomeView from './components/HomeView.js';
import AboutView from './components/AboutView.js';
import ErrorView from './components/ErrorView.js';

function App() {
  
  // initiate state for enviro_data (aka "data") and indicator_details (aka "indicatorDetails")
  const [envData, setEnvData] = useState({});
  const [allIndicators, setAllIndicators] = useState({});
  const [featIndicator, setFeatIndicator] = useState({});

  useEffect(() => {
    getAllIndicators();
  }, []);

  // get all indicator details
  async function getAllIndicators() {
    try {
      let response = await fetch(`/indicator_details`);
      if (response.ok) {
        let data = await response.json();
        setAllIndicators(data);
        console.log(data);
      } else {
        console.log(`Server error: ${response.status} ${response.statusText}`);
      }
    } catch (error) {
      console.log(`Network error: ${error.message}`);
    }
  }

  // get details for one indicator (by id)
  async function getFeatIndicator(id) {
    try {
      let response = await fetch(`/indicator_details/${id}`);
      if (response.ok) {
        let data = await response.json();
        setFeatIndicator(data);
        console.log(data);
      } else {
        console.log(`Server error: ${response.status} ${response.statusText}`);
      }
    } catch (error) {
      console.log(`Network error: ${error.message}`);
    }
  }
  
  // get local enviro data based on form entry (ZIP code)
  async function getLocalData(zipInput) {
    try {
      let response = await fetch(`/enviro_data/${zipInput}`);
      if (response.ok) {
        let data = await response.json();
        setEnvData(data);
        console.log(data);
      } else {
        console.log(`Server error: ${response.status} ${response.statusText}`);
      }
    } catch (error) {
      console.log(`Network error: ${error.message}`);
    }
  }

  return (
    <div className="App">
      <Navbar />
      <Routes>

        {/* route and props for HomeView */}
        <Route 
          path="/" 
          element={<HomeView 
          envData={envData} 
          getLocalData={(zipInput) => getLocalData(zipInput)}/>} 
        />

        {/* route for About page */}
        <Route 
          path="/about" 
          element={<AboutView />} 
        />

        {/* route and props for IndicatorView */}
        <Route 
          path="/indicators" 
          element={<IndicatorView 
          envData={envData} 
          allIndicators={allIndicators}
          getFeatIndicator={(id) => getFeatIndicator(id)} 
          getAllIndicators={getAllIndicators}/>} 
        />

        {/* route and props for FeaturedIndicatorView */}
        <Route 
          path="/indicators/:id" 
          element={<FeaturedIndicatorView 
          envData={envData} 
          featIndicator={featIndicator} 
          getAllIndicators={getAllIndicators} />} 
        /> 
      </Routes>
    </div>
  );
}

export default App;
