import React from "react";

import Card from "../card/card.component";
import "./card-list.styles.css";

const CardList = (props) => {
  const { list } = props;
  return (
    <div className="card-list">
      {list.map((monster) => (
        <Card key={monster.id} data={monster} />
      ))}
    </div>
  );
};

export default CardList;
