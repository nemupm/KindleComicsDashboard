import * as React from 'react';
import './App.css';
import { KindleService, DEFAULT_XML_PATH } from './services/KindleService';
import Record from './components/Record';
import { KindleComicSeries } from './models/kindle';

const logo = require('./logo.svg');

interface Props {}

interface State {
  series: KindleComicSeries[];
}

class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { series: [] };
  }

  readFile(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files && event.target.files[0];
    if (!file) {
      return;
    }
    const reader = new FileReader();
    reader.readAsText(file);
    reader.onload = () => {
      const kindleService = new KindleService(reader.result);
      this.setState({
        series: kindleService.getKindleComicSeries()
      });
    };
  }

  render() {
    const records = [];
    for (let i = 0; i < this.state.series.length; i++) {
      records.push(<Record key={i} kindleComicSeries={this.state.series[i]} />);
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div>
          <div>Open {DEFAULT_XML_PATH}</div>
          <div>
            <input type="file" onChange={e => this.readFile(e)} />
          </div>
        </div>
        <div>{records}</div>
      </div>
    );
  }
}

export default App;
