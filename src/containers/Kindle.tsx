import Kindle from '../components/Kindle';
import * as actions from '../actions/';
import { StoreState } from '../types/index';
import { connect, Dispatch } from 'react-redux';
import { KindleComicSeries } from '../models/kindle';

export function mapStateToProps({ series, filters }: StoreState) {
  return {
    series,
    filters
  };
}

export function mapDispatchToProps(dispatch: Dispatch<actions.KindleAction>) {
  return {
    loadKindle: (series: KindleComicSeries[]) =>
      dispatch(actions.loadKindle(series)),
    updateFilter: (filters: {
      minimumVolumes: number;
      onlyNextVolumePublished: boolean;
    }) => dispatch(actions.updateFilter(filters))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Kindle);
