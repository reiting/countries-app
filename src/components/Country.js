import React from 'react';
import { Link } from "@reach/router";
import './Country.css';

const Country = ({ location: { state: { country } } }) => {
  console.log('country', country);

  return (
    <div className='country'>
      <h1 className='country-name' data-testid='country-name'>{country[0].name}</h1>
      <img className='country-flag' src={country[0].flag} alt={`${country[0].name} flag`} data-testid='country-flag' />
      <p data-testid='country-capital'>capital: {country[0].capital}</p>
      <p data-testid='country-pop'>population: {country[0].population}</p>
      <h2>Want some more information about this country? Choose one of the links below!</h2>
      <Link className='country-details' data-testid='weather-link' to={'/weather'} state={{ country }}>Weather</Link>{' '}
      <Link className='country-details' data-testid='details-link' to={'/details'} state={{ country }}>Details</Link>
    </div>
  )
}

export default Country;