import React from "react";

const HistoryItem = ({
  description,
  isExpense,
  value,
  handleDeleteItem,
  id,
  setShowModal,
  setIdForModalToShow,
}) => {
  const handleEdit = () => {
    setIdForModalToShow(id);
    setShowModal((prev) => !prev);
  };
  return (
    <div className={`historyItem ${isExpense ? "red" : "green"}`}>
      <h2>{description}</h2>
      <div className="icons">
        <p>${value}</p>
        <div className="buttons">
          <button onClick={() => handleEdit()}>Edit</button>
          <button onClick={() => handleDeleteItem(id)}>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default HistoryItem;
