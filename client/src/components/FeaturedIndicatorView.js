import React from "react";
import './FeaturedIndicatorView.css'

function FeaturedIndicatorView(props){
    // need to access indicator state
    // need to access data state
    let envData = props.data;

    // get indicator info based on click
    // need to pass localData for dynamic components (good/bad news & value)
    function getIndicatorInfo() {
    }
    
    return (
    <div className="FeaturedIndicatorView">
        {/* header */}
        <div className="row">
            <div className="col">
                <h2>[indicator id] in</h2>
                <h2 id="location">{`${envData.city}`}</h2>
            </div>
        </div>

        {/* indicator details container */}
        <div className="row">
            <div className="col-10" id="indicator-details">
                {/* "close" button
                click to close and return to "indicators view" (with all 4 indicators. state of data should stay saved) */}
                <div className="row">
                    <div className = "close-button">
                        <button type="button" class="btn btn-primary">x</button>
                    </div>
                </div>

                
                <div className="row">
                    {/* icon square:
                    conditionally display an icon depending on indicator id (store icon URL in "indicator_details" data?) */}
                    <div className="col-3">
                        <div className="icon-container">
                            <img src="https://cdn-icons-png.flaticon.com/512/1007/1007163.png" />
                        </div>
                    </div>

                    {/* news/no data block:
                    conditionally display a message from "indicator_details" object based on value from enviro_data, and a threshold */}
                    <div className="col">
                        <div className="good-or-bad-news">
                            <p>Good news! On average, air quality seems good in your area.*</p>
                        </div>
                    </div>

                </div> 
                
                <div className="row">
                    {/* summary container 
                    conditionally display: number from enviro_data, and indicator description and summary from indicator_details*/}
                    <div className="col-5" id="summary">
                        <div className="row" id="data">
                            <h1>54%</h1>
                        </div>

                        <div className="row" id="indicator-description">
                            <p>Of homes in your area have a higher likelihood of lead paint hazards.</p>
                        </div>

                        <div className="row" id="indicator-summary">
                            <p>In the past, lead was widely used in house paint and plumbing, so some older houses (especially those built before 1978) may contain lead. If a home contains lead, it can pass to people through actions like touching surfaces, gardening in contamiated soil, or drinking contaminated water. Lead exposure can cause health and developmental issues, especially in children. You can help protect yourself from lead exposure by frequent hand washing, and avoiding contaminated areas.</p>
                        </div>
                    </div>
                    
                    {/* action container 
                    conditionally display action recommendation from indicator_details */}
                    <div className="col-5" id="action">
                        <div className="row" id="what-to-do">
                            <h2>What to do</h2>
                        </div>

                        <div className="row" id="action-intro">
                            <p>If you are concerned about [indicator], some simple steps you can take are:</p>
                        </div>

                        <div className="row" id="action-detail">
                            <p><b>Learn more</b>
                            <br />
                            Lorem ipsum dolor sit amet</p>

                            <p><b>Protect yourself</b>
                            <br />
                            Lorem ipsum dolor sit amet</p>

                            <p><b>Take action</b>
                            <br />
                            Lorem ipsum dolor sit amet</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
    )
}

export default FeaturedIndicatorView;