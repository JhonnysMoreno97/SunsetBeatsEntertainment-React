import React from 'react';
import '../styles/Contacto.css';


const Contacto = () => {
    return (
        <section id="Contacto">
            <h2>Contacto</h2>
            <p>Contacta con nosotros a través de los siguientes medios:</p>
            <p>Correo electrónico: <a href="mailto:sunsetbeatsmedallo@gmail.com">sunsetbeatsmedallo@gmail.com</a></p>
            <p>Teléfono: <a href="tel:XXXX">Número de Teléfono</a></p>
            <p>También pueden seguirnos en nuestras redes sociales:</p>
            <ul>
                <li><a href="https://facebook.com/SunsetBeatsEntertainment" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                <li><a href="https://twitter.com/SunsetBeatsEntertainment" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                <li><a href="https://instagram.com/SunsetBeatsEntertainment" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            </ul>
        </section>
    );
}

export default Contacto;
