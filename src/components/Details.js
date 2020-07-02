import React from 'react';
import './Details.css';

const Details = ({location : {state: {country}}}) => {

    return (
        <div className='details'>
            <h2 className='heading'>Spoken Languages</h2>
            <ul className='details-list'>
                {country[0].languages.map(lang => {
                    return <li data-testid='lang' key={lang.name}>{lang.name}</li>;
                })}
            </ul>
            <h2 className='heading'>Currencies Used</h2>
            <ul className='details-list'>
                {country[0].currencies.map(currency => {
                    return <li data-testid='currency' key={currency.name}>{currency.name}</li>;
                })}
            </ul>
        </div>
    )

}

export default Details;