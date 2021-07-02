import {combineReducers} from 'redux';
import Products from './products';
import CarrStore from './carrStore';

export default combineReducers({
    products:Products,
    carrStore:CarrStore
})
