import { Link, useLocation } from 'react-router-dom';
import { FaArrowCircleLeft } from 'react-icons/fa';
import Header from '../components/Header';
import style from '../components/components.module.css';
import Detailslist from '../components/DetailsList';

function Details() {
  const response = useLocation();
  const data = response.state.value;
  return (
    <div className="container">
      <Header />
      <Link to="/" className="back"><FaArrowCircleLeft className={style.icons} /></Link>
      <Detailslist country={data} />
    </div>
  );
}
export default Details;
