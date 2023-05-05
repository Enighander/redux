import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../app/Features/Counter/reducer';

const rootReducer = combineReducers({
    counter: counterReducer
});

const store = configureStore({
    reducer: rootReducer
});

export default store;
