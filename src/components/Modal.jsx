import React, { useState } from "react";
import { styled } from "styled-components";

const Wrapper = styled.div`
  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 99999;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .modal {
    background-color: white;
    width: 50vw;
    height: 50vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
const Modal = ({ setShowModal, element, editEntries }) => {
  console.log("===========element=========", element);
  const [description, setDescription] = useState(element.description);
  const [value, setValue] = useState(element.value);
  const [expense, setExpense] = useState(element.isExpense);
  const handleSubmit = (e) => {
    e.preventDefault();
    let obj = {
      description: description,
      value: value,
      isExpense: expense,
      id: element.id,
    };
    editEntries(obj);
  };
  return (
    <Wrapper>
      <div className="overlay">
        <div className="modal">
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
                      onChange={() => setExpense(!expense)}
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
          <button onClick={() => setShowModal((prev) => !prev)}>Close</button>
        </div>
      </div>
    </Wrapper>
  );
};

export default Modal;
