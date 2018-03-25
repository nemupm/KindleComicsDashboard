export interface KindleComic {
  id: number;
  title: string;
  author: string;
  publication_date: Date;
}

export interface KindleComicSeries {
  titleLeft: string;
  titleRight: string;
  author: string;
  comics: KindleComic[];
  publication_interval_days: number;
}
