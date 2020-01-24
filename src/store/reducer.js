import * as actionTypes from './actions';

let productsStr = localStorage.getItem("selectedProductsIdsObj");
console.log(localStorage.getItem("selectedProductsIdsObj"));
let productsArray;
if (productsStr===null || productsStr===undefined || productsStr==='') {
    productsArray=[];
    localStorage.setItem('selectedProductsIdsObj', '{}');
} else {
    let productsObject = JSON.parse(productsStr);
    productsArray = Object.keys(productsObject);
}

const initialState = {
    productsIdsArray: productsArray,
    showFruits: true,
    showVegetables: true,
    showJuices: true,
    showDairyProducts: true,
    showOils: true,
    showPopup: false,
    getAllProducts: [],
    showEditProductModal: false,
    isEditProduct: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_NEXT_ID_TO_LOCALSTORAGE:
            const newArrayWithIdsProducts = [...state.productsIdsArray]
            const newIdStr = (action.newId).toString()
            newArrayWithIdsProducts.push(newIdStr);
            const setWithProducts = [...new Set(newArrayWithIdsProducts)];
            return {
                ...state,
                productsIdsArray: setWithProducts
            }
        case actionTypes.DEL_ID_ELEMENT:
            return {
                ...state,
                productsIdsArray: action.prodsIdsArray
            }
        case actionTypes.SHOW_FRUITS:
            return {
                ...state,
                showFruits: action.showFruits
            }
        case actionTypes.SHOW_VEGETABLES:
            return {
                ...state,
                showVegetables: action.showVegetables
            }
        case actionTypes.SHOW_JUICES:
            return {
                ...state,
                showJuices: action.showJuices
            }
        case actionTypes.SHOW_DAIRY_PRODUCTS:
            return {
                ...state,
                showDairyProducts: action.showDairyProducts
            }
        case actionTypes.SHOW_OILS:
            return {
                ...state,
                showOils: action.showOils
            }
        case actionTypes.SHOW_SHOPPING_BASKET_POPUP:
            return {
                ...state,
                showPopup: action.showBasket
            }
        case actionTypes.GET_ALL_PRODUCTS:
            return {
                ...state,
                getAllProducts: action.getAllProducts
            }
        case actionTypes.POST_SINGLE_PRODUCT:
            let tempNewProductListPost = state.getAllProducts;
            tempNewProductListPost.push(action.newObj)
            return {
                ...state,
                getAllProducts: tempNewProductListPost
            }
        case actionTypes.PUT_SINGLE_PRODUCT:
            return {
                ...state,
            }
        case actionTypes.DEL_SINGLE_PRODUCT:
            let tempProductListDel = state.getAllProducts;
            let tempNewProductListDel = tempProductListDel.filter( element => {
                return element.id !==action.idPr
            })
            return {
                ...state,
                getAllProducts: tempNewProductListDel
            }
        case actionTypes.SHOW_EDIT_PRODUCT_MODAL:
                return {
                    ...state,
                    showEditProductModal: !state.showEditProductModal
                }
        case actionTypes.IS_EDIT_PRODUCT:
            return {
                ...state,
                isEditProduct: !state.isEditProduct
            }
            
        default:
            console.log("not found action.type: " + action.type)
    }
    return state;
}

export default reducer;

// Jezeli uzywamy komponentow klasowych pobierajac propsy ze stora uzywamy this.props.jakisParametr