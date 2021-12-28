// frontend/src/components/ListingsPage/index.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import GoogleApiWrapper from '../GoogleMapApi/GoogleMapApi'
import { getlistings } from '../../store/listings';
import Listing from './listing';
import styles from './Listings.module.css';
import SearchBar from './searchbar';
import PriceBar from './pricebar';

function ListingsPage(){
    const dispatch = useDispatch();
    const listingsState = useSelector(state => state.listings);
    const listings = Object.values(listingsState)
    let [filteredListings, setFilteredListings]=useState(listings)
    let [filterword, setFilterword]=useState("")
    let [filterprice, setFilterprice]=useState([0,1000])

    useEffect(() => {
        setFilteredListings(listings)
        },[listingsState])

    useEffect(() => {
        let range = listings?.filter((el)=>(el.price >= filterprice[0] && el.price <= filterprice[1] ))
        let listfiltering = Object.values(range)
        setFilteredListings(listfiltering)
        },[filterprice])

    useEffect(() => {
        let filteringDesc = listings?.filter((el)=>(el.description.toLowerCase().includes(filterword.toLowerCase())))
        let filteringAdd = listings?.filter((el)=>(el.address.toLowerCase().includes(filterword.toLowerCase())))
        let filteringName = listings?.filter((el)=>(el.name.toLowerCase().includes(filterword.toLowerCase())))
        let listfiltering = Object.values(filteringDesc.concat(filteringAdd.concat(filteringName)))
        setFilteredListings(listfiltering)
        },[filterword])

    useEffect(() => {
        dispatch(getlistings());
        }, [dispatch])

    return(
    <div className={styles.ExplorePage}>



        <div className={styles.ExplorePage_options_container}>
            <div className='explore-page--header_container'>
                <h1 className='explore-page--header'>Discover</h1>
            </div>
            <div className='explore-page--options'>
                <div className='explore-page--searchbar_container'>
                    <SearchBar setFilterword={setFilterword}/>
                </div>
                <div className='explore-page--pricebar_container'>
                    <PriceBar setFilterprice={setFilterprice}/>
                </div>
            </div>
        </div>


        <div className={styles.ExplorePage_listings_container}>
        {filteredListings?.map((el, idx) => {
            return <Listing key={idx} list={el} /> })}
        </div>
        <div id={styles.GoogleMaps}>
            <GoogleApiWrapper  props={ listings } />
        </div>

    </div>


    )
  }
  export default ListingsPage;
