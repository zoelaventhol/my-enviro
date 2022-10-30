import React from "react";
import { useNavigate } from 'react-router-dom';
import './IndicatorView.css';

function IndicatorView(props){
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

    return (
    <div className="IndicatorView">
        {/* header */}
        <div className="row">
            <div className="col">
            <h2>Results for</h2>
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
                        src="https://cdn-icons-png.flaticon.com/512/1007/1007163.png" 
                        alt="air"
                    />
                    <div className="card-body">
                        <h5 className="card-title">Air</h5>
                        <p className="card-text">
                            {/* if data is null, show no data message and add class  */}
                            {/* else if data is below threshold, show good news and add class  */}
                            {/* else data is over threshold, so show bad news and add class  */}
                            Good news/bad news/ no data
                        </p>
                        <button 
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
                        src="https://cdn-icons-png.flaticon.com/512/3937/3937144.png" 
                        alt="waste cleanup sites"/>
                    <div className="card-body">
                        <h5 className="card-title">Waste Cleanups</h5>
                        <p className="card-text">Good news/bad news/ no data</p>
                        <button 
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
                        src="https://cdn-icons-png.flaticon.com/512/263/263115.png" 
                        alt="lead in housing"/>
                    <div className="card-body">
                        <h5 className="card-title">Lead in Housing</h5>
                        <p className="card-text">Good news/bad news/ no data</p>
                        <button 
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
                        src="https://cdn-icons-png.flaticon.com/512/606/606797.png" 
                        alt="water quality"/>
                    <div className="card-body">
                        <h5 className="card-title">Water</h5>
                        <p className="card-text">Good news/bad news/ no data.</p>
                        <button 
                            type="button" 
                            id="air" 
                            onClick={e => handleClick(ind[3].id)}>
                                Learn more
                        </button>
                    </div>
                </div>
            </div>
        </div>
        
        <div className="row" id="footnote">
            <p>* This varies home-by-home, so you can check to make sure. Homes built before 1978 have a higher likelihod of lead paint.</p>
        </div>
    </div>
    )
}

export default IndicatorView;