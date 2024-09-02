import { applyMiddleware, createStore } from 'redux';
import { combineReducers } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import weatherReducer from './reducers/weatherReducer';
import { stockReducer } from './reducers/stockReducer';
import { rootEpic } from './epics/epics';

const rootReducer = combineReducers({
  weather: weatherReducer,
  stocks: stockReducer,
});

const epicMiddleware = createEpicMiddleware();

export const store = createStore(
  rootReducer,
  applyMiddleware(epicMiddleware)
);

epicMiddleware.run(rootEpic);

export type RootState = ReturnType<typeof rootReducer>;
export default store;