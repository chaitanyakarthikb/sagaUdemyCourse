import { useState } from "react";
import { useDispatch } from "react-redux";
import { addEntryRedux, editEntryRedux } from "../Actions/actions";

const UserEntryHooks = (element) => {
  const [description, setDescription] = useState(element ? element.description : "");
  const [value, setValue] = useState(element ? element.value : "");
  const [expense, setExpense] = useState(element ? element.isExpense : false);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (element) {
      dispatch(editEntryRedux({id:element.id,description:description,value:value,isExpense:expense}));
      setDescription("");
      setValue("");
      setExpense(false);
      return;
    }
    if (value.length > 0 && description.length > 0) {
      
      let id = crypto.randomUUID();
      let obj = {
        id: id,
        description: description,
        value: value,
        isExpense: expense,
      };
      dispatch(addEntryRedux(obj));
      setDescription("");
      setValue("");
      setExpense(false);
    }
  };
  return {
    description,
    setDescription,
    value,
    setValue,
    expense,
    setExpense,
    handleSubmit,
  };
};

export default UserEntryHooks;
