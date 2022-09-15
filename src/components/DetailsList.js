/* eslint-disable react/jsx-key */
/* eslint-disable array-callback-return */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
// import style from './components.module.css';

function DetailsList(props) {
    console.log(props.country)
  return (
    <div>
      {/* {props.country.map((info) => {
        <div>

          <div>
            <p>{info.name.official}</p>
            <img src={info.flags.svg} alt={info.name.common} className={style.image} />
          </div>
          {/* <div>
            <p>
              Common name :
              {info.name.common}
            </p>
            <p>
              Capital :
              {info.capital[0]}
            </p>
            <p>
              Population :
              {info.population}
            </p>
            <p>
              Languages :
              {Object.values(info.languages).map((_value) => <span>{_value}</span>)}
            </p>
            <p>
              Currencies :
              {Object.values(info.currencies).map((_value) => <span>{_value}</span>)}
            </p>
            <p>
              Continent :
              {info.continents}
            </p>
            <p>
              Subregion :
              {info.subregion}
            </p>
            <p>
              Start of the week:
              {info.startOfWeek}
            </p>
          </div>
      })} */}
    </div> 
  );
}
export default DetailsList;
