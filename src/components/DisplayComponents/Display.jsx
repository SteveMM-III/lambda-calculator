import React from "react";

const Display = (props) => {
  const { value } = props;
  console.log(value);

  return <div className="display">{ value }</div>;
};

export default Display;