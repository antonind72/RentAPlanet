import "../Style/Error.css";
import AgentImmoError from "../assets/zinzin404.png";

const Error = () => {
  return (
    <div className="Page404">
      <h1>
        Error 404...
        <br /> You seem to be... Lost...
      </h1>
      <img
        src={AgentImmoError}
        alt="Agent-immo-Orange"
        className="AgentOrange"
      />
    </div>
  );
};

export default Error;
