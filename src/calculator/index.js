import React, { Component } from 'react';
import { Inputs } from './inputs';
import { Operadores } from './operadores';

class Calculadora extends Component {
  constructor(props) {
    super(props);
    this.state = {
      operador: '',
      operando: '',
      display: '0'
    };
  }

  _inputClick = (e) => {
    const { display } = this.state;
    const value = e.target.value;
    let resultado = display + value;

    if (display === '0') {
      resultado = value;
    }

    this.setState({
      display: resultado,
    })
  }

  _operatorClick = (e) => {
    const { display } = this.state;
    const value = e.target.value;

    this.calculaTotal();

    this.setState({
      operador: value,
      operando: display,
      display: '0'
    });
  }

  calculaTotal = () => {
    console.log("Calcula");
  }
  render() {
    console.log(this.state.display);
    return (
      <div>
        <h1>Calculadora</h1>
        <Inputs onClick={ this._inputClick } />
        <Operadores onClick={ this._operatorClick } />
        {/* // inputs
        // Operadores
        // Resultado
        // Historial */}
      </div>
    );
  }
}

export default Calculadora;
