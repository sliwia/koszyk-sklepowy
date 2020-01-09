const initialState = {
    countProducts: 0,
    results: [1]
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_PRODUCT':
            // tworzymy nowy state kopiujac stare wartosci i modyfikujac pojedyńczy
            const newState = Object.assign({}, state)
            newState.countProducts = state.countProducts +1;
            return newState;
        case 'TEST':
            return {
                ...state,
                countProducts: state.countProducts + 1
            }
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