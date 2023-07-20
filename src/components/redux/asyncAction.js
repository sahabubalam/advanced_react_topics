const redux = require('redux')
const thunkMiddleware = require('redux-thunk').default
const axios = require('axios')
const createStore = redux.createStore

const applyMiddleware = redux.applyMiddleware

const initialState = {
    loading:false,
    users: [],
    error: '',
}

const FETCH_USERS_REQUESTED = 'FETCH_USERS_REQUESTED';
const FETCH_USERS_SUCCESSED = 'FETCH_USERS_SUCCESSED';
const FETCH_USERS_FAILED = 'FETCH_USERS_FAILED';

const fecthUsersRequest = () =>{
    return {
        type:FETCH_USERS_REQUESTED
    }
}
const fecthUsersSuccessed = (users) =>{
    return {
        type:FETCH_USERS_SUCCESSED,
        payload: users
    }
}
const fecthUsersFailed = (users) =>{
    return {
        type:FETCH_USERS_FAILED,
        payload: users
    }
}

const reducer = (state = initialState, action)=>{
        switch(action.type){
            case FETCH_USERS_REQUESTED:
                return {
                    ...state,
                    loading: true,
                }
            case FETCH_USERS_SUCCESSED:
                return {
                    loading: false,
                    users: action.payload,
                    error: ''
                }
            case FETCH_USERS_FAILED:
                return {
                    loading: false,
                    users: [],
                    error: action.payload
                }
            default: {
                return state
            }
        } 
}

const fetchUsers = () =>{
    return function(dispatch){
        dispatch(fecthUsersRequest())
        axios.get('https://jsonplaceholder.typicode.com/users').then((response)=>{
            const users = response.data.map((user)=>user.id)
            dispatch(fecthUsersSuccessed(users))
        }).catch((error)=>{
            dispatch(fecthUsersFailed(error.message))
        })

    }
}
const store = createStore(reducer,applyMiddleware(thunkMiddleware))

store.subscribe(()=>{
    console.log(store.getState())
})
store.dispatch(fetchUsers());


