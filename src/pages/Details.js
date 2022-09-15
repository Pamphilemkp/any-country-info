import { Link, useLocation } from 'react-router-dom';
import { FaArrowCircleLeft } from 'react-icons/fa';
import Header from '../components/Header';
import style from '../components/components.module.css';

function Details() {
  const response = useLocation();
  console.log(response.state.value);
  return (
    <div>
      <Header />
      <Link to="/"><FaArrowCircleLeft className={style.icons} /></Link>
    </div>
  );
}
export default Details;
