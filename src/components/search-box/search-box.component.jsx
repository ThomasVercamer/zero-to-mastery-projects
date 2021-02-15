import React from 'react';
import './search-box.styles.css';

export const Searchbox = ({placeholder, onChange}) => (
    <input
    className='search'
    type='search'
    placeholder={placeholder}
    onChange={onChange} />
);