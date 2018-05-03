import Table from '../components/Table';
import { StoreState } from '../types/index';
import { connect } from 'react-redux';
import { KindleComicSeries } from '../models/kindle';

const getVisibleSeries = (
  kindleComicSeries: KindleComicSeries[],
  filters: {
    minimumVolumes: number;
    onlyNextVolumePublished: boolean;
  }
): KindleComicSeries[] => {
  const now = new Date(Date.now());
  return kindleComicSeries
    .filter(series => {
      return series.numbers.length >= filters.minimumVolumes;
    })
    .filter(series => {
      return (
        !filters.onlyNextVolumePublished || series.nextPublicationDate <= now
      );
    });
};

export function mapStateToProps(state: StoreState) {
  return {
    series: getVisibleSeries(state.series, state.filters)
  };
}

export default connect(mapStateToProps)(Table);
