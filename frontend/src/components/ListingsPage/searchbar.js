// frontend/src/components/ListingsPage/index.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getlistings } from '../../store/listings';
import Listing from './listingCard';
import styles from './Listings.module.css';
import SearchIcon from '@mui/icons-material/Search';
import Divider from '@mui/material/Divider';
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
        <div className={styles.SearchBar}>
            <input  className={styles.searchbar}  type="text" value={search}  onChange={updateSearch}></input>
            <Divider sx={{ height: 35, m: .5 }} orientation="vertical"/>
            <button className={styles.searchbar_button}type="button" onClick={EnterSearch}>
                <SearchIcon fontSize="large"/>
            </button>
        </div>
    );
}

export default SearchBar;
