import React, { useState } from 'react';

import SearchHeader from '../../components/SearchHeader/SearchHeader';
import CheckBox from '../../components/CheckBox';

import './style.css';

const Search: React.FC = () => {
  const [isNew, setIsNew] = useState<boolean>(false);
  const [isUsed, setIsUsed] = useState<boolean>(false);

  return (
    <div className="search-page">
      <SearchHeader />
      <div className="forms-fields-box">
        <div className="item new-or-used">
          <CheckBox name="Novos" value={isNew} setValue={setIsNew} />
          <CheckBox name="Usados" value={isUsed} setValue={setIsUsed} />
        </div>
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
