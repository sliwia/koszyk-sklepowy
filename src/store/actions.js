import axios from 'axios';

export const ADD_NEXT_ID_TO_LOCALSTORAGE = 'ADD_NEXT_ID_TO_LOCALSTORAGE';
export const SHOW_FRUITS = 'SHOW_FRUITS';
export const SHOW_VEGETABLES = 'SHOW_VEGETABLES';
export const SHOW_JUICES = 'SHOW_JUICES';
export const SHOW_DAIRY_PRODUCTS = 'SHOW_DAIRY_PRODUCTS';
export const SHOW_OILS = 'SHOW_OILS';
export const SHOW_SHOPPING_BASKET_POPUP = 'SHOW_SHOPPING_BASKET_POPUP';
export const DEL_ID_ELEMENT = 'DEL_ID_ELEMENT';
export const GET_ALL_PRODUCTS = 'GET_ALL_PRODUCTS';
export const GET_SINGLE_PRODUCT = 'GET_SINGLE_PRODUCT';
export const POST_SINGLE_PRODUCT = 'POST_SINGLE_PRODUCT';
export const PUT_SINGLE_PRODUCT = 'PUT_SINGLE_PRODUCT';
export const DEL_SINGLE_PRODUCT = 'DEL_SINGLE_PRODUCT';
export const SHOW_EDIT_PRODUCT_MODAL = 'SHOW_EDIT_PRODUCT_MODAL';

export const setProducts = ( action, products ) => {
    return {
        type: action,
        getAllProducts: products
    };
};

export const fetchProductsFailed = () => {
    return {
        type: GET_ALL_PRODUCTS
    };
};

export const initProducts = () => {
    return dispatch => {
        axios.get( 'http://46.41.138.226:5000/product' )
            .then( response => {
                dispatch(setProducts(GET_ALL_PRODUCTS,response.data));
            } )
            .catch( error => {
                dispatch(fetchProductsFailed());
            } );
    };
};

export const addNewProduct = (newProductObj) => {
   axios.post( 'http://46.41.138.226:5000/product',newProductObj);
    // axios({
    //     method: 'post',
    //     url: 'http://46.41.138.226:5000/product',
    //     headers: {},
    //     data: JSON.stringify(newProductObj)
    // });
      
    //axios.post('http://46.41.138.226:5000/product', newProductObj,{headers: {'Accept': 'application/json'}})
    

    return {
        type: POST_SINGLE_PRODUCT,
        newObj: newProductObj
    };
};

export const delProduct = (idProduct) => {
    axios.delete( 'http://46.41.138.226:5000/product/' + idProduct );
    return {
        type: DEL_SINGLE_PRODUCT,
        idPr: idProduct
    };
};
    
