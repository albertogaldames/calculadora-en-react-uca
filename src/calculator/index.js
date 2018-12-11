import React, { Component } from 'react';
import { Inputs } from './inputs';
import { Operadores } from './operadores';
import { Display } from './display';
import { Historial } from './historial';

class Calculadora extends Component {
  constructor(props) {
    super(props);
    this.state = {
      operador: '',
      operando: '',
      display: '0',
      displayed: false,
      historial: []
    };
  }

  _inputClick = (e) => {
    const { 
      display,
      displayed
    } = this.state;
    const value = e.target.value;
    let resultado = display + value;

    if (display === '0' || displayed) {
      resultado = value;
    } else if (isNaN(resultado)) {
      resultado = display;
    }

    this.setState({
      display: resultado,
      displayed: false,
    })
  }

  _operatorClick = (e) => {
    const { display } = this.state;
    const value = e.target.value;

    // Cambia el estado del operador y llama a la función calculaTotal solo después de
    // que se haya cambiado
    this.setState({
      operador: value,
      operando: display,
      displayed: true,
    });
  }

  calculaTotal = () => {
    const { 
      operador,
      operando,
      display,
      historial
    } = this.state;
    let result = display;
    switch(operador) {
      case '+':
        result = parseFloat(operando) + parseFloat(display);
        break;
      case '-':
        result = parseFloat(operando) - parseFloat(display);
        break;
      case '*':
        result = parseFloat(operando) * parseFloat(display);
        break;
      case '/':
        result = parseFloat(operando) / parseFloat(display);
        break;
      default:
        break;
    }
    // Guardamos el resultado en el historial
    historial.push({
      operando,
      operador,
      display,
      result
    });
    this.setState({
      operando: '',
      operador: '',
      display: result.toString(),
      displayed: true,
      historial
    });
  }
  render() {
    const {
      operador,
      operando,
      display,
      historial
    } = this.state;
    const showHistorial = historial.length !== 0 ? true : false;
    console.log(historial);
    return (
      <div className="container">
        <div className="calculadora">
          <Inputs onClick={ this._inputClick } calculaTotal={this.calculaTotal} />
          <Operadores onClick={ this._operatorClick } />
          <Display operador={operador} operando={operando} display={display} />
          {/* // inputs
          // Operadores
          // Resultado
          // Historial */}
        </div>
        { showHistorial ? <Historial historial={historial} /> : null}
      </div>
    );
  }
}

export default Calculadora;
