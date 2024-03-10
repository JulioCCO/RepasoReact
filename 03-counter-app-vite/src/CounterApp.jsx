import { useState } from 'react';
import PropTypes from 'prop-types';

export const CounterApp = ({value}) => {
  const [counter, setCounter] = useState(value)
  
  const handlerEventPlus =() => {
    setCounter(counter+1)
   // setCounter((c) => c+1)
  }
  const handlerEventMinus =() => {
    setCounter(counter-1)
   // setCounter((c) => c+1)
  }
  const handlerEventReset =() => {
    setCounter(value)
   // setCounter((c) => c+1)
  }
  return (
    <>
        <h1>CounterApp</h1>
        <h2>{counter}</h2>
        <button onClick={handlerEventPlus}>
          +1
        </button>
        <button onClick={handlerEventMinus}>
          -1
        </button>
        <button onClick={handlerEventReset}>
          Reset
        </button>
    </>
  )
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
};
