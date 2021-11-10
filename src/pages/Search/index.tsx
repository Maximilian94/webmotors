import React from 'react';

import SearchHeader from '../../components/SearchHeader/SearchHeader';

import './style.css';

const Search: React.FC = () => {
  return (
    <div className="search-page">
      <SearchHeader />
      <div className="forms-fields-box">
        <div className="item new-or-used">NewOrUsed</div>
        <div className="item location">Location</div>
        <div className="item brand">Marca</div>
        <div className="item model">Modelos</div>
        <div className="item year">Ano desejado</div>
        <div className="item price">Faixa de preço</div>
        <div className="item version">Versão</div>
      </div>
    </div>
  );
};

export default Search;
