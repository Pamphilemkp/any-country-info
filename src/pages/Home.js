/* eslint-disable max-len */
/* eslint-disable jsx-a11y/label-has-associated-control */

import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FaSistrix } from 'react-icons/fa';
import { countryInfo } from '../Redux/Store/Store';
import CountriesList from '../components/CountriesList';
import Header from '../components/Header';
import style from '../components/components.module.css';

function Home() {
  const Countries = useSelector((state) => state.countryReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    if (Countries.length === 0) { dispatch(countryInfo()); }
  }, [Countries.length, dispatch]);

  const [countryName, setCountry] = useState('');

  const searchHandle = (event) => {
    setCountry(event.target.value);
  };
  const filteredCountry = Countries.filter((country) => country.name.official.toLowerCase().includes(countryName.toLowerCase()));
  return (
    <div className="container">
      <Header />
      <div className={style.searchContainer}>
        <input type="text" className={style.searchInput} name="search" placeholder="search a country" onChange={(e) => searchHandle(e)} />
        <label htmlFor="Search"><FaSistrix className={style.mkp} /></label>
      </div>
      <CountriesList list={filteredCountry} />
    </div>
  );
}

export default Home;
