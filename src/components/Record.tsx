import * as React from 'react';
import './Record.css';
import { KindleComicSeries } from '../models/kindle';
import { formatDate } from '../utils/date';

interface Props {
  kindleComicSeries: KindleComicSeries;
}

class Record extends React.Component<Props> {
  render() {
    const sortedComics = this.props.kindleComicSeries.comics
      .slice()
      .sort((a, b) => {
        return a.publicationDate.getTime() - b.publicationDate.getTime();
      });

    const numbers = sortedComics.map(comic => {
      return comic.title
        .replace(this.props.kindleComicSeries.titleLeft, '')
        .replace(this.props.kindleComicSeries.titleRight, '');
    });
    const title =
      this.props.kindleComicSeries.titleLeft +
      (numbers.length > 1
        ? `${numbers[0]} ~ ${numbers[numbers.length - 1]}`
        : '') +
      this.props.kindleComicSeries.titleRight;
    const latestPublicationDate =
      sortedComics[sortedComics.length - 1].publicationDate;
    const nextPublicationDate = new Date(latestPublicationDate.getTime());
    nextPublicationDate.setDate(
      latestPublicationDate.getDate() +
        this.props.kindleComicSeries.publicationIntervalDays
    );

    return (
      <tr className="Record">
        <td className="Record-title">{title}</td>
        <td className="Record-volumes">{numbers.length}</td>
        <td className="Record-last-publication-date">
          {formatDate(latestPublicationDate)}
        </td>
        <td className="Record-next-publication-date">
          {formatDate(nextPublicationDate)}
        </td>
      </tr>
    );
  }
}

export default Record;
