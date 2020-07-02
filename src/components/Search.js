import React from 'react';
import './Search.css';

const Search = ({ searchTerm, handleSearchChange }) => {
    return (
        <div className='searchbox'>
        <h1 className='instructions'>Search for a country and click on the one you want to learn more about!</h1>
        <input
                placeholder='Enter a country name'
                className='searchinput'
                value={searchTerm}
                onChange={handleSearchChange} />
        </div>
    )
}

export default Search;