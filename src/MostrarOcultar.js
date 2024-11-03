// src/MostrarOcultar.js
import React, { useState } from 'react';

const MostrarOcultar = () => {
  const [visivel, setVisivel] = useState(false);

  const alternarVisibilidade = () => {
    setVisivel(!visivel);
  };

  return (
    <div>
      <button onClick={alternarVisibilidade}>
        {visivel ? 'Ocultar' : 'Mostrar'}
      </button>
      {visivel && <p>Este é o texto que pode ser mostrado ou ocultado.</p>}
    </div>
  );
};

export default MostrarOcultar;
