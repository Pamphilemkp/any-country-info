import { createAsyncThunk } from '@reduxjs/toolkit';

const Api = 'https://restcountries.com/v3.1/all';
const COUNTRY_LIST = 'any-country-info/Store/COUNTRY_LIST';
const initialeState = [];

const countryReducer = (state = initialeState, action = {}) => {
  switch (action.type) {
    case `${COUNTRY_LIST}/fulfilled`:
      action.payload.map((item) => initialeState.push(item));
      return action.payload;

    default:
      return state;
  }
};

export const countryInfo = createAsyncThunk(COUNTRY_LIST, async () => {
  const response = await fetch(Api);
  const value = await response.json();
  return value;
});
export default countryReducer;
