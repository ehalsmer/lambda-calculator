import React from "react";

const NumberButton = (numbers) => {
  // console.log('Number button!');
  return (
    <div>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button>{numbers}</button>
    </div>
  );
};

export default NumberButton;
