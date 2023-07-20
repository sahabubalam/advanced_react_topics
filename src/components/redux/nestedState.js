
const redux = require('redux')
const createStore = redux.createStore

const initialState = {
    name: 'sahabub',
    address: {
        street: '123 main st',
        city: 'rajshahi',
        state: 'MA'
    }
}

const STREET_UPDATED = 'STREET_UPDATED';

const updateStreet = (street) =>{
    return {
        type: STREET_UPDATED,
        payload: street,
    }
}

const reducer = (state = initialState, action)=>{
    switch(action.type){
        case STREET_UPDATED:
            return {
                ...state,
                address:{
                    ...state.address,
                    street: action.payload
                }
            }
            default: {
                return state
            }
    }
}

const store = redux.createStore(reducer)

console.log('Initial state',store.getState());

const unsubscribe = store.subscribe(()=>{
    console.log("Updated state", store.getState())
})
store.dispatch(updateStreet('4536 Main st'))


