import React, { useState } from 'react';

function App() {
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [result, setResult] = useState('');

  const add = () => {
    const num1 = Number(number1);
    const num2 = Number(number2);
    if (number1 === '' || number2 === '') {
      setResult('Entrez deux nombres');
    } else {
      setResult(num1 + num2);
    }
  };

  const subtract = () => {
    const num1 = Number(number1);
    const num2 = Number(number2);
    if (number1 === '' || number2 === '') {
      setResult('Entrez deux nombres');
    } else {
      setResult(num1 - num2);
    }
  };

  const multiply = () => {
    const num1 = Number(number1);
    const num2 = Number(number2);
    if (number1 === '' || number2 === '') {
      setResult('Entrez deux nombres');
    } else {
      setResult(num1 * num2);
    }
  };

  const divide = () => {
    const num1 = Number(number1);
    const num2 = Number(number2);
    if (number1 === '' || number2 === '') {
      setResult('Entrez deux nombres');
    } else if (num2 === 0) {
      setResult('Ne divisez pas par zéro');
    } else {
      setResult(num1 / num2);
    }
  };

  const reset = () => {
    setNumber1('');
    setNumber2('');
    setResult('');
  };

  const appStyle = {
    textAlign: 'center',
    padding: '20px',
  };

  const inputStyle = {
    padding: '5px',
    margin: '5px',
    appearance: 'none', // Supprime les flèches
    WebkitAppearance: 'none', // Pour Chrome/Safari
    MozAppearance: 'none', // Pour Firefox
  };

  const buttonStyle = {
    padding: '5px 10px',
    margin: '5px',
  };

  return (
    <div style={appStyle}>
      <h1>Calculatrice</h1>
      <input
        type="number"
        value={number1}
        onChange={(e) => setNumber1(e.target.value)}
        placeholder="Nombre 1"
        style={inputStyle}
      />
      <input
        type="number"
        value={number2}
        onChange={(e) => setNumber2(e.target.value)}
        placeholder="Nombre 2"
        style={inputStyle}
      />
      <div>
        <button style={buttonStyle} onClick={add}>
          +
        </button>
        <button style={buttonStyle} onClick={subtract}>
          -
        </button>
        <button style={buttonStyle} onClick={multiply}>
          ×
        </button>
        <button style={buttonStyle} onClick={divide}>
          ÷
        </button>
      </div>
      <button style={buttonStyle} onClick={reset}>
        Reset
      </button>
      <p>Résultat : {result}</p>
    </div>
  );
}

export default App;