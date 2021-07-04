import {defineState} from 'redux-localstore'

const INITIAL_STATE={
    loading:false,
    error:false,
    products:[]    
}
const initialState = defineState(INITIAL_STATE)('Reducer1')

export default function Products(state=initialState, action) {
    switch(action.type){
        case 'ADD_PRODUCTS_TO_LIST':
            return {
                ...state,
                loading:true
            }
            case 'SUCCESS_PRODUCTS_TO_LIST':
            return { 
                products: action.payload.products,
                loading: false, 
                error: false 
            };
            case 'FAILURE_PRODUCTS_TO_LIST':
            return { 
                products:[],
                loading: false, 
                error: true 
            };
          

            default: 
            return state;
    }
}