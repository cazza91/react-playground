import React from 'react';
import './Button.scss';

const STYLES = [
  'btn__primary__solid',
  'btn__danger__solid',
  'btn__warning__solid',
  'btn__success__solid',
  'btn__primary__outline',
  'btn__danger__outline',
  'btn__warning__outline',
  'btn__success__outline'
]

const SIZES = [
  'btn__medium', 'btn__small'
]

const Button = ({ children, type, onClick, buttonStyle, buttonSize  }) => {

  const checkButtonStyle = STYLES.includes(buttonStyle) 
    ? buttonStyle
    : STYLES[0];
  const checkButtonSize = SIZES.includes(buttonSize)
    ? buttonSize
    : SIZES[0];

  return (
    <button 
      className={`btn ${checkButtonStyle} ${checkButtonSize}`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button;
