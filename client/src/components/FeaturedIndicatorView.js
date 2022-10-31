import React from "react";
import { useNavigate } from 'react-router-dom';
import ErrorView from './ErrorView';
import './FeaturedIndicatorView.css'

function FeaturedIndicatorView(props){
    // use state of indicator details
    let ind = props.indicatorDetails;
    // use state of enviro data
    let envData = props.data;

    // use React router navigation
    const navigate = useNavigate();

    function handleClick(e) {
        navigate(`/indicators`);
    }

    // function to generate conditional messages based on enviro data
    function news(data) {
        // if data is null, show no data message
        if (!data) {
            return `${ind.no_data}`;
        // else if data is below hazard threshold, show good news
        } else if (data < ind.threshold) {
            return `${ind.good_news}`;
        // else, data is over hazard threshold, so show bad news
        } else {
            return `${ind.bad_news}`
        }
    }
    
    // call "news" function to create conditional messages based on enviro data
    let dataNews = news(envData[ind.id]);
    
    return (
    <div className="FeaturedIndicatorView">
        {/* header */}
        <div className="row">
            <div className="col">
                <h2>{`${ind.indicator_name}`} in</h2>
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
                                <img src={`${ind.icon_url}`} />
                            </div>
                        </div>

                        {/* news/no data block:
                        conditionally display a message from "indicator_details" object based on value from enviro_data, and a threshold */}
                        <div className="col">
                            <div className="good-or-bad-news">
                                {/* conditionally set class based on good news or bad news */}
                                <p className={envData[ind.id] < ind.threshold ? 'good-news' : 'bad-news'}>
                                    {`${dataNews}`}
                                </p>
                            </div>
                        </div>

                    </div> 
                    
                    <div className="row">
                        {/* summary container 
                        conditionally display: number from enviro_data, and indicator description and summary from indicator_details*/}
                        <div className="col-5" id="summary">
                            <div className="row" id="data">
                                <h1>{`${envData[ind.id]}${ind.if_percent}`}</h1>
                            </div>

                            <div className="row" id="indicator-description">
                                <p>{`${ind.data_description}`}</p>
                            </div>

                            <div className="row" id="indicator-summary">
                                <b>What does this mean?</b>
                                <p>
                                    {`${ind.summary}`}
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
                                <p>If you are concerned about {`${ind.indicator_name}`.toLowerCase()} in your area, some simple steps you can take are:</p>
                            </div>

                            <div className="row" id="action-detail">
                                <p>
                                    <b>Learn more</b>
                                    <br />
                                    <div dangerouslySetInnerHTML={{__html: ind.learn_more }} />
                                </p>

                                <p>
                                    <b>Protect yourself</b>
                                    <br />
                                    <div dangerouslySetInnerHTML={{__html: ind.protect_yourself }} />
                                </p>

                                <p>
                                    <b>Take action</b>
                                    <br />
                                    Look up your local public officials or {`${ind.indicator_name}`.toLowerCase()} advocacy groups to learn more.</p>
                            </div>
                        </div>  
                    </div>

                    {/* conditionally display footnote */}
                    <div className="row" id="footnote">
                        <div dangerouslySetInnerHTML={{__html: ind.footnote }} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeaturedIndicatorView;