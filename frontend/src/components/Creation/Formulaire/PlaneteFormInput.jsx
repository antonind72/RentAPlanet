const PlaneteFormInput = ({
  placeholder,
  register,
  nameID,
  classNameInput,
}) => {
  return (
    <div className={classNameInput}>
      <label>{placeholder}</label>
      <input {...register(nameID)} required />
    </div>
  );
};

export default PlaneteFormInput;
