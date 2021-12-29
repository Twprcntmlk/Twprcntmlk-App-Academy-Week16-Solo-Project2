// frontend/src/components/ListingsPage/index.js
import React, { useState, useEffect  } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getlistings } from '../../store/listings';
import Listing from './listingCard';
import styles from './Listings.module.css';
import Slider, { SliderThumb } from '@material-ui/core/Slider';
import { styled } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import Box from '@material-ui/core/Box';

function valuetext(value) {
    return `$${value}`;
  }

function PriceBar({setFilterprice}){
    const [value, setValue] = useState([0, 1000]);

    const handleChange = (e, newValue) => {
      e.preventDefault();
      setValue(newValue);
      setFilterprice(newValue);
    };

    return (
        <div className={styles.PriceBar}>
            <div className={styles.PriceBar_container}>
                <div>Price Range</div>
                <div>
                    <Box sx={{ width: 400 }}>
                    <Slider
                    getAriaLabel={() => 'Price range'}
                    value={value}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                    min={0}
                    max={1000}
                    getAriaValueText={valuetext}
                    />
                    </Box>
                </div>
            </div>
        </div>
    );
}

export default PriceBar;
