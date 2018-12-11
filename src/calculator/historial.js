import React from 'react';

export const Historial = (props) => {
    const { historial } = props;
    const items = historial.map((h, index) => (
        <div key={index}>
            <span>{h.operando} {h.operador} {h.display}</span>
            <h3>{h.result}</h3>
        </div>
    ));
    return (
        <div className="historial">
            <h2>Resultados</h2>
            {items}
        </div>
    );
}