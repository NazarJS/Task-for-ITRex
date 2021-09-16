import React from 'react';
import './table.css';
function SearchComponent({ setSearchValue, searchValue }) {

    const changeValue = e => {
        setSearchValue(e.target.value)
    }

    return (
        <div className='input'>
            <input value={searchValue} placeholder='Enter the name' onChange={changeValue}></input>
        </div>
    );
}

export default SearchComponent;
