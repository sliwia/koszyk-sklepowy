import * as actionTypes from './actions';

let productsStr = localStorage.getItem("selectedProductsIdsObj");
let productsArray;
if (productsStr===null || productsStr===undefined || productsStr==={}) {
    productsArray=[]
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
    showOils:true,
    showPopup:false
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
            
        default:
            console.log("not found action.type: " + action.type)
    }



    // mozna tez za pomoca zwykłych warunków:
    // if (action.type === 'ADD_PRODUCT') {
    //     return{
    //         ...state,
    //         countProducts: state.countProducts + 1
    //     };
    // }
    // case actionTypes.ADD_PRODUCT:
    //     tworzymy nowy state kopiujac stare wartosci i modyfikujac pojedyńczy
    //     const newState = Object.assign({}, state)
    //     newState.countProducts = state.countProducts +1;
    //     return newState;
    return state;
}

export default reducer;

// Jezeli uzywamy komponentow klasowych pobierajac propsy ze stora uzywamy this.props.jakisParametr