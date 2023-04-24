import { useEffect, useState } from "react";
import axios from "axios";
import RandomString from "random-string";
import "../../Style/Filter.css";
import Zinzin from "../../assets/ShopZinzin.png";
import CardShop from "./CardShop";

const Filter = () => {
  const imgList = [
    "https://images.pexels.com/photos/39561/solar-flare-sun-eruption-energy-39561.jpeg",
    "https://cdn.pixabay.com/photo/2021/01/17/02/02/planets-5923806_960_720.jpg",
    "https://cdn.pixabay.com/photo/2016/05/10/09/01/space-1383282_960_720.jpg",
    "https://cdn.pixabay.com/photo/2017/01/27/23/17/space-2014428_960_720.jpg",
    "https://cdn.pixabay.com/photo/2017/03/08/12/47/planet-2126674_960_720.jpg",
    "https://cdn.pixabay.com/photo/2019/07/26/01/52/planet-4363754_960_720.jpg",
    "https://cdn.pixabay.com/photo/2016/08/26/05/08/planet-1621264_960_720.jpg",
    "https://cdn.pixabay.com/photo/2022/10/26/08/06/planet-7547710_960_720.jpg",
    "https://cdn.pixabay.com/photo/2017/03/08/12/47/planet-2126669_960_720.jpg",
    "https://cdn.pixabay.com/photo/2019/11/03/02/04/moon-4597747_960_720.jpg",
    "https://cdn.pixabay.com/photo/2020/09/08/23/58/mercury-5556108_960_720.jpg",
    "https://cdn.pixabay.com/photo/2016/08/25/16/22/pokemon-1619924_960_720.jpg",
    "https://cdn.pixabay.com/photo/2018/07/14/11/31/planet-3537397_960_720.jpg",
    "https://cdn.pixabay.com/photo/2018/04/10/19/09/planet-3308432_960_720.png",
    "https://cdn.pixabay.com/photo/2022/10/19/08/37/planet-7531951_960_720.jpg",
    "https://cdn.pixabay.com/photo/2022/10/26/08/05/planet-7547704_960_720.jpg",
    "https://cdn.pixabay.com/photo/2022/10/26/08/05/planet-7547701_960_720.jpg",
    "https://cdn.pixabay.com/photo/2020/09/05/12/08/planet-5546378_960_720.jpg",
    "https://cdn.pixabay.com/photo/2022/09/24/00/10/planet-7475371_960_720.jpg",
    "https://cdn.pixabay.com/photo/2021/02/25/13/48/planet-6049143_960_720.jpg",
    "https://cdn.pixabay.com/photo/2022/08/25/13/56/exoplanet-7410377_960_720.jpg",
    "https://cdn.pixabay.com/photo/2021/02/25/13/51/jupiter-6049154_960_720.jpg",
    "https://cdn.pixabay.com/photo/2022/08/11/07/21/exoplanet-7378813_960_720.jpg",
    "https://cdn.pixabay.com/photo/2014/12/27/17/36/sun-581299_960_720.jpg",
    "https://cdn.pixabay.com/photo/2016/04/13/06/40/mars-1326108_960_720.jpg",
    "https://cdn.pixabay.com/photo/2015/03/07/07/48/fractal-662893_960_720.jpg",
    "https://cdn.pixabay.com/photo/2015/10/18/09/58/universe-994036_960_720.jpg",
    "https://cdn.pixabay.com/photo/2016/07/15/14/45/planet-1519089_960_720.jpg",
    "https://cdn.pixabay.com/photo/2016/05/10/09/10/planet-1383301_960_720.jpg",
  ];

  const [filterOpen, setFilterOpen] = useState(false);

  const handleToggle = () => {
    setFilterOpen((prev) => !prev);
  };

  const [dataAPI, setDataAPI] = useState([]);
  const [dataBackup, setDataBackup] = useState([]);

  const getRandomPrice = () => {
    const mins = Math.ceil(100);
    const maxs = Math.floor(10000);
    return Math.floor(Math.random() * (maxs - mins + 1)) + mins;
  };

  const getRandomType = () => {
    const mins = Math.ceil(0);
    const maxs = Math.floor(1);
    const value = Math.floor(Math.random() * (maxs - mins + 1)) + mins;
    if (value === 1) {
      return "Rent";
    }
    return "Buy";
  };

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://planets-by-api-ninjas.p.rapidapi.com/v1/planets",
      params: {
        min_radius: "1",
        min_period: "1",
        min_temperature: "1",
        min_distance_light_year: "1",
      },
      headers: {
        "X-RapidAPI-Key": "dba33f7bddmsh9435acb83e1d17bp1dd2cfjsn83f2d79594da",
      },
    };

    axios
      .request(options)
      .then((response) => {
        const planetes = response.data.map((planete) => {
          const chooseImg = Math.floor(Math.random() * imgList.length);
          const updateSpec = {
            ...planete,
            price: getRandomPrice(),
            type: getRandomType(),
            distance: planete.distance_light_year,
            planeteLike: false,
            planeteID: RandomString({ length: 20 }),
            planeteIMG: imgList[chooseImg],
          };
          delete updateSpec.distance_light_year;
          return updateSpec;
        });
        setDataAPI(planetes);
        setDataBackup(planetes);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  function filterAllOptions(res) {
    return res.length > 0 ? setDataAPI(res) : setDataAPI(dataBackup);
  }
  const handleFilter = (e) => {
    if (e.target.value === "Like") {
      const resLike = dataBackup.filter(
        (result) => result.planeteLike === true
      );
      filterAllOptions(resLike);
    } else {
      const res = dataBackup.filter((result) => result.type === e.target.value);
      filterAllOptions(res);
    }
  };

  const updateTableForLike = (intemsLike) => {
    const table = [...dataBackup];
    const indexObj = table.findIndex((obj) => obj.planeteID === intemsLike);
    table[indexObj].planeteLike = !table[indexObj].planeteLike;

    setDataBackup(table);
    setDataAPI(table);
  };

  return (
    <div className="bigShop">
      <div className="filterPhone">
        <button type="button" onClick={handleToggle} className="filterButton">
          <h1>Select Your Planet</h1>
        </button>

        <ul
          className={`menuFilter ${filterOpen ? "showFilter" : "hiddenFilter"}`}
        >
          <div className="Shop-Burger">
            <option
              className="menu-list"
              value="All"
              onClick={handleFilter}
              selected
            >
              All
            </option>
            <option
              className="menu-list"
              value="Rent"
              onClick={handleFilter}
              selected
            >
              Rent
            </option>
            <option
              className="menu-list"
              onClick={handleFilter}
              value="Buy"
              selected
            >
              Buy
            </option>
            <option
              className="menu-list"
              onClick={handleFilter}
              value="Like"
              selected
            >
              Like
            </option>
          </div>
        </ul>
      </div>
      <div className="filterLaptop">
        <h1 className="">Select Your Planet</h1>

        <ul
          className={`menuFilter2 ${filterOpen ? "showFilter" : "showFilter"}`}
        >
          <div className="box-buttons">
            <button
              value="All"
              className="all-buttons"
              type="button"
              onClick={handleFilter}
            >
              All
            </button>
            <button
              value="Rent"
              className="all-buttons"
              type="button"
              onClick={handleFilter}
            >
              Rent
            </button>
            <button
              value="Buy"
              className="all-buttons"
              type="button"
              onClick={handleFilter}
            >
              Buy
            </button>
            <button
              className="all-buttons"
              type="button"
              value="Like"
              onClick={handleFilter}
            >
              Like
            </button>
            <img src={Zinzin} alt="Zinzin Agent" />
          </div>
        </ul>
      </div>

      <div className="allCards">
        {dataAPI.map((items) => (
          <CardShop
            {...items}
            updateTableForLikes={updateTableForLike}
            key={items.planeteID}
          />
        ))}
      </div>
    </div>
  );
};

export default Filter;
