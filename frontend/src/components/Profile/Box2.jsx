import "../../Style/Profile.css";
import "./Box.css";

const Box = ({
  url,
  planetName,
  planetMasse,
  distanceLightYear,
  temperature,
  dataCreation,
  planeteSize,
}) => {
  return (
    <div className="flip-card">
      <div className="frontCard">
        <img src={url} alt="beautifull planet" />
      </div>
      <div className="backCard">
        <div className="cardHeader">{planetName}</div>
        <div className="cardbody">
          <p>
            Distance : <span>{distanceLightYear}</span> light year
          </p>
          <p>
            Mass : <span>{planetMasse} </span>Jupiters
          </p>
          <p>
            Period : <span>{dataCreation} </span>Earth Day
          </p>
          <p>
            Radius : <span>{planeteSize} </span>Jupiters
          </p>
          <p>
            Temperature : <span>{temperature}</span> kelvin
          </p>
        </div>
      </div>
    </div>
  );
};

export default Box;
