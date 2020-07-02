import React from 'react';
import { Link } from "@reach/router"
import './Countries.css';

const Countries = ({ countries }) => {
    if (countries.length > 10) {
        return (
            <p className='over-ten'>Too many matches, please specify another filter</p>
        );
    } else if (countries.length <= 10) {
        //map through the countries and if the button is clicked set the searchTerm to equal the 
        //country.name so that we are taken to that view
        const entries = () => countries.map(country =>
            (<div key={country.alpha3Code} >
                <Link to={'/country/' + country.alpha3Code} state={{ country: countries }} data-testid='country-row'>{country.name}</Link>
            </div>));
        return (
            <ul className='search-return'>
                {entries()}
            </ul>
        )
    } 
}

export default Countries;




