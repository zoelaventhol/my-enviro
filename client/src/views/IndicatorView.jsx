import "./IndicatorView.css";
import IndicatorCard from "../components/IndicatorCard.jsx";
// use React router navigation
import { useNavigate } from "react-router-dom";

function IndicatorView({ getFeatIndicator, allIndicators, envData }) {
  // use React router navigation
  const navigate = useNavigate();

  // send indicator id (i.e. air, water, etc.) to App, where it updates the state of featIndicator
  function handleClick(id) {
    // update state/pass to parent (App.js)
    getFeatIndicator(id);
    // go to featured indicator page
    navigate(`/indicators/${id}`);
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
        {allIndicators.map((indicator) => {
          return (
            <IndicatorCard
              key={indicator.id}
              indicator={indicator}
              envData={envData}
              handleClick={handleClick}
            />
          );
        })}
      </div>
    </div>
  );
}

export default IndicatorView;
