import * as actionTypes from './actions';


let productsStr = localStorage.getItem("selectedProductsIds");
let productsArray;
if (productsStr === null || productsStr==='') {
    productsArray = [];
} else {
    productsArray = productsStr.split("; ");
}
//let productArryLength = [...new Set(productsArray)].length;

const initialState = {
    productsIdsArray: productsArray,
    showFruits: true,
    showVegetables: true,
    showJuices: true,
    showDairyProducts: true,
    showOils:true
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_NEXT_ID_TO_LOCALSTORAGE:
            const newArrayWithIdsProducts = [...state.productsIdsArray]
            const newIdStr = (action.newId).toString()
            newArrayWithIdsProducts.push(newIdStr);
            return {
                ...state,
                productsIdsArray: newArrayWithIdsProducts
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