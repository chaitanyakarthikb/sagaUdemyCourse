import React from "react";
import Card from "./Card";

const Cards = ({ cardData }) => {
  return (
    <>
      <section className="cards">
        {cardData?.map((el) => {
          return <Card key={el.id} el={el} />;
        })}
      </section>
    </>
  );
};

export default Cards;
