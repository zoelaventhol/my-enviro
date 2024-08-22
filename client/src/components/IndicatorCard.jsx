function IndicatorCard({ indicator, envData, handleClick }) {
  // Function to generate conditional messages based on enviro data.
  // Compares the props.envData value for each indicator (air, water, etc.) against a hazard threshold ("threshold" in indicator_details), and returns a message describing if the result is "good-news", "bad-news", or "no-data"
  function news(envDataValue) {
    // If data is null (aka less than 0), show no data message. In the enviro_data table, all null fields have been reset to -1 in order to differentiate them from 0-value data.
    // else if data is below hazard threshold, show good news
    // else, data is over hazard threshold, so show bad news
    return envDataValue < 0 ? `${indicator.no_data}` : envDataValue < indicator.threshold ? `${indicator.good_news}` : `${indicator.bad_news}`;
  }

  // same logic/purpose as "news" function, but allows us to give conditional classes to pieces of our template (so we can style them in different colors)
  function conditionalClass() {
    return envData[indicator.id] < 0
      ? "no-data"
      : envData[indicator.id] < indicator.threshold
      ? "good-news"
      : "bad-news";
  }

  return (
    <div className="col">
      <div className="card" id="air-card">
        <img className="card-img-top" src={`${indicator.icon_url}`} alt="air" />
        <div className="card-body">
          <h5 className="card-title">Air</h5>
          <div className="card-text">
            {/* conditional class and message for air "news" - will return message and class (with different color) for "good_news", "bad_news", or "no_data", depending on the value for "air" in envData and the "threshold" in featIndicator. This is repeated on all cards */}
            <p className={conditionalClass()}>{`${news(
              envData[indicator.id]
            )}`}</p>
          </div>
          <button
            className="btn btn-primary"
            type="button"
            id="air"
            onClick={(e) => handleClick(indicator.id)}
          >
            Learn more
          </button>
        </div>
      </div>
    </div>
  );
}
export default IndicatorCard;
