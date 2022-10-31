import React, { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import './IndicatorView.css';
import ErrorView from "./ErrorView.js"

function IndicatorView(props){
    useEffect(() => {
        props.getAllIndicators();
      }, []);

    // use React router navigation
    const navigate = useNavigate();

    // handleClick sends indicator id (i.e. air, water, etc.) to App, where it updates the state of featIndicator
    function handleClick(id) {
        // update state/pass to parent (App.js)
        props.getFeatIndicator(id)
        // go to featured indicator page
        navigate(`/indicators/${id}`)
        console.log(id);
    }

    // Function to generate conditional messages based on enviro data. Compares the props.envData value for that indicator (air, water, etc.) against a hazard threshold, and returns a message describing if the result is "good-news", "bad-news", or "no-data"
    function news(index, envDataValue) {
        // if data is null, show no data message
        if (envDataValue < 0) {
            return `${props.allIndicators[index].no_data}`;
        // else if data is below hazard threshold, show good news
        } else if (envDataValue < props.allIndicators[index].threshold) {
            return `${props.allIndicators[index].good_news}`;
        // else, data is over hazard threshold, so show bad news
        } else {
            return `${props.allIndicators[index].bad_news}`
        }
    }
    
    // call "news" function to create conditional messages based on enviro data
    let airNews = news(0, props.envData.air);
    let hazCleanupsNews = news(1, props.envData.haz_cleanups);
    let leadNews = news(2, props.envData.lead_paint);
    let waterNews= news(3, props.envData.water);

    function conditionalClass(index) {
        if (props.envData[props.allIndicators[index].id] < 0) {
            return "no-data"
        } else if (props.envData[props.allIndicators[index].id] < props.allIndicators[index].threshold) {
            return "good-news"
        } else {
            return "bad-news"
        }
    }

    return (
    <div className="IndicatorView">
        {/* header */}
        <div className="row">
            <div className="col">
            <h2>Results for {`${props.envData.zip}`}:</h2>
            <h2 id="location">
            {`${props.envData.city}`} 
            </h2>
            </div>
        </div>

        {/* indicator cards */}
        <div className="row" id="indicatorCards">

            {/* column 1: air card */}
            <div className="col"> 
                <div className="card" id="air-card">
                    <img 
                        className="card-img-top" 
                        src={`${props.allIndicators[0].icon_url}`}
                        alt="air"
                    />
                    <div className="card-body">
                        <h5 className="card-title">Air</h5>
                        <div className="card-text">
                                <p className={conditionalClass(0)}>
                                    {`${airNews}`}
                                </p>
                        </div>
                        <button 
                            class="btn btn-primary"
                            type="button" 
                            id="air" 
                            onClick={e => handleClick(props.allIndicators[0].id)}>
                                Learn more
                        </button>
                    </div>
                </div>
            </div>

            {/* column 2: haz-cleanups card */}
            <div className="col">
                <div className="card" id="haz-cleanups-card">
                    <img 
                        className="card-img-top" 
                        src={`${props.allIndicators[1].icon_url}`} 
                        alt="waste cleanup sites"/>
                    <div className="card-body">
                        <h5 className="card-title">Waste Cleanups</h5>
                        <div className="card-text">
                            <p className={conditionalClass(1)}> 
                                {`${hazCleanupsNews}`}
                            </p>
                        </div>
                        <button 
                            class="btn btn-primary"
                            type="button" 
                            id="haz_cleanups" 
                            onClick={e => handleClick(props.allIndicators[1].id)}>
                                Learn more
                        </button>
                    </div>
                </div>

            </div>

            {/* column 3: lead-paint card */}
            <div className="col">
                <div className="card" id="lead-paint-card">
                    <img 
                        className="card-img-top" 
                        src={`${props.allIndicators[2].icon_url}`} 
                        alt="lead in housing"/>
                    <div className="card-body">
                        <h5 className="card-title">Lead in Housing</h5>
                        <div className="card-text">
                            <p className={conditionalClass(2)}> 
                                {`${leadNews}`}
                            </p>
                        </div>
                        <button 
                            class="btn btn-primary"
                            type="button" 
                            id="lead_paint" 
                            onClick={e => handleClick(props.allIndicators[2].id)}>
                                Learn more
                        </button>
                    </div>
                </div>   
            </div>

            {/* column 4: water card */}
            <div className="col">
                <div className="card" id="water-card">
                    <img 
                        className="card-img-top" 
                        src={`${props.allIndicators[3].icon_url}`} 
                        alt="water quality"/>
                    <div className="card-body">
                        <h5 className="card-title">Water</h5>
                        <div className="card-text">
                            <p className={conditionalClass(3)}> 
                                {`${waterNews}`}
                            </p>
                        </div>
                        <button 
                            class="btn btn-primary"
                            type="button" 
                            id="air" 
                            onClick={e => handleClick(props.allIndicators[3].id)}>
                                Learn more
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default IndicatorView;