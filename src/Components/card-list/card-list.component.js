import React from "react";

import "./card-list.styles.css";

const CardList = (props) => {
  const { list } = props;
  return (
    <div className="card-list">
      {list.map((monster) => (
        <h2 key={monster.id}>{monster.name}</h2>
      ))}
    </div>
  );
};

export default CardList;
