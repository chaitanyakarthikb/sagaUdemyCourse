const Card = (props) => {
  const { el } = props;
  const title = el.title;
  const price = el.price;
  const color = el.style;

  return (
    <>
      <div className="card" style={{ color: color }}>
        <h5>{title}</h5>
        <h3>{price}</h3>
      </div>
    </>
  );
};

export default Card;
