import GalaxyHome from "../components/Home/GalaxyHome";
import ClassicHome from "../components/Home/ClassicHome";
import "../Style/Home/Home.css";
import Navbar from "../components/Navbar/Navbar";

const Home = () => {
  return (
    <div className="global">
      <Navbar />
      <GalaxyHome />
      <ClassicHome />
    </div>
  );
};

export default Home;
