import React from "react";
import { useSelector } from "react-redux";
import { styled } from "styled-components";
import UserEntryHooks from "../Hooks/UserEntryHooks";
import FormElement from "./FormElement";

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
const Modal = () => {
  const entries = useSelector((state) => state.entries.entries);
  const idForModalToShow = useSelector(
    (state) => state.modals.idForModalToShow
  );
  const element = entries.find((el) => el.id === idForModalToShow);

  const {
    description,
    setDescription,
    value,
    setValue,
    expense,
    setExpense,
    handleSubmit,
  } = UserEntryHooks(element);
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
    <Wrapper>
      <div className="overlay">
        <div className="modal">
          <FormElement {...propsToPass} />
        </div>
      </div>
    </Wrapper>
  );
};

export default Modal;
