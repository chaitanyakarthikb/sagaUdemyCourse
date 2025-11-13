import React from "react";
import { FaEdit } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import { FaRegTrashCan } from "react-icons/fa6";

const HistoryItem = () => {
  return (
    <div className="historyItem">
      <h2>Something</h2>
      <div className="icons">
        <p>$100.00</p>
        <div className="buttons">
          <button>Edit</button>
          <button>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default HistoryItem;
