import React, { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import './IndicatorView.css';
import ErrorView from "./ErrorView.js"

function IndicatorView(props){
    useEffect(() => {
        props.allIndicatorDetails();
      }, []);

    // use state of data
    let envData = props.data;
    // use state of indicator details
    let ind = props.indicatorDetails;

    // use React router navigation
    const navigate = useNavigate();

    // handleClick to send indicator id to App/update state
    function handleClick(id) {
        // update state/pass to parent (App.js)
        props.oneIndicator(id)
        // go to featured indicator page for clicked indicator
        navigate(`/indicators/${id}`)
        console.log(id);
    }

    // function to generate conditional messages based on enviro data
    function news(indId, data) {
        // if data is null, show no data message
        // problem: doens't differentiate between null and 0-value data. also tried if (data === null), same problem
        // question: using "ind" variable doesn't work here - returns undefined. why?
        if (!data) {
            return `${props.indicatorDetails[indId].no_data}`;
        // else if data is below hazard threshold, show good news
        } else if (data < ind[indId].threshold) {
            return `${props.indicatorDetails[indId].good_news}`;
        // else, data is over hazard threshold, so show bad news
        } else {
            return `${props.indicatorDetails[indId].bad_news}`
        }
    }
    
    // call "news" function to create conditional messages based on enviro data
    let airNews = news(0, envData.air);
    let hazCleanupsNews = news(1, envData.haz_cleanups);
    let leadNews = news(2, envData.lead_paint);
    let waterNews= news(3, envData.water);

    return (
    <div className="IndicatorView">
        {/* header */}
        <div className="row">
            <div className="col">
            <h2>Results for {`${envData.zip}`}:</h2>
            <h2 id="location">
            {`${envData.city}`} 
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
                        src={`${ind[0].icon_url}`}
                        alt="air"
                    />
                    <div className="card-body">
                        <h5 className="card-title">Air</h5>
                        <div className="card-text">
                            {/* conditionally set class based on good news or bad news */}
                            <p className={envData[ind[0].id] < ind[0].threshold ? 'good-news' : 'bad-news'}>
                                { ind && `${airNews}`}
                            </p>
                        </div>
                        <button 
                            class="btn btn-primary"
                            type="button" 
                            id="air" 
                            onClick={e => handleClick(ind[0].id)}>
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
                        src={`${ind[1].icon_url}`} 
                        alt="waste cleanup sites"/>
                    <div className="card-body">
                        <h5 className="card-title">Waste Cleanups</h5>
                        <div className="card-text">
                            {/* conditionally set class based on good news or bad news */}
                            <p className={envData[ind[1].id] < ind[1].threshold ? 'good-news' : 'bad-news'}>
                                { ind && `${hazCleanupsNews}`}
                            </p>
                        </div>
                        <button 
                            class="btn btn-primary"
                            type="button" 
                            id="haz_cleanups" 
                            onClick={e => handleClick(ind[1].id)}>
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
                        src={`${ind[2].icon_url}`} 
                        alt="lead in housing"/>
                    <div className="card-body">
                        <h5 className="card-title">Lead in Housing</h5>
                        <div className="card-text">
                            {/* conditionally set class based on good news or bad news */}
                            <p className={envData[ind[2].id] < ind[2].threshold ? 'good-news' : 'bad-news'}>
                                { ind && `${leadNews}`}
                            </p>
                        </div>
                        <button 
                            class="btn btn-primary"
                            type="button" 
                            id="lead_paint" 
                            onClick={e => handleClick(ind[2].id)}>
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
                        src={`${ind[3].icon_url}`} 
                        alt="water quality"/>
                    <div className="card-body">
                        <h5 className="card-title">Water</h5>
                        <div className="card-text">
                             {/* conditionally set class based on good news or bad news */}
                             <p className={envData[ind[3].id] < ind[3].threshold ? 'good-news' : 'bad-news'}>
                                { ind && `${waterNews}`}
                            </p>
                        </div>
                        <button 
                            class="btn btn-primary"
                            type="button" 
                            id="air" 
                            onClick={e => handleClick(ind[3].id)}>
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