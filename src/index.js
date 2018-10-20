import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider} from 'react-redux';
import { createStore } from 'redux';

import manageContactReducer from './store/reducers/manageContactReducer';

import './index.css';

const store = createStore(manageContactReducer)

ReactDOM.render(<Provider store={store} ><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
