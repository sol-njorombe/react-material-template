import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { routerReducer } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';

import MenuAppBar from './containers/navigation/MenuAppBar';

import AppRoutes from './routes';
import createReducers from './reducers';
import rootSaga from './sagas';

// import './assets/css/bootstrap.min.css';
// import './assets/css/mdb.min.css';

const reducers = createReducers(routerReducer);
const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducers, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
          <MenuAppBar/>
          <AppRoutes/>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
