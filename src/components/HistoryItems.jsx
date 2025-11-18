import React from "react";
import HistoryItem from "./HistoryItem";
import { useSelector } from "react-redux";

const HistoryItems = ({ handleDeleteItem }) => {
  const items = useSelector((state) => state.entries);
  return (
    <>
      <section className="historyItems">
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
