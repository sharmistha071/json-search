import React from "react";


const Search = (props) => (
  <div>
    <input
      type="text"
      onChange={props.onChange}
      placeholder="Search here"
    />
  </div>
)

export default Search;
