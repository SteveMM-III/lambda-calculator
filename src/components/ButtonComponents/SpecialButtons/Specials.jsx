import React from "react";
import SpecialButton from './SpecialButton';
//import any components needed

//Import your array data to from the provided data file

const Specials = ( props ) => {
  // STEP 2 - add the imported data to state
  const { specials, getSpecial } = props;

  return (
    <div className='special-container'>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/
       specials.map( ( button, index ) => (
        <SpecialButton key={ index } index={ index } button={ button } getSpecial={ getSpecial } />
      ))
       }
    </div>
  );
};

export default Specials;
