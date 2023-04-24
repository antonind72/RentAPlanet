import "../../Style/Home/Promo.css";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
import Infos from "./Infos";

const Promo = ({ src, alt, desc, text, valueSup, name, route, titre }) => {
  return (
    <div className={valueSup}>
      <Link to={route}>
        <img src={src} alt={alt} />
        <div className="desc">{desc}</div>
      </Link>
      <Fade delay={600}>
        <Infos text={text} name={name} titre={titre} />
      </Fade>
    </div>
  );
};

export default Promo;
