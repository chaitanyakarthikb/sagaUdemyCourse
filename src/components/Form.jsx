import UserEntryHooks from "../Hooks/UserEntryHooks";
import FormElement from "./FormElement";

const Form = () => {
  const {
    description,
    setDescription,
    value,
    setValue,
    expense,
    setExpense,
    handleSubmit,
  } = UserEntryHooks();

  const propsToPass = {
    description,
    setDescription,
    value,
    setValue,
    expense,
    setExpense,
    handleSubmit,
  };
  return (
    <form>
      <FormElement {...propsToPass} />
    </form>
  );
};

export default Form;
