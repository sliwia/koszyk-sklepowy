import axios from 'axios';
import * as actionTypes from './actions';

export const setAllProducts = ( products ) => {
    console.log('setAllProducts', products);
    return {
        type: actionTypes.GET_ALL_PRODUCTS,
        products: products
    };
};

export const fetchProductsFailed = () => {
    console.log('error ')
    // return {
    //     type: actionTypes.FETCH_INGREDIENTS_FAILED
    // };
};

export const getAllProducts = () => {
    return dispatch => {
        axios.get( 'http://46.41.138.226:5000/product' )
            .then( response => {
                console.log(response.data)
               dispatch(setAllProducts(response.data));
            } )
            .catch( error => {
                dispatch(fetchProductsFailed());
            } );
    };
};