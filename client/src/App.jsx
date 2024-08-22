import React, { useEffect, useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import api from "./api.js";
import NavBar from "./components/NavBar.jsx";
import FeaturedIndicatorView from "./views/FeaturedIndicatorView.jsx";
import IndicatorView from "./views/IndicatorView.jsx";
import HomeView from "./views/HomeView.jsx";

function App() {
  /* initiate state for:
  1. selected enviro_data (aka "envData") - will be set by ZIP search
  2. all indicator_details (aka "allIndicators") - will be set on app start (with useEffect)
  3. featured indicator_details (aka "featIndicator") - will be set on clicking an indicator from the "IndicatorView"
  */
  const [envData, setEnvData] = useState([]);
  const [allIndicators, setAllIndicators] = useState([]);
  const [featIndicator, setFeatIndicator] = useState([]);

  // when app starts, retrieve all data from indicator_details and store it in state for allIndicators
  useEffect(() => {
    getAllIndicators();
  }, []);

  // get all indicator details and store them in allIndicators state
  async function getAllIndicators() {
    let data = await api.getAllIndicators();
    setAllIndicators(data);
  }

  // get details for one indicator (by id) and set them as state for featIndicator
  async function getFeatIndicator(id) {
    let data = await api.getFeatIndicator(id);
    setFeatIndicator(data);
  }

  // get local enviro_data based on ZIP code entry on HomeView, set as state for envData
  async function getLocalData(zipInput) {
    let data = await api.getLocalData(zipInput);
    setEnvData(data);
  }

  return (
    <div className="App">
      {/* show nav bar and have access to front-end routes from every location in app */}
      <NavBar />
      <Routes>
        {/* route and props for HomeView */}
        <Route
          path="/"
          element={
            <HomeView getLocalData={(zipInput) => getLocalData(zipInput)} />
          }
        />

        {/* route and props for IndicatorView */}
        <Route
          path="/indicators"
          element={
            <IndicatorView
              envData={envData}
              allIndicators={allIndicators}
              getFeatIndicator={(id) => getFeatIndicator(id)}
            />
          }
        />

        {/* route and props for FeaturedIndicatorView */}
        <Route
          path="/indicators/:id"
          element={
            <FeaturedIndicatorView
              envData={envData}
              featIndicator={featIndicator}
              getAllIndicators={getAllIndicators}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
