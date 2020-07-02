import React from 'react';
import { render, waitForElement, getByTestId } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import axios from "axios";
import Weather from "./Weather";

jest.mock("axios") 

it ('fetches and displays weather data', async () => {
axios.get.mockResolvedValue({data: {current: {temperature: '23', wind_speed: '40mph', wind_dir: 'north'}}});

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
    const { getByTestId } = render(<Weather location={location} />)

    const nameSpan = getByTestId('capital');
    expect(nameSpan).toHaveTextContent('Helsinki')

    const tempSpan = await waitForElement(() => getByTestId('temp'));
    expect(tempSpan).toHaveTextContent('23')

    const windSpan = await waitForElement(() => getByTestId('wind'));
    expect(windSpan).toHaveTextContent('40mph')
    expect(windSpan).toHaveTextContent('north')

    expect(axios.get).toHaveBeenCalledTimes(1);
});


