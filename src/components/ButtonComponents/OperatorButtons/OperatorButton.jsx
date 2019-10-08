import React from "react";

const OperatorButton = (props) => {
  return (
    <div className='btn-container'>
      {/* Display a button element rendering the data being passed down from the parent container on props */
        <button className='operator button'>{props.button.char}</button>
      }
    </div>
  );
};

export default OperatorButton;
