import React from 'react';
import { render, waitForElement, getByTestId } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import Details from "./Details";

it('fetches and displays data', async () => {
    const location = {
        state: {
            country: [
                {
                    languages: [
                        {
                            name: 'Finnish'
                        }
                    ],
                    currencies: [
                        {
                            name: 'Euro'
                        }
                    ]
                }
            ]
        }
    }
    const { getByTestId } = render(<Details location={location} />)

    const langSpan = getByTestId('lang');
    expect(langSpan).toHaveTextContent('Finnish')
    
    const currencySpan = getByTestId('currency');
    expect(currencySpan).toHaveTextContent('Euro')
});
