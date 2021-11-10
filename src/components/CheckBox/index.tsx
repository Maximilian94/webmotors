import React from 'react';

interface CheckBoxProps {
  name: string;
  value: boolean;
  setValue: any;
}

const CheckBox: React.FC<CheckBoxProps> = ({ name, value, setValue }) => {
  return (
    <label htmlFor={name}>
      <input
        type="checkbox"
        id={name}
        name={name}
        checked={value}
        onChange={() => setValue(!value)}
        key={name}
      />
      <span>{name}</span>
    </label>
  );
};

export default CheckBox;
