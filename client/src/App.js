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
  const [data, setData] = useState({});
  const [indicatorDetails, setIndicatorDetails] = useState({});

  useEffect(() => {
    // ask Jim about storing ZIP-based data local browser storage
    // bandaid: set useState to default location OR create errorView and set state to render error view. review react router demo for this.
    allIndicatorDetails();
  }, []);

  // get all indicator details
  async function allIndicatorDetails() {
    try {
      let response = await fetch(`/indicator_details`);
      if (response.ok) {
        let data = await response.json();
        setIndicatorDetails(data);
        console.log(data);
      } else {
        console.log(`Server error: ${response.status} ${response.statusText}`);
      }
    } catch (error) {
      console.log(`Network error: ${error.message}`);
    }
  }

  // get details for one indicator (by id)
  async function oneIndicator(id) {
    try {
      let response = await fetch(`/indicator_details/${id}`);
      if (response.ok) {
        let data = await response.json();
        setIndicatorDetails(data);
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
        setData(data);
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
      {/* only have things that should be visible from every page */}
      <Navbar />
      <Routes>
        {/* can pass props here */}
        <Route path="/" element={<HomeView getLocalData={(zipInput) => getLocalData(zipInput)}/>} />
        <Route path="/about" element={<AboutView />} />
        <Route path="/indicators" element={<IndicatorView data={data} indicatorDetails={indicatorDetails} oneIndicator={(id) => oneIndicator(id)} allIndicatorDetails={allIndicatorDetails}/>} />
        <Route path="/indicators/:id" element={<FeaturedIndicatorView indicatorDetails={indicatorDetails} data={data} allIndicatorDetails={allIndicatorDetails}/>} /> 
      </Routes>
    </div>
  );
}

export default App;
