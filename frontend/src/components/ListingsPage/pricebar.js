// frontend/src/components/ListingsPage/index.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { getlistings } from '../../store/listings';
import Listing from './listing';
import './listingsIndex.css';
import Slider, { SliderThumb } from '@material-ui/core/Slider';
import { styled } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import Box from '@material-ui/core/Box';

function valuetext(value) {
    return `$${value}`;
  }

function PriceBar(){
    const [value, setValue] = React.useState([0, 500]);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    // const updateSearch = (e) => setSearch(e.target.value);

    const EnterSearch = (e) => {
        e.preventDefault();

    };

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    // }
    return (
        <div className="PriceBar">
              <Box sx={{ width: 300 }}>
      <Slider
        getAriaLabel={() => 'Temperature range'}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
      />
    </Box>

            <button type="button" onClick={EnterSearch}><i class="fas fa-check-circle"></i></button>

        </div>
    );
}

export default PriceBar;
