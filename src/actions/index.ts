import * as constants from '../constants';
import { KindleComicSeries } from '../models/kindle';
import { KindleService } from '../services/KindleService';
import { Dispatch } from 'react-redux';

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

export function readXML(event: React.ChangeEvent<HTMLInputElement>) {
  return (dispatch: Dispatch<KindleAction>) => {
    const file = event.target.files && event.target.files[0];
    if (!file) {
      return;
    }
    const reader = new FileReader();
    reader.readAsText(file);
    reader.onload = () => {
      const kindleService = new KindleService(reader.result);
      dispatch(loadKindle(kindleService.getKindleComicSeries()));
    };
  };
}
