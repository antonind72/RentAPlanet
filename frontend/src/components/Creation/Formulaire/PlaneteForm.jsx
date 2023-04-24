import Joi from "joi";
import { useForm } from "react-hook-form";
import PlaneteFormInput from "./PlaneteFormInput";
import planetTable from "./planeteImage";

const PlaneteForm = ({
  setFormValues,
  setPopups,
  setMessagePopups,
  setErrorPopups,
}) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (d) => {
    const planet = d;
    const randomIMG = Math.floor(Math.random() * planetTable.length);

    planet.dataCreation = Date.now();
    planet.url = planetTable[randomIMG];

    const shema = Joi.object({
      planetName: Joi.string().alphanum().min(3).max(25).required(),
      planetMasse: Joi.number().min(0).required(),
      distanceLightYear: Joi.number().min(1).required(),
      temperature: Joi.number().min(1).required(),
      dataCreation: Joi.number().min(0).required(),
      planeteSize: Joi.number().min(1).required(),
      url: Joi.string().required(),
    });
    try {
      const valueFinal = await shema.validateAsync(planet);
      setFormValues(valueFinal);
      setPopups(true);
      setMessagePopups("Your planet was successfully created!");
      setErrorPopups("succes");
    } catch (error) {
      console.error(error.details);
      setPopups(true);
      setMessagePopups(`${error.details[0].message}`);
      setErrorPopups("error");
    }
  };

  return (
    <div className="formContainer">
      <div className="formHeader">
        <h2>CREATE YOUR PLANETS</h2>
      </div>
      <div className="formBody">
        <form onSubmit={handleSubmit(onSubmit)}>
          <PlaneteFormInput
            register={register}
            placeholder="PLANETE NAME* :"
            nameID="planetName"
            classNameInput="inputFormPlanete"
          />
          <PlaneteFormInput
            register={register}
            placeholder="PLANETE MASSE* :"
            nameID="planetMasse"
            classNameInput="inputFormPlanete"
          />
          <PlaneteFormInput
            register={register}
            placeholder="DISTANCE* :"
            nameID="distanceLightYear"
            classNameInput="inputFormPlanete"
          />
          <PlaneteFormInput
            register={register}
            placeholder="TEMPERATURE* :"
            nameID="temperature"
            classNameInput="inputFormPlanete"
          />
          <PlaneteFormInput
            register={register}
            placeholder="PLANETE SIZE* :"
            nameID="planeteSize"
            classNameInput="inputFormPlanete planeteSizeSupButton"
          />
          <button type="submit" className="buttonSubmit">
            CREATE
          </button>
        </form>
      </div>
    </div>
  );
};

export default PlaneteForm;
