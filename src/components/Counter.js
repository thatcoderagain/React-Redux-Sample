import React, {useReducer} from 'react';
import Button from "./Button";

const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state+1;
    case 'DECREMENT':
      return state-1;
    case 'RESET':
      return 0;
    default:
      return state
  }
};

const Counter = (props) => {
  const [count, dispatch] = useReducer(reducer, 0);
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
