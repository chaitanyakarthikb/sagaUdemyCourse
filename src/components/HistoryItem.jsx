import React from "react";
import { useDispatch } from "react-redux";
import { removeEntryRedux } from "../Actions/actions";
import { OPEN_EDIT_MODAL } from "../constants/constants";

const HistoryItem = ({ description, isExpense, value, id, setShowModal }) => {
  const handleEdit = () => {
    // setShowModal((prev) => !prev);
    dispatch({ type: OPEN_EDIT_MODAL, payload: id });
  };
  const dispatch = useDispatch();
  return (
    <div className={`historyItem ${isExpense ? "red" : "green"}`}>
      <h2>{description}</h2>
      <div className="icons">
        <p>${value}</p>
        <div className="buttons">
          <button onClick={() => handleEdit()}>Edit</button>
          <button onClick={() => dispatch(removeEntryRedux(id))}>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default HistoryItem;
