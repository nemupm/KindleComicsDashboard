import * as constants from '../constants';
import { KindleComicSeries } from '../models/kindle';

export interface LoadKindle {
  type: constants.LOAD_KINDLE;
  series: KindleComicSeries[];
}

export interface UpdateFilter {
  type: constants.UPDATE_FILTER;
  filters: {
    minimumVolumes: number;
    onlyNextVolumePublished: boolean;
  };
}

export type KindleAction = LoadKindle | UpdateFilter;

export function loadKindle(series: KindleComicSeries[]) {
  return { type: constants.LOAD_KINDLE, series };
}

export function updateFilter(filters: {
  minimumVolumes: number;
  onlyNextVolumePublished: boolean;
}) {
  return { type: constants.UPDATE_FILTER, filters };
}
