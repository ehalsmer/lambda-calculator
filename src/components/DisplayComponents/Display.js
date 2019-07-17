import React from "react";
// import NumberButton from "../ButtonComponents/NumberButtons/NumberButton";
// import Numbers from "../ButtonComponents/NumberButtons/Numbers";

const Display = (props) => {
  // see app.js for prop, listed inside <Display />
  console.log(props);
  return (<div>
    <div className='display'>
      {props.number}
    </div>
  {/* Display any props data here */}
  </div>);
};

export default Display;