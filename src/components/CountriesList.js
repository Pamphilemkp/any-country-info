/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import CountryDetail from './CountryDetail';

function CountriesList(props) {
  return (
    <ul>
      <CountryDetail list={props.list} />
    </ul>
  );
}

export default CountriesList;
