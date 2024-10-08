import React from 'react';
import '../styles/Noticias.css';


const Noticias = () => {
  return (
    <section id="Noticias">
      <h2>Noticias & Farandula</h2>
      <article>
        <h3>Medellín, la nueva meca de la música electrónica</h3>
        <img src="/assets/images/Imagen6.png" width="600" height="400" alt="Noticiasimg" className="image" /> 
        <p>Con eventos de talla mundial que congregan a fanáticos de diferentes rincones del planeta, la ciudad...</p>
        <a href="https://www.elespectador.com/cromos/medellin-la-nueva-meca-de-la-musica-electronica-4-eventos-imperdibles/">Leer más</a>
      </article>
      <article>
        <h3>Conoce algunas de las mejores cantantes colombianas de todos los tiempos</h3>
        <p>Colombia es la cuna de grandes talentos musicales, entre los que destacan mujeres...</p>
        <a href="https://colombia.co/pais-colombia/talento-de-colombia/conoce-algunas-de-las-mejores-cantantes-colombianas-de-todos-los-tiempos">Leer más</a>
      </article>
    </section>
  );
}

export default Noticias;
