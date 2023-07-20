import {configureStore, combineReducers} from '@reduxjs/toolkit';
import userReducers from './user.reducers'
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';


const persistConfig = {
    key: 'root',
    storage,
  };
  
  const reducer = combineReducers({
    user: userReducers,
    
  });
  
  const persistedState = persistReducer(persistConfig, reducer)
    ? persistReducer(persistConfig, reducer)
    : {};
  
  const store = configureStore({
    reducer: persistedState,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: [thunk],
  });
  
  export default store;