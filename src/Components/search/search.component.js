import React from "react";

import "./search.styles.css";

const Search = (props) => {
  return (
    <input
      type="search"
      placeholder="Type your monster name"
      className="search"
      onChange={props.handleChange}
    />
  );
};

export default Search;
