import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { countryInfo } from '../Redux/Store/Store';
import CountriesList from '../components/CountriesList';

function Home() {
  const Countries = useSelector((state) => state.countryReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(countryInfo());
  }, [dispatch]);

  return (
    <div>
      <Link to="/Details">Details</Link>
      <CountriesList list={Countries} />
    </div>
  );
}

export default Home;
