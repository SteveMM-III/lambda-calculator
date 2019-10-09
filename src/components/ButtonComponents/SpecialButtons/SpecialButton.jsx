import React from "react";

const SpecialButton = (props) => {
  let classes = '';

  if (props.index === 1) {
    classes = 'extra-special button';
  } else {
    classes = 'special button';
  }


  return (
    <div className='btn-container'>
      {/* Display a button element rendering the data being passed down from the parent container on props */
        <button className={classes} onClick={ () => props.getSpecial(props.button)} >{props.button}</button>
      }
    </div>
  );
};

export default SpecialButton;
