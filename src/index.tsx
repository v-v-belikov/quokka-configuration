import React from 'react';
import ReactDOM from 'react-dom/client';
import { act } from 'react-dom/test-utils';
import App from '../src/components/app';
import { Provider } from 'react-redux';
import {store} from '../src/store/index';

global.IS_REACT_ACT_ENVIRONMENT = true;

act(() => {
  const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
  );
  root.render(
    // <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
    // </React.StrictMode>
  );
});
