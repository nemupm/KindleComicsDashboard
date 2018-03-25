import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { kindle } from './reducers/index';
import { StoreState } from './types/index';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const store = createStore<StoreState>(kindle, {
  series: [],
  filters: {
    minimumVolumes: 0,
    onlyNextVolumePublished: false
  }
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
