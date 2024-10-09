import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Carousel from '../components/Carousel';

describe('Carousel Component', () => {

    test('renders carousel with images', () => {
        render(<Carousel />);


        const firstSlide = screen.getByAltText('Slide 0');
        expect(firstSlide).toBeInTheDocument();
        expect(firstSlide).toHaveAttribute('src', '/assets/images/carrusel/1.JPG');

        const secondSlide = screen.getByAltText('Slide 1');
        expect(secondSlide).toBeInTheDocument();
        expect(secondSlide).toHaveAttribute('src', '/assets/images/carrusel/2 Jhonnys dj.jpg');

        const thirdSlide = screen.getByAltText('Slide 2');
        expect(thirdSlide).toBeInTheDocument();
        expect(thirdSlide).toHaveAttribute('src', '/assets/images/carrusel/varios.png');
    });

    test('clicking next button shows the next image', () => {
        render(<Carousel />);


        const firstSlide = screen.getByAltText('Slide 0');
        expect(firstSlide).toBeInTheDocument();


        const nextButton = screen.getByText('❯');
        fireEvent.click(nextButton);


        const secondSlide = screen.getByAltText('Slide 1');
        expect(secondSlide).toBeInTheDocument();
    });

    test('clicking prev button shows the previous image', () => {
        render(<Carousel />);


        const prevButton = screen.getByText('❮');
        fireEvent.click(prevButton);


        const thirdSlide = screen.getByAltText('Slide 2');
        expect(thirdSlide).toBeInTheDocument();
    });

    test('cycling through images with next button loops back to the first image', () => {
        render(<Carousel />);

        const nextButton = screen.getByText('❯');


        fireEvent.click(nextButton);
        fireEvent.click(nextButton); 
        fireEvent.click(nextButton); 


        const firstSlide = screen.getByAltText('Slide 0');
        expect(firstSlide).toBeInTheDocument();
    });
});
