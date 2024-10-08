import React, { useState, useEffect } from "react";
import '../styles/Header.css';


const Header = () => {

    const [darkMode, setDarkMode] = useState(localStorage.getItem('theme') === 'dark');

    const toggleDarkMode = () => {
        setDarkMode(prevMode => {
            const newMode = !prevMode;
            localStorage.setItem('theme', newMode ? 'dark' : 'light');
            return newMode;
        });
    };

    useEffect(() => {
        if (darkMode) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    }, [darkMode]);

    return (
        <header>
            <h1>Sunset Beats Entertainment</h1>
            <nav>
                <img src="/assets/images/Imagen1.png" width="200" height="200" alt="El_Evento1" className="img_inicio" />
                <ul>
                    <li><a href="#Eventos">Eventos y Conciertos</a></li>
                    <li><a href="#Artistas">Artistas Nuestros</a></li>
                    <li><a href="#Bibliotecas">Lanzamientos y Biblioteca Músical</a></li>
                    <li><a href="#Noticias">Noticias & Farandulas</a></li>
                    <li><a href="#Contacto">Contacto</a></li>
                </ul>
            </nav>
            <button id="toggle-dark-mode" onClick={toggleDarkMode}>
                {darkMode ? '☀️' : '🌙'}
            </button>

        </header>
    );
};

export default Header;