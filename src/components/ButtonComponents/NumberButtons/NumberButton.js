import React from "react";
import {useState} from "react";

const NumberButton = (props) => {
  // console.log('Number button!');
  const [numButtonState, setButtonState] = useState(0);
  return (
    <div>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button onClick={()=>console.log(props)}>{props.text}</button>
    </div>
  );
};

export default NumberButton;
