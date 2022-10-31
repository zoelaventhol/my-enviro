import React from "react";
import { useNavigate } from 'react-router-dom';
import './FeaturedIndicatorView.css'

function FeaturedIndicatorView(props){
    // use React router navigation
    const navigate = useNavigate();

    // go back to "indicators" page when you click the close button
    function handleClick(e) {
        navigate(`/indicators`);
    }

    // function to generate conditional messages based on enviro data
    function news(envDataValue) {
        // if data is null, show no data message
        if (envDataValue < 0) {
            return `${props.featIndicator.no_data}`;
        // else if data is below hazard threshold, show good news
        } else if (envDataValue < props.featIndicator.threshold) {
            return `${props.featIndicator.good_news}`;
        // else, data is over hazard threshold, so show bad news
        } else {
            return `${props.featIndicator.bad_news}`
        }
    }

    // call "news" function to create conditional messages based on enviro data
    let featNews = news(props.envData[props.featIndicator.id]);

    // function to give conditional styling (red/yellow/green text background) to featNews based on indicator threshold
    function conditionalClass() {
        if (props.envData[props.featIndicator.id] < 0) {
            return "no-data"
        } else if (props.envData[props.featIndicator.id] < props.featIndicator.threshold) {
            return "good-news"
        } else {
            return "bad-news"
        }
    }

    // if envDataValue is null (set as -1 in data set to differentiate it from 0 values), return a "?". else return the data value, and a "%" if it's a percentage.
    function displayData(envDataValue) {
        if (envDataValue < 0) {
            return '?';
        } else {
            return `${props.envData[props.featIndicator.id]}${props.featIndicator.if_percent}`;
        }
    }
    
    return (
    <div className="FeaturedIndicatorView">
        {/* header */}
        <div className="row">
            <div className="col">
                <h2>{`${props.featIndicator.indicator_name}`} in</h2>
                <h2 id="location">{`${props.envData.city}`}</h2>
            </div>
        </div>

        {/* indicator details container */}
        <div className="row">
            <div className="col-10" id="indicator-details">
                {/* "close" button
                click to close and return to "indicators view" (with all 4 indicators. state of data should stay saved) */}
                    <div className="row">
                        <div className = "close-button">
                            <button 
                                type="button" 
                                class="btn btn-primary"
                                onClick={e => handleClick(e)} >
                                    x
                            </button>
                        </div>
                    </div>

                    
                    <div className="row">
                        {/* icon square: conditionally display an icon depending on indicator id */}
                        <div className="col-3">
                            <div className="icon-container">
                                <img src={`${props.featIndicator.icon_url}`} />
                            </div>
                        </div>

                        {/* news/no data block:
                        conditionally display a message from "indicator_details" object based on value from enviro_data, and a threshold */}
                        <div className="col">
                            <div className="good-or-bad-news">
                                {/* conditionally set class based on indicator threshold */}
                                <p className={conditionalClass()}>
                                    {`${featNews}`}
                                </p>
                            </div>
                        </div>

                    </div> 
                    
                    <div className="row">
                        
                        {/* summary container 
                        conditionally display: number from enviro_data, and indicator description and summary from indicator_details*/}
                        <div className="col-5" id="summary">
                            <div className="row" id="data">
                                <h1>{displayData(props.envData[props.featIndicator.id])}</h1>
                            </div>

                            <div className="row" id="indicator-description">
                                <p>{`${props.featIndicator.data_description}`}</p>
                            </div>

                            <div className="row" id="indicator-summary">
                                <b>What does this mean?</b>
                                <p>
                                    {`${props.featIndicator.summary}`}
                                    <br />
                                    <br />
                                    <a href="https://oehha.ca.gov/calenviroscreen/report/calenviroscreen-40" target = "_blank">Source</a>    
                                </p>

                            </div>
                        </div>
                        
                        {/* action container 
                        conditionally display action recommendation from indicator_details */}
                        <div className="col-5" id="action">
                            <div className="row" id="what-to-do">
                                <h2>What to do</h2>
                            </div>

                            <div className="row" id="action-intro">
                                <p>If you are concerned about {`${props.featIndicator.indicator_name}`.toLowerCase()} in your area, some simple steps you can take are:</p>
                            </div>

                            <div className="row" id="action-detail">
                                <p>
                                    <b>Learn more</b>
                                    <br />
                                    <div dangerouslySetInnerHTML={{__html: props.featIndicator.learn_more }} />
                                </p>

                                <p>
                                    <b>Protect yourself</b>
                                    <br />
                                    <div dangerouslySetInnerHTML={{__html: props.featIndicator.protect_yourself }} />
                                </p>

                                <p>
                                    <b>Take action</b>
                                    <br />
                                    Look up your local public officials or {`${props.featIndicator.indicator_name}`.toLowerCase()} advocacy groups to learn more.</p>
                            </div>
                        </div>  
                    </div>

                    {/* conditionally display footnote */}
                    <div className="row" id="footnote">
                        <div dangerouslySetInnerHTML={{__html: props.featIndicator.footnote }} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeaturedIndicatorView;