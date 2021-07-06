export const requestHTTP=() => ({
    type:'FETCH_PRODUCTS',
})

export function AddList(products) {
    return{
        type:'ADD_PRODUCTS_TO_LIST',
        products:products
    };
}

export function searchList(products) {
    return{
        type:'PESQUISA_PRODUCTS_TO_LIST',
        products
    };
}