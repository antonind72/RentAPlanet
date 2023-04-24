import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleXmark,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";

import "./Popups.css";

const Popups = ({ setPopups, messagePopups, errorPopups }) => {
  const filterError = () => {
    if (errorPopups === "error") {
      return (
        <FontAwesomeIcon
          icon={faCircleXmark}
          onClick={() => setPopups(false)}
        />
      );
    }
    return (
      <FontAwesomeIcon icon={faCircleCheck} onClick={() => setPopups(false)} />
    );
  };
  return (
    <div className="popupsAll">
      <div className="iconPopups">{filterError()}</div>
      <div className="textPopups">{messagePopups}</div>
    </div>
  );
};
export default Popups;
