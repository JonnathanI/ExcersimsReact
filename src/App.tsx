import React from 'react';

const colorCode = (color: string) => {
  return COLORS.indexOf(color);
};

const COLORS = [
  'black',
  'brown',
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'violet',
  'grey',
  'white',
];

const ColorCodeComponent: React.FC = () => {
  // Puedes usar la función colorCode aquí
  return (
    <div>
      <h1>Colores</h1>
      <ul>
        {COLORS.map((color, index) => (
          <li key={index}>{color}</li>
        ))}
      </ul>
    </div>
  );
};

export default ColorCodeComponent;
