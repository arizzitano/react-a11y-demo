import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

import Home from './components/Home';
import './App.scss';

const App = () => (
  <Home />
);

ReactDOM.render(<App />, document.getElementById('root'));
