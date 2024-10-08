import React from 'react';
import '../styles/Artistas.css'; 

const Artistas = () => {
  return (
    <section id="Artistas">
      <h2>Artistas de la Disquera (Djs y Cantantes)</h2>

      <div className="Artista">
        <img src="/assets/images/Imagen7.png" width="600" height="400" alt="Jhonnys Moreno DJ" className="image" />
        <h3>Jhonnys Moreno DJ</h3>
        <p>Los DJ son expertos en la mezcla de diferentes géneros musicales...</p>
        <a href="sunsetbeatsentretenimiento.html">Más información</a>
      </div>

      <div className="Artista">
        <img src="/assets/images/Imagen8.png" width="600" height="400" alt="Franko" className="image" />
        <h3>Franko</h3>
        <p>La música es considerada una forma de arte universal...</p>
        <a href="sunsetbeatsentretenimiento.html">Más información</a>
      </div>

      <div className="carousel">
        <h3>Mucho Más:</h3>

      </div>
      
    </section>
  );
};

export default Artistas;
