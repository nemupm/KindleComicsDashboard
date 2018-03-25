import { KindleComicSeries } from '../models/kindle';

export interface StoreState {
  series: KindleComicSeries[];
  filters: {
    minimumVolumes: number;
    onlyNextVolumePublished: boolean;
  };
}
