import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // Para usar matchers como "toBeInTheDocument"
import Noticias from '../components/Noticias'; // Ajusta la ruta según tu estructura

describe('Noticias Component', () => {
    test('renders Noticias section with correct title', () => {
        render(<Noticias />);

        // Verifica que el título "Noticias & Farandula" se renderice
        expect(screen.getByText('Noticias & Farandula')).toBeInTheDocument();
    });

    test('renders first news article with correct content', () => {
        render(<Noticias />);

        // Verifica que el primer artículo se renderice correctamente
        expect(screen.getByText('Medellín, la nueva meca de la música electrónica')).toBeInTheDocument();
        expect(screen.getByText('Con eventos de talla mundial que congregan a fanáticos de diferentes rincones del planeta, la ciudad...')).toBeInTheDocument();

        // Verifica que el enlace del primer artículo esté correcto sin usar closest
        const firstLink = screen.getByRole('link', { name: 'Leer más' });
        expect(firstLink).toHaveAttribute('href', 'https://www.elespectador.com/cromos/medellin-la-nueva-meca-de-la-musica-electronica-4-eventos-imperdibles/');
    });

    test('renders second news article with correct content', () => {
        render(<Noticias />);

        // Verifica que el segundo artículo se renderice correctamente
        expect(screen.getByText('Conoce algunas de las mejores cantantes colombianas de todos los tiempos')).toBeInTheDocument();
        expect(screen.getByText('Colombia es la cuna de grandes talentos musicales, entre los que destacan mujeres...')).toBeInTheDocument();

        // Verifica que el enlace del segundo artículo esté correcto sin usar closest
        const secondLink = screen.getByRole('link', { name: 'Leer más' });
        expect(secondLink).toHaveAttribute('href', 'https://colombia.co/pais-colombia/talento-de-colombia/conoce-algunas-de-las-mejores-cantantes-colombianas-de-todos-los-tiempos');
    });

    test('renders image with correct attributes in first article', () => {
        render(<Noticias />);

        // Verifica que la imagen del primer artículo se renderice con los atributos correctos
        const image = screen.getByAltText('Noticiasimg');
        expect(image).toHaveAttribute('src', '/assets/images/Imagen6.png');
        expect(image).toHaveAttribute('width', '600');
        expect(image).toHaveAttribute('height', '400');
    });
});
