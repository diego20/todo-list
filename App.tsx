import * as React from 'react';
import './style.css';

export default function App() {
  const planes = [
    'Ir de parapente',
    'Aprender a programar',
    'Cocinar sopa de tomate',
    'Intentar ver algunos episodios de Betty la fea',
    'Caminata ecológica',
    'Sesión de mascarillas',
  ];
  return (
    <div>
      <h1>Planeador de planes</h1>
      <div className="contenedor">
        {planes.map((plan, index) => (
          <CheckItem nombre={plan} id={index} key={index} />
        ))}
      </div>
    </div>
  );
}

const CheckItem = ({ nombre, id }) => {
  const [isChecked, setIsChecked] = React.useState(false);
  return (
    <div className={`parent ${isChecked && "effect"} `}>
      <input
        value={nombre}
        id={id}
        type={'checkbox'}
        onClick={() => setIsChecked(!isChecked)}
      />
      <label className={isChecked && 'tachado'} htmlFor={id}>
        {nombre}
      </label>
    </div>
  );
};
