import Kindle from '../components/Kindle';
import * as actions from '../actions/';
import { StoreState } from '../types/index';
import { connect, Dispatch } from 'react-redux';

export function mapStateToProps({ series, filters }: StoreState) {
  return {
    series,
    filters
  };
}

export function mapDispatchToProps(dispatch: Dispatch<actions.KindleAction>) {
  return {
    readXML: (event: React.ChangeEvent<HTMLInputElement>) =>
      dispatch(actions.readXML(event)),
    updateFilter: (filters: {
      minimumVolumes: number;
      onlyNextVolumePublished: boolean;
    }) => dispatch(actions.updateFilter(filters))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Kindle);
