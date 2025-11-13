import React from "react";

const Form = () => {
  return (
    <form>
      <div className="inputs">
        <div className="form--col">
          <label>Description</label>
          <input placeholder="Description" />
        </div>

        <div className="form--col">
          <label>Value</label>
          <input type="number" />
        </div>
      </div>
      <div className="buttons">
        <button>Cancel</button>
        <button>OK</button>
      </div>
    </form>
  );
};

export default Form;
