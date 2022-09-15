import { configureStore, combineReducers } from '@reduxjs/toolkit';
import countryReducer from './Store/Store';

const rootReducer = combineReducers({
  countryReducer,
});

const store = configureStore({ reducer: rootReducer });
export default store;
