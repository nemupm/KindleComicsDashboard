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
      <div className="Record">
        <div className="Record-title">{title}</div>
        <div className="Record-volumes">{numbers.length}</div>
        <div className="Record-last-publication-date">
          {formatDate(latestPublicationDate)}
        </div>
        <div className="Record-next-publication-date">
          {formatDate(nextPublicationDate)}
        </div>
      </div>
    );
  }
}

export default Record;
