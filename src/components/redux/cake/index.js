const store = require('./store')

const cakeActions = require('./cakeSlice').cakeActions
console.log('Initial state', store.getState())

const unsubscribe = store.subscribe(()=>{
    console.log('Update state', store.getState());
})
store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.restocked(3))