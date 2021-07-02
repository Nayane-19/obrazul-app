import {applyMiddleware, createStore} from 'redux';
import rootReducer from './reducer'
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware();
const middleware=[sagaMiddleware]


const Store = createStore(rootReducer,applyMiddleware(...middleware));
sagaMiddleware.run(rootSaga)

export default Store;