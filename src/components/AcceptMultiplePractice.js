import React from "react";

const AcceptMultiplePractice = ({ handleClick, count, data }) => {
  return (
    <div>
      <h3>{data}</h3>
      <button onClick={handleClick}>Increment by 2</button>
      <h3>{count}</h3>
    </div>
  );
};

export default AcceptMultiplePractice;
