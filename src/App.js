// src/App.js
import React from 'react';
import './App.css';
import MostrarOcultar from './MostrarOcultar';
import GeradorMensagens from './GeradorMensagens';

function App() {
  return (
    <div className="App">
      <h1>Atividade 04 - Manipulação de Formulários</h1>
      <h2>Componente MostrarOcultar</h2>
      <MostrarOcultar />
      
      <h2>Componente Gerador de Mensagens Motivacionais</h2>
      <GeradorMensagens />
    </div>
  );
}

export default App;
