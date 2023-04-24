import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import Promo from "./Promo";
import "../../Style/Home/ClassicHome.css";
import Carousel from "./Carrousel";

const ClassicHome = () => {
  const data = [
    {
      src: "/src/assets/rentPlanet.jpg",
      alt: "premiere image",
      desc: "Click on this section to see all our planets for rent.",
      value: "divLocation",
      valueSup: "divLocationSup",
      text: "",
      name: "infoLocation",
      route: "/shop",
      titre: "Rent your planet !",
    },
    {
      src: "/src/assets/buyplanete.jpg",
      alt: "2nd image",
      desc: "On this section you can see all our catalog of planets.",
      value: "divVente",
      valueSup: "divVenteSup",
      text: "",
      name: "infoVente",
      route: "/shop",
      titre: "Buy your planet !",
    },
    {
      src: "/src/assets/creaplanete.jpg",
      alt: "3rd image",
      desc: "Exclusively here you can create your own planet! Just click on the picture !",
      value: "divCreation",
      valueSup: "divCreationSup",
      text: "",
      name: "infoCreation",
      route: "/creation",
      titre: "Build your own planet !",
    },
  ];

  return (
    <div>
      <Fade big duration={1000}>
        <div className="divCaroussel">
          <Carousel />
        </div>
      </Fade>
      {data.map((i) => (
        <Slide left duration={1200}>
          <div className={i.value}>
            <Promo {...i} />
          </div>
        </Slide>
      ))}
    </div>
  );
};

export default ClassicHome;
