import React from "react";

const NumberButton = (props) => {
  let classes = '';

  if ( props.index === 9 ){
    classes = 'zero number button';
  } else {
    classes = 'number button'
  }

  return (
    <div className='btn-container'>
      {/* Display a button element rendering the data being passed down from the parent container on props */
        <button className={classes}>{props.button}</button>
      }
    </div>
  );
};

export default NumberButton;