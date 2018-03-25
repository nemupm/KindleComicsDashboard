import * as React from 'react';
import './App.css';
import Kindle from './containers/Kindle';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Kindle Comics Dashboard</h1>
      </header>
      <Kindle />
    </div>
  );
}

export default App;
