import { KindleAction } from '../actions';
import { KindleState } from '../types/index';
import { LOAD_KINDLE } from '../constants/index';

const initialKindleState = {
  series: []
};

export function kindle(
  state: KindleState = initialKindleState,
  action: KindleAction
): KindleState {
  switch (action.type) {
    case LOAD_KINDLE:
      return { ...state, series: action.series };
    default:
      return state;
  }
}
