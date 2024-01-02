/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/

// App.js

import React, { useEffect } from 'react';
import { Container, Typography } from '@material-ui/core';
import { loadGoogleMapScript, initGoogleMap } from './utiles/googleMapHelper';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  },
};

function App() {
  useEffect(() => {
    loadGoogleMapScript(() => {
      initGoogleMap('YOUR_GOOGLE_MAP_API_KEY'); // Remplacez par votre clé API Google Maps
    });
  }, []);

  return (
    <Container style={styles.container}>
      <Typography variant="h3" gutterBottom>
        Ma Page de Destination
      </Typography>
      <div id="google-map" style={{ width: '80%', height: '400px', borderRadius: '8px', overflow: 'hidden', marginTop: '20px' }} />
    </Container>
  );
}

export default App;