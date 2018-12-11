import React from 'react';
import { Button } from './button';

export const Inputs = (props) => {
  const buttons = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.'];
  const inputs = buttons.map(b => {
    return <Button key={b} onClick={props.onClick} value={b} />;
  });
  return (
    <div className="inputs">
      {inputs}
      <Button onClick={props.calculaTotal} value="=" />
    </div>
  );
}