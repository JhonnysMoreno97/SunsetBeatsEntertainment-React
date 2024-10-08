import React, { useState } from 'react';
import '../styles/FiltroEventos.css';

const FiltroEventos = () => {
    const [seleccion, setSeleccion] = useState('Todos');
    const eventos = [
        {
            nombre: "Evento 1",
            ubicacion: "Medellín",
            Contenido: (
                <div>
                    <h3>Concierto de la Juventud</h3>
                    <img src="/assets/images/Imagen2.png" width="540" height="400" alt="El_Evento1" className="image" />
                    <img src="/assets/images/Imagen3.png" width="540" height="400" alt="EL_Evento2" className="image" />
                    <p>Fecha: Sábado 21 de Septiembre del 2024</p>
                    <p>Cantantes y DJs Nacionales e Internacionales</p>
                    <p>Ubicación: Parque Norte - Medellín Colombia</p>
                    <a href="https://sunsetbeatsentretenimiento.com">Adquiere tus entradas</a>
                </div>
            )
        },

        {
            nombre: "Evento 2",
            ubicacion: "Bogotá",
            Contenido: (
                <div>
                    <h3>Gira de Colegios</h3>
                    <img src="/assets/images/Eventos de colegios.jpeg" width="600" height="400" alt="colegios" className="image" />
                    <p>Fecha de Inicio: Martes 24 de Septiembre del 2024</p>
                    <p>Cantantes y DJs de la Ciudad</p>
                    <p>Ubicación: Colegios: Sagrado Corazón</p>
                    <p>Estudiantes de la Institución Entrada Gratis</p>
                    <a href="https://sunsetbeatsentretenimiento.com">Adquiere tus entradas</a>


                </div>
            )

        },

        {
            nombre: "Evento 3",
            ubicacion: "Cali",
            Contenido: (

                <div>
                    <h3>Acompañamiento al Concierto de Andrés Cepeda</h3>
                    <img src="/assets/images/Cepeda.jpg" width="600" height="400" alt="Cepeda" className="image" />
                    <p>Fecha de Inicio: Martes 30 de Noviembre del 2024</p>
                    <p>Show DJ EN Vivos - Jhonnys Moreno</p>
                    <p>Ubicación: Coliseo El Pueblo</p>
                    <p>Solo para mayores de Edad</p>
                    <a href="https://acortar.link/QKXM4x">Adquiere tus entradas</a>


                </div>
            )

        },
    ];

    const handleChange = (e) => {
        setSeleccion(e.target.value);
    };

    return (
        <div className="filtro-eventos">
            <label htmlFor="filtro-ubicacion">Filtrar por ubicación:</label>
            <select id="filtro-ubicacion" value={seleccion} onChange={handleChange}>
                <option value="Todos">Todos</option>
                <option value="Medellín">Medellín</option>
                <option value="Bogotá">Bogotá</option>
                <option value="Cali">Cali</option>
            </select>
            <div className="eventos">
                {eventos.filter(evento => seleccion === 'Todos' || evento.ubicacion.includes(seleccion)).map(evento => (
                    <div key={evento.nombre} className="evento-item">
                        <h3>{evento.nombre}</h3>
                        <p>{evento.ubicacion}</p>
                        <div>{evento.Contenido}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FiltroEventos;
