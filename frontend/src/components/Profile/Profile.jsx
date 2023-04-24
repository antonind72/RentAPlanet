import Fade from "react-reveal/Fade";
import LightSpeed from "react-reveal";
import "../../Style/Profile.css";
import AgentImmo from "../../assets/zinzinRouge.png";
import Box from "./Box";

const Profile = ({ myCreation }) => {
  return (
    <div className="profile">
      <div className="allContainer">
        {myCreation.length > 0 ? (
          myCreation.map((i) => (
            <Fade bottom duration={2000} key="none">
              <Box {...i} />
            </Fade>
          ))
        ) : (
          <h1 className="noneProfile">NO PLANETS AVAILABLE AT THE MOMENT</h1>
        )}
      </div>
      <div className="agentImmo">
        <LightSpeed right>
          <div className="text">
            <p className="texteAgent">
              Welcome to your personal space! Here you will find your current
              orders as well as your previous purchases.
            </p>
          </div>
        </LightSpeed>
        <img src={AgentImmo} alt="Agent-immo" className="imageAgent" />
      </div>
    </div>
  );
};

export default Profile;
