import React from 'react';
import { render, waitForElement, getByTestId, getAllByTestId } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import Countries from "./Countries";

describe('Countries tests', () => {
    it('displays country name if only one selection is available', () => {
        const countries = [
            {
                name: 'Finland'
            }
        ]
        const { getByTestId } = render(<Countries countries={countries} />)

        const nameLink = getByTestId('country-row');
        expect(nameLink).toHaveTextContent('Finland')
    });
    it('displays list of countries if less than 10', () => {
        const countries = [
            {
                name: 'Finland'
            },
            {
                name: 'Fiji'
            },
            {
                name: 'China'
            },
            {
                name: 'Germany'
            },
            {
                name: 'Denmark'
            },
            {
                name: 'Norway'
            }
        ]
        expect([{ "name": "Finland" }, { "name": "Fiji" }, { "name": "China" }, { "name": "Germany" }, { "name": "Denmark" }, { "name": "Norway" }]).toEqual(expect.arrayContaining(countries));
    });
    it('displays Too many matches, please specify another filter if greater than 10', () => {
        const countries = [
            {
                name: 'Finland'
            },
            {
                name: 'Fiji'
            },
            {
                name: 'China'
            },
            {
                name: 'Germany'
            },
            {
                name: 'Denmark'
            },
            {
                name: 'Norway'
            },
            {
                name: 'Denmark'
            },
            {
                name: 'Sweden'
            },
            {
                name: 'New Zealand'
            },
            {
                name: 'Canada'
            },
            {
                name: 'United States of America'
            },
        ]
        const { getByText } = render(<Countries countries={countries} />)

        const nameLink = getByText('Too many matches, please specify another filter');
        expect(nameLink).toBeTruthy();
    });
});

