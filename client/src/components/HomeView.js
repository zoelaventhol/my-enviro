import React, {useState} from "react";
import './HomeView.css'

function HomeView(){
    // state for ZIP input. state/default value is empty string
    const [zipInput, setZipInput] = useState("");

    // handleChange function to update state of form input
    function handleChange(event) {
    let { name, value } = event.target; // set format of input
    setZipInput((state) => ({ [name]: value }));
  }
    
    
    // handleSubmit to send ZIP to App/update state

    return (
    <div className="HomeView">
    <h2>Home View</h2>  
    <form>
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