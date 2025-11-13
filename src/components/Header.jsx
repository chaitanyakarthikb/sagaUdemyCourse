import React from "react";

const Header = ({ content, type }) => {
  return (
    <div className="mainHeader">
      {type === "h1" && <h1>{content}</h1>}
      {type === "h2" && <h2>{content}</h2>}
      {type === "h3" && <h3>{content}</h3>}
      {type === "h4" && <h4>{content}</h4>}
    </div>
  );
};

export default Header;
