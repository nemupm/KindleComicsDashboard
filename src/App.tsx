import * as React from 'react';
import './App.css';
import { KindleService } from './services/KindleService';
import Record from './components/Record';

const logo = require('./logo.svg');

class App extends React.Component {
  render() {
    let kindleService = new KindleService();
    const series = kindleService.getKindleComicSeries();

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Record kindleComicSeries={series[0]} />
        <Record kindleComicSeries={series[1]} />
        <Record kindleComicSeries={series[2]} />
      </div>
    );
  }
}

export default App;
