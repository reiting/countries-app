import React from 'react';
import { render, getByText, fireEvent } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import Country from "./Country";

it('fetches and displays data', async () => {
    const location = {
        state: {
            country: [
                {
                    name: 'Finland',
                    capital: 'Helsinki',
                    population: 23
                }
            ]
        }
    }
    const { getByTestId } = render(<Country location={location} />)

    const nameSpan = getByTestId('country-name');
    expect(nameSpan).toHaveTextContent('Finland')

    const capitalSpan = getByTestId('country-capital');
    expect(capitalSpan).toHaveTextContent('Helsinki')

    const popSpan = getByTestId('country-pop');
    expect(popSpan).toHaveTextContent(23)

    const weatherLink = getByTestId('weather-link');
    expect(weatherLink).toBeTruthy();

    const countryLink = getByTestId('details-link');
    expect(countryLink).toBeTruthy();
});
