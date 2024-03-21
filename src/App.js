import React from 'react';
import './App.css';
import airconnectImage from './images/airconnect.svg'; // Path to the image

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={airconnectImage} alt="AirConnect" />
        <p>
          Welcome to AirConnect!
        </p>
      </header>
    </div>
  );
}

export default App;
