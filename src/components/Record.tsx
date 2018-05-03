import * as React from 'react';
import './Record.css';
import { KindleComicSeries } from '../models/kindle';
import { formatDate } from '../utils/date';

interface Props {
  kindleComicSeries: KindleComicSeries;
}

class Record extends React.Component<Props> {
  render() {
    return (
      <tr className="Record">
        <td className="Record-title">{this.props.kindleComicSeries}</td>
        <td className="Record-volumes">
          {this.props.kindleComicSeries.numbers.length}
        </td>
        <td className="Record-last-publication-date">
          {formatDate(this.props.kindleComicSeries.latestPublicationDate)}
        </td>
        <td className="Record-next-publication-date">
          {formatDate(this.props.kindleComicSeries.nextPublicationDate)}
        </td>
      </tr>
    );
  }
}

export default Record;
