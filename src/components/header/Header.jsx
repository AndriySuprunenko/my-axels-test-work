import React from 'react';

import style from './header.module.css';

import Logo from '../../assets/images/redux-logo.png';

const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.container}>
        {/* Logo */}
        <div className={style.logo}>
          <img src={Logo} alt='Logo' />
        </div>
      </div>
    </header>
  );
};

export default Header;
