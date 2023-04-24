import Popups from "@components/popups/Popups";
import { useState } from "react";
import PlaneteForm from "./PlaneteForm";

const planetFormCore = ({ setCreation, myCreation }) => {
  const setCreationPlanete = (value) => {
    setCreation([...myCreation, value]);
  };

  const [popups, setPopups] = useState(false);
  const [messagePopups, setMessagePopups] = useState("message");
  const [errorPopups, setErrorPopups] = useState("none");
  return (
    <div className="creationContainer">
      <div className="secondBackground">
        {popups ? (
          <Popups
            setPopups={setPopups}
            errorPopups={errorPopups}
            messagePopups={messagePopups}
          />
        ) : (
          ""
        )}
        <PlaneteForm
          setFormValues={setCreationPlanete}
          setPopups={setPopups}
          setErrorPopups={setErrorPopups}
          setMessagePopups={setMessagePopups}
        />
      </div>
    </div>
  );
};

export default planetFormCore;
