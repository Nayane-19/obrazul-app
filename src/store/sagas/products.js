import { takeLatest, all, call, put } from 'redux-saga/effects';
import {AddList} from '../actions'
import Api from '../../api'

 export function* List(){
     try {

         const {data} = yield call(Api.get, 'recruitment/products/')
        //  yield put(AddList(data))
          yield put({ type: 'SUCCESS_PRODUCTS_TO_LIST', payload: (AddList(data)) });
        
     } catch (err) {
        // yield put({ type: 'FAILURE_PRODUCTS_TO_LIST' });
     }finally {

     }

}



export default  all([
    takeLatest('FETCH_PRODUCTS',List),

])