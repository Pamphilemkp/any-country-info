/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import { FaArrowAltCircleRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import style from './components.module.css';

function CountryDetail(props) {
  const navigation = useNavigate();
  return (
    < >
      {props.list.map((country, id) => (
        <li
          key={id}
          className={style.list}
        >
          <p className={style.flag} onClick={() => { navigation('/Details', { state: { value: country } }); }}>
            <img src={country.flags.svg} alt={country.name.common} className={style.image} />
            <FaArrowAltCircleRight className={`${style.icons} ${style.PhoneIcons}`} />
            ,
          </p>
          <h4>{country.name.official}</h4>
          <p>
            <strong> Population : </strong>
            {' '}
            {country.population}
          </p>
        </li>
      ))}
    </>
  );
}
export default CountryDetail;
