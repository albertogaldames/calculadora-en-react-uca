import React from 'react';

export const Display = (props) => {
    const { 
        operador,
        operando,
        display
     } = props;
    return (
        <div className="display">
            <span>{`${operando} ${operador}`}</span>
            <h1>{display}</h1>
        </div>
    );
}