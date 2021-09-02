import styled, {css} from 'styled-components';
import {useEffect, useState} from "react";

const Theme = {
  primaryColor: '#0918ff',
  primaryBackground: '#85e9ff'
};

const StyledButton = (props) => {
   return styled.button`
    color: ${Theme['primaryColor']};
    border: 0.25rem solid ${Theme['primaryColor']};
    background-color: ${Theme['primaryBackground']};
    padding: 1rem;
    margin: 1rem;
    ${ // overriding css if provided in props 
    (props) => props.color &&
      css`
        border: 0.25rem solid ${props.color};
        color: ${props.color}
      `
  };
      ${ // overriding css if provided in props 
    (props) => props.bgColor &&
      css`
        background-color: ${props.bgColor};
      `
  };
      `;
};

export default function Button(props) {
  const [visibility, setVisibility] = useState(true);
  const [color, setColor] = useState(props.color || '#111111');
  const [bgColor, setBgColor] = useState(props.bgColor || '#eeeeee');
  const TheButton = StyledButton(props);

  const changeColor = () => {
    setColor('#'+Math.floor(Math.random()*16777215).toString(16));
    setBgColor('#'+Math.floor(Math.random()*16777215).toString(16));
    props.onClick()
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
    <TheButton {...props} color={color} bgColor={bgColor} onClick={changeColor}>{props.children}</TheButton>
  );
}
