/* eslint-disable max-len */
/* eslint-disable react/jsx-key */
/* eslint-disable array-callback-return */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import style from './components.module.css';

function DetailsList(props) {
  return (
    <div>
      <div>
        <p>{props.country.name.official}</p>
        <img src={props.country.flags.svg} alt={props.country.name.common} className={style.image} />
      </div>
      <div>
        <p>
          Common name :
          {'   '}
          {props.country.name.common}
        </p>
        <p>
          Capital :
          {'   '}
          {props.country.capital[0]}
        </p>
        <p>
          Population :
          {'   '}
          {props.country.population}
        </p>
        <p>
          Languages :
          {Object.values(props.country.languages).map((value) => (
            <span key={value}>
              {'   '}
              {value}
              {' ,   '}
            </span>
          ))}
        </p>
        <p>
          Currencies :
          {Object.keys(props.country.currencies).map((value) => (
            <span key={value}>
              {'   '}
              {value}
              {' '}
            </span>
          ))}
        </p>
        <p>
          Continent :
          {'   '}
          {props.country.continents}
        </p>
        <p>
          Subregion :
          {'   '}
          {props.country.subregion}
        </p>
        <p>
          Start of the week:
          {'   '}
          {props.country.startOfWeek}
        </p>
      </div>
    </div>
  );
}
export default DetailsList;
