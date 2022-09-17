/* eslint-disable react/prop-types */
import style from './components.module.css';

function DetailsList({ country }) {
  return (
    <div className="detail-container">
      <div className="detail-flag">
        <img src={country.flags.svg} alt={country.name.common} className={style.image} />
        <p>{country.name.official}</p>
      </div>
      <div className="space-global">
        <div className="space-elements">
          <p>Common name :</p>
          <p>{country.name.common}</p>
        </div>
        <div className="space-elements">
          <p>Capital :</p>
          <p>{country.capital[0]}</p>
        </div>
        <div className="space-elements">
          <p>Population :</p>
          <p>{country.population}</p>
        </div>
        <div className="space-elements">
          <p>
            Languages:
            {' '}
            {' '}
          </p>
          <p>
            {Object.values(country.languages).map((value) => (
              <span key={value}>
                {'  '}
                {value}
                {' ,  '}
              </span>
            ))}

          </p>
        </div>
        <div className="space-elements">
          <p>Currencies:</p>
          <p>
            {Object.keys(country.currencies).map((value) => (
              <span key={value}>
                {'   '}
                {value}
                {' '}
              </span>
            ))}

          </p>
        </div>
        <div className="space-elements">
          <p>Continent :</p>
          <p>{country.continents}</p>
        </div>
        <div className="space-elements">
          <p>Subregion :</p>
          {'   '}
          <p>{country.subregion}</p>
        </div>
        <div className="space-elements">
          <p>Time Zone:</p>
          <p>{country.timezones[0]}</p>
        </div>
        <div className="space-elements">
          <p>Start of the week:</p>
          <p>{country.startOfWeek}</p>
        </div>
      </div>
    </div>
  );
}

export default DetailsList;
