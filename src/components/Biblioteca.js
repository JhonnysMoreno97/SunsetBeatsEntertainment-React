import React from 'react';
import '../styles/Biblioteca.css'; 

const Biblioteca = () => {
    return (
        <section id="Bibliotecas">
            <h2>Música Streaming</h2>
            <div className="Biblioteca">
                <h3>Escucha toda la música de nuestros Artistas</h3>
                <p>Todos nuestras Playlist de Cantantes y Set Djs en Vivo</p>
                <a href="streaming.html">Escuchar</a>
            </div>
            <div className="Biblioteca">
                <h3>Preview de nuestras producciones</h3>
                <p>Aquí podrás escuchar un adelanto de lo nuevo.</p>
                <a href="preview.html">Escuchar</a>
            </div>
        </section>
    );
}

export default Biblioteca;
