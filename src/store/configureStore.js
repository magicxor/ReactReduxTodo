﻿import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import * as TaskList from './taskList/reducer';

export function configureStore(history, initialState) {
  const reducers = {
    taskList: TaskList.reducer
  };

  const middleware = [
    thunk,
    routerMiddleware(history)
  ];

  // In development, use the browser's Redux dev tools extension if installed
  const enhancers = [];
  const isDevelopment = process.env.NODE_ENV === 'development';
  if (isDevelopment && typeof window !== 'undefined' && window.devToolsExtension) {
    enhancers.push(window.devToolsExtension());
  }

  const rootReducer = combineReducers({
    router: connectRouter(history),
    ...reducers
  });

  return createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(...middleware), ...enhancers)
  );
}
