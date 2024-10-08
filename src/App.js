import React from 'react';
import Header from './components/Header';
import Eventos from './components/Eventos';
import Artistas from './components/Artistas';
import Biblioteca from './components/Biblioteca';
import Noticias from './components/Noticias';
import Contacto from './components/Contacto';
import Footer from './components/Footer';
import Carrusel from './components/Carrusel';

import './App.css';

function App() {
  return (
    <div>
      {/* Header */}
      <Header />

      {/* Eventos y Conciertos Section */}

      <Eventos />

      {/* Artistas Section */}
      <Artistas />

      <Carrusel />

      {/* Música Streaming Section */}
      <Biblioteca />

      {/* Noticias Section */}
      <Noticias />

      {/* Contacto Section */}
      <Contacto />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
