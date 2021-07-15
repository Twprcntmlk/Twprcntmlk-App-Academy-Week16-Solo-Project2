// frontend/src/components/ListingsPage/index.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import GoogleApiWrapper from '../GoogleMapApi/GoogleMapApi'
import { getlistings } from '../../store/listings';
import Listing from './listing';
import './listingsIndex.css';


function ListingsPage(){
    const listingsState = useSelector(state => state.listings);
    const listings = Object.values(listingsState)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getlistings());
        }, [dispatch])

    console.log("IS THIS ALL THE LISTINGS",listings)
    return(

    <div className='explore-page'>

        <div className='explore-page--header_container_photo'>
            <div className='explore-page--header_container'>
                <h1 className='explore-page--header'>Discover</h1>
            </div>
        {listings?.map((el, idx) => {
            return <Listing key={idx} list={el} /> })}

        </div>
        <div id="GoogleMaps">

            <GoogleApiWrapper props={ listings } />
        </div>

    </div>

    )
  }
  export default ListingsPage;
