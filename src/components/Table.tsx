import * as React from 'react';
import './Table.css';
import { KindleComicSeries } from '../models/kindle';
import Record from './Record';

interface Props {
  series: KindleComicSeries[];
}

class Table extends React.Component<Props> {
  render() {
    const records = [];
    for (let i = 0; i < this.props.series.length; i++) {
      records.push(<Record key={i} kindleComicSeries={this.props.series[i]} />);
    }
    return (
      <table className="Table table table-hover">
        <thead>
          <tr>
            <th>タイトル</th>
            <th>巻数</th>
            <th>最新刊発売日</th>
            <th>次刊発売予想日</th>
          </tr>
        </thead>
        <tbody>{records}</tbody>
      </table>
    );
  }
}

export default Table;
