import "../../Style/Home/Infos.css";

const Infos = ({ name, titre }) => {
  return (
    <div className={name}>
      <h2>{titre}</h2>
    </div>
  );
};

export default Infos;
