// frontend/src/components/ListingsPage/index.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import GoogleApiWrapper from '../GoogleMapApi/GoogleMapApi'
import { getlistings } from '../../store/listings';
import Listing from './listing';
import './listingsIndex.css';
import SearchBar from './searchbar';
import PriceBar from './pricebar';

function ListingsPage(){
    const dispatch = useDispatch();
    const listingsState = useSelector(state => state.listings);
    const listings = Object.values(listingsState)
    let [filteredListings, setFilteredListings]=useState(listings)
    let [filterword, setFilterword]=useState("")



    console.log(typeof filterword)
    // console.log("filterword2",filtering)
    useEffect(() => {
        setFilteredListings(listings)
        },[listingsState])

    useEffect(() => {
        let filteringDesc = listings?.filter((el)=>(el.description.toLowerCase().includes(filterword.toLowerCase())))
        let filteringAdd = listings?.filter((el)=>(el.address.toLowerCase().includes(filterword.toLowerCase())))
        let filteringName = listings?.filter((el)=>(el.name.toLowerCase().includes(filterword.toLowerCase())))
        let listfiltering = Object.values(filteringDesc.concat(filteringAdd.concat(filteringName)))
        console.log("filtering_____________",listfiltering)
        setFilteredListings(listfiltering)
        },[filterword])

    useEffect(() => {
        dispatch(getlistings());
        }, [dispatch])

    // console.log("IS THIS ALL THE LISTINGS",listings)
    // console.log("IS THIS ALL THE LISTINGS",filteredListings)
    return(
    <div className='explore-page'>
        <div className='explore-page--header_container_photo'>
            <div className='explore-page--header_container'>
                <h1 className='explore-page--header'>Discover</h1>
            </div>
            <div className='explore-page--searchbar_container'>
                < SearchBar setFilterword={setFilterword}/>
            </div>
            <div className='explore-page--pricebar_container'>
                < PriceBar />
            </div>


            {filteredListings?.map((el, idx) => {
                return <Listing key={idx} list={el} /> })}

        </div>

        <div id="GoogleMaps">
            <GoogleApiWrapper props={ listings } />
        </div>
    </div>

    )
  }
  export default ListingsPage;
