// frontend/src/components/ListingsPage/index.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { getlistings } from '../../store/listings';
import Listing from './listing';
import './listingsIndex.css';


function SearchBar({setFilterword}){
    let [search, setSearch] = useState(null);

    const updateSearch = (e) => setSearch(e.target.value);

    const EnterSearch = (e) => {
        e.preventDefault();
        setFilterword(search)

    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    }

    return (
        <div className="SearchBar">
            <form onSubmit={handleSubmit}>
            <input type="text" value={search} placeholder="Search" onChange={updateSearch}></input>
            <button type="button" onClick={EnterSearch}><i class="fas fa-search"></i></button>
            </form>
        </div>
    );
}

export default SearchBar;
