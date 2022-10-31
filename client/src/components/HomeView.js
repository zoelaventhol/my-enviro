import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import './HomeView.css'

function HomeView(props){
    // state for ZIP input. state/default value is empty string
    const [zipInput, setZipInput] = useState("");

    // use React router navigation
    const navigate = useNavigate();

    // handleChange function to update state of form input
    function handleChange(event) {
    let { value } = event.target; // set format of input
    setZipInput((state) => (value));
    }
    
    
    // handleSubmit to send ZIP to App/update state
    function handleSubmit(submit) {
        submit.preventDefault();
        console.log("form submitted!");
        // update state/pass to parent (App.js)
        props.getLocalData(zipInput);
        // go to indicators page
        navigate("/indicators")
    }

    return (
    <div className="HomeView">
        <div class="layer">
            <div className="row">
                <div className="col-8">
                    <div className="row">
                        <h1 id="zip-prompt">Enter your ZIP code</h1>
                    </div>
                    <div className="row">
                        <h4>Learn about your air, water, home, and neighborhood - and how to protect yourself. Knowledge is power!</h4>
                    </div>
                    <div className="row">
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