import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { routerReducer } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';
import reduxReset from 'redux-reset';

import MenuAppBar from './containers/navigation/MenuAppBar';
import Notification from './containers/notifications';

import AppRoutes from './routes';
import createReducers from './reducers';
import rootSaga from './sagas';

const composeEnhancers =
  process.env.NODE_ENV === 'development'
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null || compose;

const reducers = createReducers(routerReducer);
const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducers, composeEnhancers(applyMiddleware(sagaMiddleware), reduxReset()),
);

// const store = createStore(reducers, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);


const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <MenuAppBar />
        <Notification />
        <AppRoutes />
      </div>
    </BrowserRouter>
  </Provider>
);


export default App;
