let productsStr = localStorage.getItem("selectedProductsIds");
let productsArray;
if (productsStr === null || productsStr==='') {
    productsArray = [];
} else {
    productsArray = productsStr.split("; ");
}
let productArryLength = [...new Set(productsArray)].length;

const initialState = {
    countProducts: 0,
    tempCounterProduct: productArryLength
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_PRODUCT':
            // tworzymy nowy state kopiujac stare wartosci i modyfikujac pojedyńczy
            const newState = Object.assign({}, state)
            newState.countProducts = state.countProducts +1;
            return newState;
        case 'ADD_NEXT_PRODUCT':
            const newStateTempProduct = Object.assign({}, state)
            newStateTempProduct.tempCounterProduct = state.tempCounterProduct +1;
            return newStateTempProduct;
        default:
            console.log("not found action.type: "+ action.type)
    }



    // mozna tez za pomoca zwykłych warunków:
    // if (action.type === 'ADD_PRODUCT') {
    //     return{
    //         ...state,
    //         countProducts: state.countProducts + 1
    //     };
    // }
    return state;
}

export default reducer;

// Jezeli uzywamy komponentow klasowych pobierajac propsy ze stora uzywamy this.props.jakisParametr