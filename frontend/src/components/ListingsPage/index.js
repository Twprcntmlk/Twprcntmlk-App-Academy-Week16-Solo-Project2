// frontend/src/components/ListingsPage/index.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getlistings } from '../../store/listings';
import Listing from './listing';
// import { , Nav } from 'react-router-dom';
// import { useSelector } from 'react-redux';
import './listings.css';

function ListingsPage(){

const listingsState = useSelector(state => state.listings);
const listings = Object.values(listingsState);
const dispatch = useDispatch();

// console.log(listingsState)
// console.log(listings)

useEffect(() => {
    dispatch(getlistings());
    }, [dispatch])


    return(

    <div className='explore-page'>
        <h1>THIS IS LISTINGS PAGE</h1>
        <div>
            <div className='explore-page--header_container'>
            <h3 className='explore-page--header'>Discover</h3>
            </div>
            {listings?.map((el) => {
            return <Listing key={el.id} list={el}/>
            })}
        </div>
    </div>

    )
  }
  export default ListingsPage;
