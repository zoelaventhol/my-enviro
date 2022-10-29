import React, {useState} from "react";
import {Routes, Route, useNavigate} from 'react-router-dom';
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
    <h2>Home View</h2>  
    <form onSubmit={handleSubmit}>
        <label>
            Enter your ZIP code
            <input type = "text" onChange={(e) => handleChange(e)}></input>
        </label>
        <button type="submit" class="btn btn-primary">
            Search
        </button>
    </form>     
    </div>
    )
}

export default HomeView;