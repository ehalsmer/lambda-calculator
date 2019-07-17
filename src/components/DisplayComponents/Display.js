import React from "react";
import NumberButton from "../ButtonComponents/NumberButtons/NumberButton";
import Numbers from "../ButtonComponents/NumberButtons/Numbers";

const Display = () => {
  console.log(Numbers);
  return (<div>
    <div className='display'>{Numbers.numberState}</div>
  {/* Display any props data here */}
  </div>);
};

export default Display;