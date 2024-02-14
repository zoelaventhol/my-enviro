import React, { useState } from "react";
import './HomeView.css'
// use React router navigation
import { useNavigate } from 'react-router-dom';

function HomeView({ envData, getLocalData }){
    // state for ZIP input. state/default value is empty string
    const [zipInput, setZipInput] = useState("");

    // use React router navigation
    const navigate = useNavigate();

    // handleChange function to update state of zipInput based on form input
    function handleChange(event) {
    let { value } = event.target; // set format of input
    setZipInput((state) => (value)); // update state to input value
    }
    
    
    // handleSubmit to send ZIP to App/update state
    function handleSubmit(submit) {
        submit.preventDefault(); // prevent auto-reload
        getLocalData(zipInput); // pass zipInput to parent (App.js), where it will be used to getLocalData
        navigate("/indicators") // go to indicators page
    }

    return (
        <div className="HomeView">
            {/* add translucent layer over background image for better visibility */}
            <div class="layer">
                <div className="row">
                    <div className="col-8">
                        <div className="row">
                            
                            {/* header and descriptor */}
                            <h1 id="zip-prompt">Enter your ZIP code</h1>
                        </div>
                        <div className="row">
                            <h4>Learn about your air, water, home, and neighborhood - and how to protect yourself. Knowledge is power!</h4>
                        </div>
                        <div className="row">

                            {/* ZIP input */}
                            <form onSubmit={handleSubmit}>
                                <input type = "text" onChange={(e) => handleChange(e)} placeholder="Enter ZIP here"></input>
                                <button type="submit" class="btn btn-primary">Search</button>
                            </form>
                        </div>     
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeView;