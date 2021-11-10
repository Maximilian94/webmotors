import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../images/webmotors.svg';

const Header: React.FC = () => {
  return (
    <header>
      <Link to="/">
        <img src={Logo} alt="logo" />
      </Link>
    </header>
  );
};

export default Header;
