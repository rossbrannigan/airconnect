import React, { useEffect } from 'react';
import './App.css';
import airconnectImage from './images/airconnect.svg'; // Path to the image
import ReactGA from 'react-ga';

function App() {
  useEffect(() => {
    ReactGA.initialize('G-0PBTF2YNYG');
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

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
