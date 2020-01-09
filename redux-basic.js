const redux = require('redux');
// tworzymy store za pomoca reduxa - store przechowuja stany komponentów
const createStore = redux.createStore;

// pierwsszy pojemnik na stany, zapisujemy tak samo jak w state'ach komponentów - nazwa_stanu:wartość
const initialState = {
    test:'111',
    countProducts: 0,
}

// Reducer
// reducer obsługuje wysyłane akcje i ich wartości (z dispatch). Sprawdza jaka akcja została wysłana następnie wykonuje polecenia dla wybranych stanów i zwraca nowy zmodyfikowany pojemnik ze stanami komponentow 
const rootReducer = (state = initialState, action) => {
    if (action.type === 'SUM_PRODUCT') {
        return {
            ...state, //jeeli chcemy zachowac wszystkie inne wartosci w storze oprócz modyfikacji wybranego, reszte przepisujemy
            countProducts: state.countProducts + action.value
        };
    }
    if (action.type === 'ADD') {
        return {
            ...state,
            countProducts: state.countProducts + action.value
        };
    }
    return state;
};

// Store
// tworzenie storów i przekazanie reducera - mechanizmu do obsługi akcji i wykonania zadan na stanach
const store = createStore(rootReducer);
console.log('create store: ',store.getState());

// Subscription
// opis akcji które się wydarza za pomoca reducera
store.subscribe(() => {
    console.log('[Subscription]', store.getState()); 
});

// Dispatching Action
// aykonanie akcji dla stanów, zdefiniowanie jaka akcja, jakie przekazuje parametry
store.dispatch({type: 'SUM_PRODUCT',value: 50});
store.dispatch({type: 'ADD', value: 30});


console.log('after dispatch: ',store.getState());
