import React, { useState } from 'react';

import carIcon from '../../images/car-4757.svg';

import './style.css';

const SearchHeader: React.FC = () => {
  const [type, setType] = useState('carros');

  const handleChange = (name: string) => {
    setType(name);
  };

  const options = [
    { imageUrl: carIcon, name: 'carros' },
    { imageUrl: carIcon, name: 'motos' },
  ];

  const typeOption = (imageUrl: string, name: string) => {
    return (
      <label
        htmlFor={name}
        className={`car-type-button-option ${type === name ? 'checked' : null}`}
        key={name}
      >
        <input
          type="radio"
          id={name}
          className="teste"
          checked={type === name}
          onChange={() => handleChange(name)}
        />
        <img src={imageUrl} alt={name} />
        <div className="car-type-button-option-details" key={name}>
          <span>Comprar</span>
          <span>{name}</span>
        </div>
      </label>
    );
  };

  return (
    <div className="car-type-button-options">
      {options.map(({ imageUrl, name }) => typeOption(imageUrl, name))}
    </div>
  );
};

export default SearchHeader;
