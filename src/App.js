import React, {useEffect, useReducer, useState} from "react";
import Counter from "./components/Counter";

export const CounterContext = React.createContext(0);

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

function App() {
  const [count, dispatch] = useReducer(reducer, 0);
  return (
    <div className="App">
      THE COUNT IS { count }
      <CounterContext.Provider value={{count: count, dispatch: dispatch}}>
        <Counter />
        <Counter />
      </CounterContext.Provider>
    </div>
  );
}

export default App;
