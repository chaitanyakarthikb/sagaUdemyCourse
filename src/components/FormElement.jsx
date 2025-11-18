import React from "react";
import { useDispatch } from "react-redux";
import { CLOSE_EDIT_MODAL } from "../constants/constants";

const FormElement = ({
  description,
  setDescription,
  value,
  setValue,
  setExpense,
  expense,
  handleSubmit,
}) => {
  const dispatch = useDispatch();
  const handleSubmitEvent = (e) => {
    handleSubmit(e);
    dispatch({ type: CLOSE_EDIT_MODAL });
  };
  return (
    <>
      <div className="inputs">
        <div className="form--col">
          <label>Description</label>
          <input
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description"
          />
        </div>

        <div className="form--col">
          <label>Value</label>
          <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            type="number"
          />
          <div className="form--col--radio">
            <label className="switch">
              <input
                onChange={(e) => setExpense(!expense)}
                type="checkbox"
                checked={expense}
              />
              <span className="slider round"></span>
            </label>
            <p>Is Expense</p>
          </div>
        </div>
      </div>
      <div className="buttons">
        <button>Cancel</button>
        <button onClick={(e) => handleSubmitEvent(e)}>OK</button>
      </div>
    </>
  );
};

export default FormElement;
