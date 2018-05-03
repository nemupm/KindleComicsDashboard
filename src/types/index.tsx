import { KindleComicSeries } from '../models/kindle';
import { FormState } from 'redux-form';

export interface StoreState {
  kindle: KindleState;
  form: {
    kindleForm: FormState;
  };
}

export interface KindleState {
  series: KindleComicSeries[];
}
