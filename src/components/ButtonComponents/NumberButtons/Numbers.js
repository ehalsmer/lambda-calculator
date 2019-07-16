import React from "react";
import {useState} from "react";
//import any components needed
import NumberButton from "./NumberButton";
//Import your array data to from the provided data file
import {numbers} from '../../../data';

const Numbers = () => {
  // STEP 2 - add the imported data to state
  const [numberState, setNumberState] = useState(numbers);
  // const [numberState, setNumberState] = useState(numbers.map(number=>Number(number)*Number(number))); // Example of how you might change the state of each number in the numbers array


  return (
    <div >
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
       <div className="numbers">{numberState.map((number)=>NumberButton(number))}</div>
    </div>
  );
};

export default Numbers;