import React from 'react';
import { Button } from './button';

export const Operadores = (props) => {
  const buttons = ['+', '-', '*', '/'];
  const operadores = buttons.map(b => {
    return <Button key={b} value={b} onClick={props.onClick} />
  });
  return (
    <div className="operadores">
      {operadores}  
    </div>
  );
};