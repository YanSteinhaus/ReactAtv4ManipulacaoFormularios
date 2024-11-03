// src/GeradorMensagens.js
import React, { useState } from 'react';

const GeradorMensagens = () => {
  const [mensagem, setMensagem] = useState('');
  const [input, setInput] = useState('');

  const mensagensInspiradoras = {
    motivação: 'Acredite em si mesmo e em tudo o que você é.',
    sucesso: 'O sucesso é a soma de pequenos esforços repetidos diariamente.',
    coragem: 'A coragem não é a ausência do medo, mas a vitória sobre ele.',
  };

  const atualizarMensagem = (evento) => {
    const palavraChave = evento.target.value.toLowerCase();
    setInput(palavraChave);
    setMensagem(mensagensInspiradoras[palavraChave] || 'Digite uma palavra-chave válida.');
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Digite uma palavra-chave"
        value={input}
        onChange={atualizarMensagem}
      />
      <p>{mensagem}</p>
    </div>
  );
};

export default GeradorMensagens;
