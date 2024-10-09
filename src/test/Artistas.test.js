import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; 
import Artistas from '../components/Artistas';

describe('Artistas Component', () => {

    test('renders section and title correctly', () => {
        render(<Artistas />);

    
        const sectionTitle = screen.getByText(/Artistas de la Disquera/i);
        expect(sectionTitle).toBeInTheDocument();
    });

    test('renders artist information correctly', () => {
        render(<Artistas />);

        const jhonnysImage = screen.getByAltText(/Jhonnys Moreno DJ/i);
        expect(jhonnysImage).toBeInTheDocument();

        const jhonnysTitle = screen.getByText(/Jhonnys Moreno DJ/i);
        expect(jhonnysTitle).toBeInTheDocument();

        const jhonnysDescription = screen.getByText(/Los DJ son expertos en la mezcla de diferentes géneros musicales/i);
        expect(jhonnysDescription).toBeInTheDocument();

        const jhonnysLink = screen.getByText(/Más información/i);
        expect(jhonnysLink).toHaveAttribute('href', 'sunsetbeatsentretenimiento.html');

  
        const frankoImage = screen.getByAltText(/Franko/i);
        expect(frankoImage).toBeInTheDocument();

        const frankoTitle = screen.getByText(/Franko/i);
        expect(frankoTitle).toBeInTheDocument();

        const frankoDescription = screen.getByText(/La música es considerada una forma de arte universal/i);
        expect(frankoDescription).toBeInTheDocument();

        const frankoLink = screen.getAllByText(/Más información/i)[1];
        expect(frankoLink).toHaveAttribute('href', 'sunsetbeatsentretenimiento.html');
    });

    test('renders carousel section', () => {
        render(<Artistas />);

        // Verifica que el título de la sección de "Mucho Más" esté presente
        const carouselTitle = screen.getByText(/Mucho Más/i);
        expect(carouselTitle).toBeInTheDocument();
    });
});
