/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */

function CountryDetail(props) {
  return (
    <li>
      {props.list.map((country, id) => (
        <div key={id}>
          <p>
            {' '}
            <img src={country.flags.svg} alt={country.name.common} />
          </p>
          <p>{country.name.official}</p>
          <p>{country.population}</p>
        </div>
      ))}
    </li>
  );
}
export default CountryDetail;
