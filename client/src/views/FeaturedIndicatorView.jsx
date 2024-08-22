import React from "react";
import "./FeaturedIndicatorView.css";
// use React router navigation
import { useNavigate } from "react-router-dom";

function FeaturedIndicatorView({ featIndicator, envData }) {
  // use React router navigation
  const navigate = useNavigate();

  // go back to "indicators" page when you click the close button
  function handleClick(e) {
    navigate(`/indicators`);
  }

  // Function to generate conditional messages based on enviro data.
  // Compares the props.envData value for each indicator (air, water, etc.) against a hazard threshold ("threshold" in indicator_details), and returns a message describing if the result is "good-news", "bad-news", or "no-data"
  function news(envDataValue) {
    // if data is null, show no data message
    if (envDataValue < 0) {
      return `${featIndicator.no_data}`;
      // else if data is below hazard threshold, show good news
    } else if (envDataValue < featIndicator.threshold) {
      return `${featIndicator.good_news}`;
      // else, data is over hazard threshold, so show bad news
    } else {
      return `${featIndicator.bad_news}`;
    }
  }

  // call "news" function to create conditional messages based on enviro data
  let featNews = news(envData[featIndicator.id]);

  // function to give conditional styling (red/yellow/green text background) to featNews based on indicator threshold
  function conditionalClass() {
    return envData[featIndicator.id] < 0
      ? "no-data"
      : envData[featIndicator.id] < featIndicator.threshold
      ? "good-news"
      : "bad-news";
  }

  // if no envDataValue (set as -1 in data set to differentiate it from 0 values), return a "?", else return the data value. Return a "%" if it's a percentage.
  function displayData(envDataValue) {
    return envDataValue < 0
      ? "?"
      : `${envData[featIndicator.id]}${featIndicator.if_percent}`;
  }

  return (
    <div className="FeaturedIndicatorView">
      {/* header */}
      <div className="row">
        <div className="col">
          <h2>{`${featIndicator.indicator_name}`} in</h2>
          <h2 id="location">{`${envData.city}`}</h2>
        </div>
      </div>

      {/* indicator details container */}
      <div className="row">
        <div className="col-10" id="indicator-details">
          {/* "close" button - click to close and return to "indicators view"*/}
          <div className="row">
            <div className="close-button">
              <button
                type="button"
                class="btn btn-primary"
                onClick={(e) => handleClick(e)}
              >
                x
              </button>
            </div>
          </div>

          <div className="row">
            {/* icon square: conditionally display an icon depending on indicator id */}
            <div className="col-3">
              <div className="icon-container">
                <img
                  src={`${featIndicator.icon_url}`}
                  alt={`${featIndicator.id}`}
                />
              </div>
            </div>

            {/* news/no data block:
                        conditionally display a message from "indicator_details" object based on value from enviro_data, and a threshold */}
            <div className="col">
              <div className="good-or-bad-news">
                {/* conditionally set class based on indicator threshold */}
                <p className={conditionalClass()}>{`${featNews}`}</p>
              </div>
            </div>
          </div>

          <div className="row">
            {/* summary container 
                        conditionally display: number from enviro_data, and indicator description and summary from indicator_details*/}
            <div className="col-5" id="summary">
              <div className="row" id="data">
                <h1>{displayData(envData[featIndicator.id])}</h1>
              </div>

              <div className="row" id="indicator-description">
                <p>{`${featIndicator.data_description}`}</p>
              </div>

              <div className="row" id="indicator-summary">
                <b>What does this mean?</b>
                <p>
                  {`${featIndicator.summary}`}
                  <br />
                  <br />
                  <a
                    href="https://oehha.ca.gov/calenviroscreen/report/calenviroscreen-40"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Source
                  </a>
                </p>
              </div>
            </div>

            {/* action container conditionally display action recommendations from indicator_details */}
            <div className="col-5" id="action">
              <div className="row" id="what-to-do">
                <h3>What to do</h3>
              </div>

              <div className="row" id="action-intro">
                <p>
                  If you are concerned about{" "}
                  {`${featIndicator.indicator_name}`.toLowerCase()} in your
                  area, some simple steps you can take are:
                </p>
              </div>

              <div className="row" id="action-detail">
                <p>
                  <b>Learn more</b>
                  <br />
                  {/* dangerouslySetInnerHTML allows the page to render HTML from the input data */}
                  <div
                    dangerouslySetInnerHTML={{
                      __html: featIndicator.learn_more,
                    }}
                  />
                </p>

                <p>
                  <b>Protect yourself</b>
                  <br />
                  {/* dangerouslySetInnerHTML allows the page to render HTML from the input data */}
                  <div
                    dangerouslySetInnerHTML={{
                      __html: featIndicator.protect_yourself,
                    }}
                  />
                </p>

                <p>
                  <b>Take action</b>
                  <br />
                  Look up your local public officials or{" "}
                  {`${featIndicator.indicator_name}`.toLowerCase()} advocacy
                  groups to learn more.
                </p>
              </div>
            </div>
          </div>

          {/* conditionally display footnote */}
          <div className="row" id="footnote">
            {/* dangerouslySetInnerHTML allows the page to render HTML from the input data */}
            <div dangerouslySetInnerHTML={{ __html: featIndicator.footnote }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedIndicatorView;
