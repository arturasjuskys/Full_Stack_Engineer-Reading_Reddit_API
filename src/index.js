import React from 'react';
import ReactDOM from 'react-dom';
import App from './new/App';
import { store } from './new/store';
import { Provider } from 'react-redux';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
