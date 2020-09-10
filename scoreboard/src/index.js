import React from '../node_modules/react';
import ReactDOM from '../node_modules/react-dom';
import { Provider } from '../node_modules/react-redux';
import { createStore } from '../node_modules/redux';
import PlayerReducer from './reducers/player';
import Scoreboard from './containers/Scoreboard';

import './index.css';

const store = createStore(
  PlayerReducer
);

ReactDOM.render(
<Provider store={ store }>
    <Scoreboard />
</Provider>,
  document.getElementById('root')
);
