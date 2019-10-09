import React, { useState } from "react";
import "./App.css";
// STEP 4 - import the button and display components
// Don't forget to import any extra css/scss files you build into the correct component
import Numbers   from './components/ButtonComponents/NumberButtons/Numbers';
import Operators from './components/ButtonComponents/OperatorButtons/Operators';
import Specials  from './components/ButtonComponents/SpecialButtons/Specials';

import { numbers   } from './data';
import { operators } from './data';
import { specials  } from './data';

// Logo has already been provided for you. Do the same for the remaining components
import Logo    from "./components/DisplayComponents/Logo";
import Display from './components/DisplayComponents/Display';

function App() {
  // STEP 5 - After you get the components displaying using the provided data file, write your state hooks here.
  // Once the state hooks are in place write some functions to hold data in state and update that data depending on what it needs to be doing
  // Your functions should accept a parameter of the the item data being displayed to the DOM (ie - should recieve 5 if the user clicks on
  // the "5" button, or the operator if they click one of those buttons) and then call your setter function to update state.
  // Don't forget to pass the functions (and any additional data needed) to the components as props

  const [display,        setDisplay       ] = useState(    0 );
  const [firstNumInput,  setFirstNumInput ] = useState( null );
  const [secondNumInput, setSecondNumInput] = useState( null );
  const [op,             setOp            ] = useState( null );

  function reset() {
    setDisplay       (    0 );
    setFirstNumInput ( null );
    setSecondNumInput( null );
    setOp            ( null );
  }

  function determinValue() {
    const one = parseFloat( firstNumInput  );
    const two = parseFloat( secondNumInput );

    switch (op){
      case operators[0].char:
        setDisplay  ( one / two );
        updateValues( one / two );
        break;

      case operators[1].char:
        setDisplay  ( one * two );
        updateValues( one * two );
        break;

      case operators[2].char:
        setDisplay  ( one - two );
        updateValues( one - two );
        break;

      case operators[3].char:
        setDisplay  ( one + two );
        updateValues( one + two );
        break;

      default:
        updateValues( null );
        break;
    }
  }

  function updateValues( n ) {
    setFirstNumInput (    n );
    setSecondNumInput( null );
  }
  
  function getNumbers( button ) {
    let first  = firstNumInput  === null ? '' : firstNumInput;
    let second = secondNumInput === null ? '' : secondNumInput;

    if ( op === null ) {
      if ( button === numbers[10] && firstNumInput === null) { return null; }
      setFirstNumInput( first += button );
      setDisplay(first);
    } else {
      if ( button === numbers[10] && secondNumInput === null) { return null; }
      setSecondNumInput( second += button );
      setDisplay(second);
    }
  }

  function getOperator( button ) {
    if ( button === operators[4].char ) {
      determinValue();
      return null;
    }
    setOp(button);
    if (firstNumInput !== null && secondNumInput !== null) { determinValue(); }
  }

  function getSpecial( button ) {
    if ( button === specials[0] ) { 
      reset();
    }
  }

  return (
    <div className="container">
      <Logo />
      <Display value={ display } />
      <div className="App">
        {/* STEP 4 - Render your components here and be sure to properly import/export all files */}
        <div className='left'>
          <Specials specials={ specials } getSpecial={ getSpecial } />
          <Numbers  numbers ={ numbers  } getNumbers={ getNumbers } />
        </div>
        <div className='right'>
          <Operators operators={ operators } getOperator={ getOperator } />
        </div>
      </div>
    </div>
  );
}

export default App;

