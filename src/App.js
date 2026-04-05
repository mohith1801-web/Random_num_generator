import React from 'react';
import './App.css';

function App() {
  const [randomNumber, setRandomNumber] = React.useState(0);
  const generateRandomNumber = () => {
    const newNumber = Math.floor(Math.random() * 100) + 1;
    setRandomNumber(newNumber);
  };
  return (
    <>
    <div className='container'>
   <div className='title'>
      <h1>Random Number Generator</h1>
   </div>
   <div className='container2'>
    <h1>{randomNumber}</h1>
    <div className='btn'>
      <button className='btn1' onClick={generateRandomNumber}>Generate New Number</button>
      </div>
      </div>
      </div>
      <div className='footer'>
        <p>© Random Number Generator</p>
        <p>~Mohith~</p>
      </div>
    </>
  );
}

export default App;
