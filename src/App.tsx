import * as React from 'react';
import './App.css';
import { KindleService, DEFAULT_XML_PATH } from './services/KindleService';
import Table from './components/Table';
import { KindleComicSeries } from './models/kindle';
import { Card, CardHeader, CardBody, Input } from 'reactstrap';

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
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Kindle Comics Dashboard</h1>
        </header>
        <Card className="App-input">
          <CardHeader>
            Open the following file(macOS):[ {DEFAULT_XML_PATH} ]
          </CardHeader>
          <CardBody>
            <Input type="file" onChange={e => this.readFile(e)} />
          </CardBody>
        </Card>
        <Table series={this.state.series} />
      </div>
    );
  }
}

export default App;
