import React from "react";
import HistoryItem from "./HistoryItem";

const HistoryItems = ({
  items,
  handleDeleteItem,
  setShowModal,
  setIdForModalToShow,
}) => {
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
              setShowModal={setShowModal}
              setIdForModalToShow={setIdForModalToShow}
            />
          );
        })}
      </section>
    </>
  );
};

export default HistoryItems;
