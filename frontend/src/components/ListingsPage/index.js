// frontend/src/components/ListingsPage/index.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getlistings } from '../../store/listings';
import Listing from './listing';
import './listings.css';

function ListingsPage(){

const listingsState = useSelector(state => state.listings);
// const listings =
// console.log(listings)
const dispatch = useDispatch();

useEffect(() => {
    dispatch(getlistings());
    }, [dispatch])


    return(

    <div className='explore-page'>
        <h1>THIS IS LISTINGS PAGE</h1>
        <div >
            <div className='explore-page--header_container'>
            <h3 className='explore-page--header'>Discover</h3>
        </div>
        <div >
            {Object.values(listingsState)?.map((el) => {
            return <Listing key={el.id} list={el}/>
            })}
        </div>

        </div>
    </div>

    )
  }
  export default ListingsPage;
