import styled, {css} from 'styled-components';
import {Fragment, useState} from "react";

const Theme = {
  primaryColor: '#0918ff',
  primaryBackground: '#85e9ff'
};

export default function Button(props) {
  const [visibility, setVisibility] = useState(true);
  const AppButton = styled.button`
      color: ${Theme['primaryColor']};
      border: 0.25rem solid ${Theme['primaryColor']};
      background-color: ${Theme['primaryBackground']};
      font-size: 3rem;
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
  const handleClick = (event) => {
    if (event.target.type !== 'button') {
      setTimeout(() => {
        setVisibility(false);
      }, 250);
      setTimeout(() => {
        setVisibility(true);
      }, 3000);
    } else {
      props.changeColor()
    }
  };

  return (
    <Fragment>
      {
        (
        visibility &&
        <AppButton {...props} onMouseOut={handleClick}>{props.children}</AppButton>
          ||
        <button type="button" onClick={handleClick}>Default</button>
        )
      }
    </Fragment>
  );
}
