import React from 'react';
import './App.css';
import Aside from '../features/aside/Aside';
import Main from './Main';

function App () {
  return (
    <div className="App">
      <div className="App-main">
        <Aside />
        <Main />
      </div>
    </div>
  );
};

export default App;
