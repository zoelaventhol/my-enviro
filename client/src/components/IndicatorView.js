import React from "react";
import './IndicatorView.css';
// import bootstrap from 'bootstrap'

function IndicatorView(props){
    function handleClick () {
        
    }

    return (
    <div className="IndicatorView">
        {/* header */}
        <div className="row">
            <div className="col">
            <h2>Results for</h2>
            <h2 id="location">
            [Location] 
            </h2>
            </div>
        </div>

        {/* indicator cards */}
        <div className="row" id="indicatorCards">

            {/* column 1: air card */}
            <div className="col"> 
                <div className="card" id="air">
                    <img 
                        className="card-img-top" 
                        src="https://cdn-icons-png.flaticon.com/512/1007/1007163.png" alt="air"
                    />
                    <div className="card-body">
                        <h5 className="card-title">Air</h5>
                        <p className="card-text">Good news/bad news/ no data</p>
                        <a href="#" className="btn btn-primary">Learn more</a>
                    </div>
                </div>
            </div>

            {/* column 2: haz-cleanups card */}
            <div className="col">
                <div className="card" id="haz-cleanups">
                    <img 
                        className="card-img-top" 
                        src="https://cdn-icons-png.flaticon.com/512/3937/3937144.png" alt="waste cleanup sites"/>
                    <div className="card-body">
                        <h5 className="card-title">Waste Cleanups</h5>
                        <p className="card-text">Good news/bad news/ no data</p>
                        <a href="#" className="btn btn-primary">Learn more</a>
                    </div>
                </div>

            </div>

            {/* column 3: lead-paint card */}
            <div className="col">
                <div className="card" id="lead-paint">
                    <img className="card-img-top" src="https://cdn-icons-png.flaticon.com/512/263/263115.png" alt="lead in housing"/>
                    <div className="card-body">
                        <h5 className="card-title">Lead in Housing</h5>
                        <p className="card-text">Good news/bad news/ no data</p>
                        <a href="#" className="btn btn-primary">Learn more</a>
                    </div>
                </div>   
            </div>

            {/* column 4: water card */}
            <div className="col">
                <div className="card" id="water">
                    <img className="card-img-top" src="https://cdn-icons-png.flaticon.com/512/606/606797.png" alt="water quality"/>
                    <div className="card-body">
                        <h5 className="card-title">Water</h5>
                        <p className="card-text">Good news/bad news/ no data.</p>
                        <a href="#" className="btn btn-primary">Learn more</a>
                    </div>
                </div>
            </div>

        </div>
    </div>
    )
}

export default IndicatorView;