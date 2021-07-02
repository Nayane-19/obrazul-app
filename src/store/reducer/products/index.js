const INITIAL_STATE={
    loading:false,
    error:false,
    products:[]    
}

export default function Products(state=INITIAL_STATE, action) {
    switch(action.type){
        case 'ADD_PRODUCTS_TO_LIST':
            return {
                ...state,
                products: action.products
            }

            default: 
            return state;
    }
}