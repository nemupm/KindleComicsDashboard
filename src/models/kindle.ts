export interface KindleComic {
  id: number;
  title: string;
  author: string;
  publicationDate: Date;
}

export interface KindleComicSeries {
  titleLeft: string;
  titleRight: string;
  author: string;
  comics: KindleComic[];
  publicationIntervalDays: number;
}
