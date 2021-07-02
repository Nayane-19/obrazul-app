import { takeLatest, all, call, put } from 'redux-saga/effects';
import {AddList} from '../actions'
import Api from '../../api'

 export function* List(){
     try {

         const {data} = yield call(Api.get, 'recruitment/products/')
         yield put(AddList(data))
     } catch (error) {
         
     }finally {

     }

}

export default all([
    takeLatest('FETCH_PRODUCTS',List),

])