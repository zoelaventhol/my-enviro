import React, { useEffect } from "react";
import "./IndicatorView.css";
// use React router navigation
import { useNavigate } from "react-router-dom";

function IndicatorView({
  getAllIndicators,
  getFeatIndicator,
  allIndicators,
  envData,
}) {
  // make sure all data from indicator_details is saved in allIndicators state
  useEffect(() => {
    getAllIndicators();
  }, []);

  // use React router navigation
  const navigate = useNavigate();

  // handleClick sends indicator id (i.e. air, water, etc.) to App, where it updates the state of featIndicator
  function handleClick(id) {
    // update state/pass to parent (App.js)
    getFeatIndicator(id);
    // go to featured indicator page
    navigate(`/indicators/${id}`);
  }

  // Function to generate conditional messages based on enviro data. Compares the props.envData value for each indicator (air, water, etc.) against a hazard threshold ("threshold" in indicator_details), and returns a message describing if the result is "good-news", "bad-news", or "no-data"
  function news(index, envDataValue) {
    // If data is null (aka less than 0), show no data message. In the enviro_data table, all null fields have been reset to -1 in order to differentiate them from 0-value data.
    if (envDataValue < 0) {
      return `${allIndicators[index].no_data}`;

      // else if data is below hazard threshold, show good news
    } else if (envDataValue < allIndicators[index].threshold) {
      return `${allIndicators[index].good_news}`;

      // else, data is over hazard threshold, so show bad news
    } else {
      return `${allIndicators[index].bad_news}`;
    }
  }

  // call "news" function to create conditional "good_news/bad_news" messages for each indicator
  let airNews = news(0, envData.air);
  let hazCleanupsNews = news(1, envData.haz_cleanups);
  let leadNews = news(2, envData.lead_paint);
  let waterNews = news(3, envData.water);

  // same logic/purpose as "news" function, but allows us to give conditional classes to pieces of our template (so we can style them in different colors)
  function conditionalClass(index) {
    if (envData[allIndicators[index].id] < 0) {
      return "no-data";
    } else if (
      envData[allIndicators[index].id] < allIndicators[index].threshold
    ) {
      return "good-news";
    } else {
      return "bad-news";
    }
  }

  return (
    <div className="IndicatorView">
      {/* header */}
      <div className="row">
        <div className="col">
          <h2>Results for {`${envData.zip}`}:</h2>
          <h2 id="location">{`${envData.city}`}</h2>
        </div>
      </div>

      {/* indicator cards container */}
      <div className="row" id="indicator-cards">
        {/* air card */}
        <div className="col">
          <div className="card" id="air-card">
            <img
              className="card-img-top"
              src={`${allIndicators[0].icon_url}`}
              alt="air"
            />
            <div className="card-body">
              <h5 className="card-title">Air</h5>
              <div className="card-text">
                {/* conditional class and message for air "news" - will return message and class (with different color) for "good_news", "bad_news", or "no_data", depending on the value for "air" in envData and the "threshold" in featIndicator. This is repeated on all cards */}
                <p className={conditionalClass(0)}>{`${airNews}`}</p>
              </div>
              <button
                className="btn btn-primary"
                type="button"
                id="air"
                onClick={(e) => handleClick(allIndicators[0].id)}
              >
                Learn more
              </button>
            </div>
          </div>
        </div>

        {/* haz-cleanups card */}
        <div className="col">
          <div className="card" id="haz-cleanups-card">
            <img
              className="card-img-top"
              src={`${allIndicators[1].icon_url}`}
              alt="waste cleanup sites"
            />
            <div className="card-body">
              <h5 className="card-title">Waste Cleanups</h5>
              <div className="card-text">
                <p className={conditionalClass(1)}>{`${hazCleanupsNews}`}</p>
              </div>
              <button
                class="btn btn-primary"
                type="button"
                id="haz_cleanups"
                onClick={(e) => handleClick(allIndicators[1].id)}
              >
                Learn more
              </button>
            </div>
          </div>
        </div>

        {/* lead-paint card */}
        <div className="col">
          <div className="card" id="lead-paint-card">
            <img
              className="card-img-top"
              src={`${allIndicators[2].icon_url}`}
              alt="lead in housing"
            />
            <div className="card-body">
              <h5 className="card-title">Lead in Housing</h5>
              <div className="card-text">
                <p className={conditionalClass(2)}>{`${leadNews}`}</p>
              </div>
              <button
                class="btn btn-primary"
                type="button"
                id="lead_paint"
                onClick={(e) => handleClick(allIndicators[2].id)}
              >
                Learn more
              </button>
            </div>
          </div>
        </div>

        {/* water card */}
        <div className="col">
          <div className="card" id="water-card">
            <img
              className="card-img-top"
              src={`${allIndicators[3].icon_url}`}
              alt="water quality"
            />
            <div className="card-body">
              <h5 className="card-title">Water</h5>
              <div className="card-text">
                <p className={conditionalClass(3)}>{`${waterNews}`}</p>
              </div>
              <button
                class="btn btn-primary"
                type="button"
                id="air"
                onClick={(e) => handleClick(allIndicators[3].id)}
              >
                Learn more
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IndicatorView;
