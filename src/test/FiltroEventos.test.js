import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import FiltroEventos from '../components/FiltroEventos';

describe('FiltroEventos Component', () => {
    test('renders FiltroEventos with all events initially', () => {
        render(<FiltroEventos />);


        expect(screen.getByText('Evento 1')).toBeInTheDocument();
        expect(screen.getByText('Evento 2')).toBeInTheDocument();
        expect(screen.getByText('Evento 3')).toBeInTheDocument();
    });

    test('renders correct events when Medellín is selected', () => {
        render(<FiltroEventos />);


        const select = screen.getByLabelText('Filtrar por ubicación:');
        fireEvent.change(select, { target: { value: 'Medellín' } });


        expect(screen.getByText('Evento 1')).toBeInTheDocument();
        expect(screen.queryByText('Evento 2')).not.toBeInTheDocument();
        expect(screen.queryByText('Evento 3')).not.toBeInTheDocument();
    });

    test('renders correct events when Bogotá is selected', () => {
        render(<FiltroEventos />);


        const select = screen.getByLabelText('Filtrar por ubicación:');
        fireEvent.change(select, { target: { value: 'Bogotá' } });

   
        expect(screen.getByText('Evento 2')).toBeInTheDocument();
        expect(screen.queryByText('Evento 1')).not.toBeInTheDocument();
        expect(screen.queryByText('Evento 3')).not.toBeInTheDocument();
    });

    test('renders correct events when Cali is selected', () => {
        render(<FiltroEventos />);

        const select = screen.getByLabelText('Filtrar por ubicación:');
        fireEvent.change(select, { target: { value: 'Cali' } });

       
        expect(screen.getByText('Evento 3')).toBeInTheDocument();
        expect(screen.queryByText('Evento 1')).not.toBeInTheDocument();
        expect(screen.queryByText('Evento 2')).not.toBeInTheDocument();
    });

    test('renders all events when "Todos" is selected', () => {
        render(<FiltroEventos />);

       
        const select = screen.getByLabelText('Filtrar por ubicación:');
        fireEvent.change(select, { target: { value: 'Todos' } });

      
        expect(screen.getByText('Evento 1')).toBeInTheDocument();
        expect(screen.getByText('Evento 2')).toBeInTheDocument();
        expect(screen.getByText('Evento 3')).toBeInTheDocument();
    });
});