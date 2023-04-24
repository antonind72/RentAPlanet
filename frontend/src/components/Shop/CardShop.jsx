import "./CardShop.css";

const CardShop = ({
  name,
  distance,
  mass,
  period,
  radius,
  temperature,
  type,
  price,
  planeteLike,
  updateTableForLikes,
  planeteID,
  planeteIMG,
}) => {
  const handleChange = (e) => {
    updateTableForLikes(e.target.value);
  };

  return (
    <div className={!planeteLike ? "cardCore" : "cardCoreLike"}>
      <div className="flip-card">
        <div className="frontCard">
          <img src={planeteIMG} alt="beautifull planet" />
        </div>
        <div className="backCard">
          <div className="cardHeader">{name}</div>
          <div className="cardbody">
            <p>
              Distance : <span>{distance}</span> light year
            </p>
            <p>
              Mass : <span>{mass} </span>Jupiters
            </p>
            <p>
              Period : <span>{period} </span>Earth Day
            </p>
            <p>
              Radius : <span>{radius} </span>Jupiters
            </p>
            <p>
              Temperature : <span>{temperature}</span> kelvin
            </p>
            <p>
              Prix : <span>{price}</span> M€
            </p>
            <p>
              Type : <span>{type}</span>
            </p>
          </div>
          <div className="cardfooter">
            <button type="button" onClick={handleChange} value={planeteID}>
              Like
            </button>
            <button
              type="button"
              onClick={() =>
                alert(
                  "Thank you for you purchase, we will contact you as soon as possible ! You can see your order in your profil page"
                )
              }
            >
              I want it !
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardShop;
