import "../../Style/Navbar.css";
import Burger from "./Burger";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="burger">
        <Burger />
      </div>
      <h1>Rent A Planet</h1>
    </div>
  );
};

export default Navbar;
