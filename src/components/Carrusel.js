import React, { useState } from 'react';
import '../styles/Carrusel.css';


const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [
        "/assets/images/carrusel/1.JPG",
        "/assets/images/carrusel/2 Jhonnys dj.jpg",
        "/assets/images/carrusel/varios.png"
    ];

    const nextSlide = () => {
        setCurrentIndex((currentIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((currentIndex - 1 + images.length) % images.length);
    };

    return (
        <div className="carousel">
            <div className="slides" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {images.map((img, idx) => (
                    <img key={idx} src={img} alt={`Slide ${idx}`} />
                ))}
            </div>
            <button className="prev" onClick={prevSlide}>❮</button>
            <button className="next" onClick={nextSlide}>❯</button>
        </div>
    );
}

export default Carousel;
