const INITIAL_STATE={
    total:null,
    products:[]    
}

export default function CarrStore(state=INITIAL_STATE, action) {
    switch(action.type){
        case 'ADD_PRODUCTS_TO_CARR':
            return {
                ...state,
                products:[ 
                    ...state.products,
                    action.products,                    
                ]
            }

            default: 
            return state;
    }
}