/* eslint-disable react/jsx-no-undef */
import React from 'react';
import { FaRegSun } from 'react-icons/fa';
import { BiMicrophone } from 'react-icons/bi';
import style from './components.module.css';

function Header() {
  return (
    <div className={style.header}>
      <h3>2022</h3>
      <p>ANY COUNTRY INFO</p>
      <div className={style.headerIcones}>
        <BiMicrophone className={style.icons} />
        <FaRegSun className={style.icons} />
      </div>
    </div>
  );
}

export default Header;
