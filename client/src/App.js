import React, { useEffect, useState } from "react";
import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar.js';
import FeaturedIndicatorView from './components/FeaturedIndicatorView.js';
import IndicatorView from './components/IndicatorView.js';
import HomeView from './components/HomeView.js';

function App() {
  
  /* initiate state for:
  1. selected enviro_data (aka "envData") - will be set by ZIP search
  2. all indicator_details (aka "allIndicators") - will be set on app start (with useEffect)
  3. featured indicator_details (aka "featIndicator") - will be set on clicking an indicator from the "IndicatorView"
  */
  const [envData, setEnvData] = useState({});
  const [allIndicators, setAllIndicators] = useState({});
  const [featIndicator, setFeatIndicator] = useState({});

  // when app starts, retrieve all data from indicator_details and store it in state for allIndicators
  useEffect(() => {
    getAllIndicators();
  }, []);

  // get all indicator details and store them in allIndicators state
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

  // get details for one indicator (by id) and set them as state for featIndicator
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
  
  // get local enviro_data based on ZIP code entry on HomeView, set as state for envData
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
      {/* show nav bar and have access to front-end routes from every location in app */}
      <NavBar />
      <Routes>

        {/* route and props for HomeView */}
        <Route 
          path="/" 
          element={<HomeView 
          getLocalData={(zipInput) => getLocalData(zipInput)}/>} 
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
