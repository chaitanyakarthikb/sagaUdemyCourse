import React, { useState } from "react";

const Form = ({ addItem }) => {
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const [expense, setExpense] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.length > 0 && description.length > 0) {
      let id = crypto.randomUUID();
      let obj = {
        id: id,
        description: description,
        value: value,
        isExpense: expense,
      };
      addItem(obj);
      setDescription("");
      setValue("");
      setExpense(false);
    }
  };

  return (
    <form>
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
            <label class="switch">
              <input
                onChange={(e) => setExpense(!expense)}
                type="checkbox"
                checked={expense}
              />
              <span class="slider round"></span>
            </label>
            <p>Is Expense</p>
          </div>
        </div>
      </div>
      <div className="buttons">
        <button>Cancel</button>
        <button onClick={(e) => handleSubmit(e)}>OK</button>
      </div>
    </form>
  );
};

export default Form;
