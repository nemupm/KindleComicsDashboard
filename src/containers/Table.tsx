import Table from '../components/Table';
import { StoreState } from '../types/index';
import { connect } from 'react-redux';
import { KindleComicSeries } from '../models/kindle';

const getVisibleSeries = (
  kindleComicSeries: KindleComicSeries[],
  minimumVolume: number,
  onlyNextVolumePublished: boolean
): KindleComicSeries[] => {
  const now = new Date(Date.now());
  return kindleComicSeries
    .filter(series => {
      return series.numbers.length >= minimumVolume;
    })
    .filter(series => {
      return !onlyNextVolumePublished || series.nextPublicationDate <= now;
    });
};

export function mapStateToProps(state: StoreState) {
  const values = state.form.kindleForm.values || {};
  return {
    series: getVisibleSeries(
      state.kindle.series,
      Number(values.minimumVolume),
      values.onlyNextVolumePublished.toString() === 'true'
    )
  };
}

export default connect(mapStateToProps)(Table);
