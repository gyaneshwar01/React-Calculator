import React from "react";
import { ACTIONS } from "./App";

const DigitButton = (props) => {
  return (
    <button
      onClick={() =>
        props.dispatch({
          type: ACTIONS.ADD_DIGIT,
          payload: { digit: props.digit },
        })
      }
    >
      {props.digit}
    </button>
  );
};

export default DigitButton;
