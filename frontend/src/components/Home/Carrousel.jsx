import { useState } from "react";
import "../../Style/Home/Carousel.css";
import image1 from "../../assets/Top5 5.jpg";
import image2 from "../../assets/Top5 2.jpg";
import image3 from "../../assets/Top5 1.jpg";
import image4 from "../../assets/Top5 4.jpg";
import image5 from "../../assets/Top5 3.jpg";

const Carousel = () => {
  const [sliders, setSliders] = useState([false, false, true, false, false]);

  const handleChecked = (e) => {
    const index = parseInt(e.target.name.split("_")[1], 10) - 1;
    const updatedChecked = sliders.map(() => false);
    updatedChecked[index] = true;
    setSliders(updatedChecked);
  };

  const swapRight = () => {
    const indexTrue = sliders.findIndex((item) => item === true);
    const update = sliders.map(() => false);
    const swapNext = () => {
      if (indexTrue + 1 < sliders.length) {
        update[indexTrue + 1] = true;
      } else {
        update[0] = true;
      }
      setSliders(update);
    };
    swapNext(indexTrue);
  };

  const swapLeft = () => {
    const indexTrue = sliders.findIndex((item) => item === true);
    const update = sliders.map(() => false);
    const swapNext = () => {
      if (indexTrue - 1 > 0) {
        update[indexTrue - 1] = true;
      } else {
        update[sliders.length - 1] = true;
      }
      setSliders(update);
    };
    swapNext(indexTrue);
  };

  return (
    <div className="carousel">
      <h2>Top 5 of the week !</h2>

      <div className="buttons">
        <button type="button" id="leftB" onClick={swapLeft}>
          Left
        </button>

        <button type="button" id="rightB" onClick={swapRight}>
          Right
        </button>
      </div>

      <section id="slider">
        <input
          type="radio"
          name="slider_1"
          id="s1"
          checked={sliders[0]}
          onChange={handleChecked}
        />
        <input
          type="radio"
          name="slider_2"
          id="s2"
          checked={sliders[1]}
          onChange={handleChecked}
        />
        <input
          type="radio"
          name="slider_3"
          id="s3"
          checked={sliders[2]}
          onChange={handleChecked}
        />
        <input
          type="radio"
          name="slider_4"
          id="s4"
          checked={sliders[3]}
          onChange={handleChecked}
        />
        <input
          type="radio"
          name="slider_5"
          id="s5"
          checked={sliders[4]}
          onChange={handleChecked}
        />

        <label htmlFor="s1" id="slide1">
          <img src={image1} alt="test1" />
        </label>

        <label htmlFor="s2" id="slide2">
          <img src={image2} alt="test2" />
        </label>

        <label htmlFor="s3" id="slide3">
          <img src={image3} alt="test3" />
        </label>

        <label htmlFor="s4" id="slide4">
          <img src={image4} alt="test4" />
        </label>

        <label htmlFor="s5" id="slide5">
          <img src={image5} alt="test5" />
        </label>
      </section>
    </div>
  );
};

export default Carousel;
