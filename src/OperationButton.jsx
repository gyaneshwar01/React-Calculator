import React from "react";
import { ACTIONS } from "./App";

const OperationButton = (props) => {
  return (
    <button
      onClick={() => {
        props.dispatch({
          type: ACTIONS.CHOOSE_OPERATION,
          payload: { operation: props.operation },
        });
      }}
    >
      {props.operation}
    </button>
  );
};

export default OperationButton;
