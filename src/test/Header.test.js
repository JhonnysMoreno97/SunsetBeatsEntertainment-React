import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from '../components/Header';

describe('Header Component', () => {

    beforeEach(() => {

        localStorage.clear();
    });

    test('renders header elements correctly', () => {
        render(<Header />);


        const title = screen.getByText(/Sunset Beats Entertainment/i);
        expect(title).toBeInTheDocument();


        const eventosLink = screen.getByText(/Eventos y Conciertos/i);
        expect(eventosLink).toBeInTheDocument();

        const artistasLink = screen.getByText(/Artistas Nuestros/i);
        expect(artistasLink).toBeInTheDocument();

        const bibliotecasLink = screen.getByText(/Lanzamientos y Biblioteca Músical/i);
        expect(bibliotecasLink).toBeInTheDocument();

        const noticiasLink = screen.getByText(/Noticias & Farandulas/i);
        expect(noticiasLink).toBeInTheDocument();

        const contactoLink = screen.getByText(/Contacto/i);
        expect(contactoLink).toBeInTheDocument();
    });

    test('toggles dark mode when button is clicked', () => {
        render(<Header />);


        const toggleButton = screen.getByRole('button', { name: /🌙|☀️/i });


        expect(toggleButton).toHaveTextContent('🌙');
        expect(document.body.classList.contains('dark-mode')).toBe(false);


        fireEvent.click(toggleButton);
        expect(toggleButton).toHaveTextContent('☀️');
        expect(document.body.classList.contains('dark-mode')).toBe(true);


        fireEvent.click(toggleButton);
        expect(toggleButton).toHaveTextContent('🌙');
        expect(document.body.classList.contains('dark-mode')).toBe(false);
    });

    test('sets dark mode based on localStorage value', () => {

        localStorage.setItem('theme', 'dark');

        render(<Header />);


        const toggleButton = screen.getByRole('button', { name: /☀️/i });
        expect(toggleButton).toHaveTextContent('☀️');
        expect(document.body.classList.contains('dark-mode')).toBe(true);
    });
});

