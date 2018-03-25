import { KindleAction } from '../actions';
import { StoreState } from '../types/index';
import { LOAD_KINDLE, UPDATE_FILTER } from '../constants/index';

export function kindle(state: StoreState, action: KindleAction): StoreState {
  switch (action.type) {
    case LOAD_KINDLE:
      return { ...state, series: action.series };

    case UPDATE_FILTER:
      return { ...state, filters: action.filters };

    default:
      return state;
  }
}
