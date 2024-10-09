import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; 
import Biblioteca from '../components/Biblioteca'; 

describe('Biblioteca Component', () => {

    test('renders section and title correctly', () => {
        render(<Biblioteca />);


        const sectionTitle = screen.getByText(/Música Streaming/i);
        expect(sectionTitle).toBeInTheDocument();
    });

    test('renders first biblioteca block correctly', () => {
        render(<Biblioteca />);

    
        const firstBlockTitle = screen.getByText(/Escucha toda la música de nuestros Artistas/i);
        expect(firstBlockTitle).toBeInTheDocument();

        const firstBlockDescription = screen.getByText(/Todos nuestras Playlist de Cantantes y Set Djs en Vivo/i);
        expect(firstBlockDescription).toBeInTheDocument();

        const firstBlockLink = screen.getByText(/Escuchar/i);
        expect(firstBlockLink).toHaveAttribute('href', 'streaming.html');
    });

    test('renders second biblioteca block correctly', () => {
        render(<Biblioteca />);

       
        const secondBlockTitle = screen.getByText(/Preview de nuestras producciones/i);
        expect(secondBlockTitle).toBeInTheDocument();

        const secondBlockDescription = screen.getByText(/Aquí podrás escuchar un adelanto de lo nuevo/i);
        expect(secondBlockDescription).toBeInTheDocument();

        const secondBlockLink = screen.getAllByText(/Escuchar/i)[1]; 
        expect(secondBlockLink).toHaveAttribute('href', 'preview.html');
    });
});
