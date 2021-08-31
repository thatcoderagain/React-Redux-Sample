import './App.css';
import Button from './components/Button.js';
import React, {useEffect, useState} from "react";

function App() {
  const [color, setColor] = useState('#111111');
  const [bgColor, setBgColor] = useState('#eeeeee');
  const changeColor = () => {
    setColor('#'+Math.floor(Math.random()*16777215).toString(16));
    setBgColor('#'+Math.floor(Math.random()*16777215).toString(16));
  };

  useEffect(() => {
    console.log("Component mounted");
    return () => {
      // clean-up
    }
  }, []);
  useEffect(() => {
    console.log("Component color prop or bgColor Updated");
  }, [color, bgColor]);

  return (
    <div className="App">
      <Button color={color} bgColor={bgColor} changeColor={changeColor} onClick={changeColor}>Click to change color</Button>
    </div>
  );
}

export default App;
