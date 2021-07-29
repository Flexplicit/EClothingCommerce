import { createStore, applyMiddleware, Middleware, Store, AnyAction, EmptyObject } from 'redux'
import logger from 'redux-logger'
import { persistStore } from 'redux-persist'
import { Persistor } from 'redux-persist/es/types'
import rootReducer from './root-reducer'

const middlewares: Middleware[] = [] // here we can add more middlewares in the future

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger)
}

export const store: Store= createStore(rootReducer, applyMiddleware(...middlewares))

export const persistor: Persistor = persistStore(store)

// export default { store, persistor }
