import React from 'react';

export const Button = (props) => {
  const { value } = props;
  return (
    <button
      onClick={ (e) => props.onClick(e)}
      value={value}
    >
      {value}
    </button>
  )
}
