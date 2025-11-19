import React from "react";
import HistoryItem from "./HistoryItem";
import { useSelector } from "react-redux";

const HistoryItems = ({ handleDeleteItem }) => {
  const items = useSelector((state) => state?.entries?.entries);
  return (
    <>
      <section className="historyItems">
        <div className="align-center">
          {items.length === 0 && <p>No entries yet!!</p>}
        </div>

        {items?.map((el) => {
          return (
            <HistoryItem
              key={el.id}
              description={el.description}
              isExpense={el.isExpense}
              value={el.value}
              id={el.id}
              handleDeleteItem={handleDeleteItem}
            />
          );
        })}
      </section>
    </>
  );
};

export default HistoryItems;
