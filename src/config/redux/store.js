import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import promise from "redux-promise-middleware";

import appReducer from './reducer';

const logger = createLogger({})


export default store = createStore(
  appReducer,
  applyMiddleware(
    logger,
    promise
  )
)