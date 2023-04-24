import PlanetFormCore from "../components/Creation/Formulaire/PlanetFormCore";
import "../Style/Creation/Formulaire.css";

const Creation = ({ myCreation, setCreation }) => {
  return (
    <div className="allFormPage">
      <PlanetFormCore myCreation={myCreation} setCreation={setCreation} />
    </div>
  );
};

export default Creation;
