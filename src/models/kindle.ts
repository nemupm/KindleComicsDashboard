export interface KindleComic {
  id: number;
  title: string;
  author: string;
  publicationDate: Date;
}

export interface KindleComicSeries {
  title: string;
  titleLeft: string;
  titleRight: string;
  author: string;
  comics: KindleComic[];
  publicationIntervalDays: number;
  numbers: string[];
  latestPublicationDate: Date;
  nextPublicationDate: Date;
}
