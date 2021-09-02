import React, {useContext} from 'react';
import Button from "./Button";
import {CounterContext} from '../App';

const Counter = (props) => {
  const counterContext = useContext(CounterContext);
  console.log(counterContext);
  const {count, dispatch} = counterContext;
  return (
    <div>
      {count}
      <Button onClick={() => dispatch({type: 'DECREMENT'})}>-</Button>
      <Button onClick={() => dispatch({type: 'INCREMENT'})}>+</Button>
      <Button onClick={() => dispatch({type: 'RESET'})}>RESET</Button>
    </div>
  )
};

export default Counter;
