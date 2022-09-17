/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import CountryDetail from './CountryDetail';
import style from './components.module.css';

function CountriesList(props) {
  return (
    <ul className={style.container}>
      <CountryDetail list={props.list} />
    </ul>
  );
}

export default CountriesList;
