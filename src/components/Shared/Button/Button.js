import React from 'react';

const Button = (props) => {
  return (
    <button
      onClick={props.onClickProp}
      className='btn'
    >
      <div>{props.btnName}</div>
      <i></i> 
    </button>
  );
};

export default Button;
