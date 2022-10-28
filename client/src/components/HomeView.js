import React from "react";
import './HomeView.css'

function HomeView(){
    // handleSubmit to send ZIP to App/update state

    return (
    <div className="HomeView">
    <h2>Home View</h2>  
    <form>
        <label>
            Enter your ZIP code
            <input type = "text"></input>
        </label>
    </form>     
    </div>
    )
}

export default HomeView;