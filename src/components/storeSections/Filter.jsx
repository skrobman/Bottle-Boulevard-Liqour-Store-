import React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

function valuetext(value) {
    return `$${value}`;
}

const minDistance = 10;

const Filter = ({ brands = [], selectedBrands = [], handleBrandChange, minPrice, maxPrice, handlePriceChange }) => {
    const [value, setValue] = React.useState([minPrice, maxPrice]);

    // Calculate the range and steps
    const range = maxPrice - minPrice;
    const steps = range / 100; // You can adjust the divisor to determine the number of steps

    const handleChange = (event, newValue, activeThumb) => {
        if (!Array.isArray(newValue)) {
            return;
        }

        const [newValueStart, newValueEnd] = newValue;

        setValue([
            Math.min(newValueStart, value[1] - steps),
            Math.max(newValueEnd, value[0] + steps)
        ]);

        handlePriceChange(newValue);
    };

    const handleInputChange = (event, index) => {
        const newValue = parseInt(event.target.value, 10);
        if (isNaN(newValue)) return;

        const newValues = [...value];
        newValues[index] = newValue;

        // Ensure the new value respects the minDistance constraint
        if (newValues[1] - newValues[0] >= minDistance) {
            setValue(newValues);
            handlePriceChange(newValues);
        }
    };

    return (
        <div className="filter bg-white p-7">
            <div className="filter-checkbox">
                <h2 className='text-slate-700 font-semibold'>Filters</h2>
                {brands.map(brand => (
                    <div key={brand}>
                        <input
                            type="checkbox"
                            checked={selectedBrands.includes(brand)}
                            onChange={() => handleBrandChange(brand)}
                        />
                        <label htmlFor={brand} className='uppercase text-black text-base ml-2'>{brand}</label>
                    </div>
                ))}
            </div>
            <div className="slider-filter">
                <h2 className='text-slate-700 font-semibold uppercase mt-3 mb-2'>Price</h2>
                <div className="price-range">
                    <input
                        type='number'
                        value={value[0]}
                        onChange={(e) => handleInputChange(e, 0)}
                    />
                    <span>-</span>
                    <input
                        type="number"
                        value={value[1]}
                        onChange={(e) => handleInputChange(e, 1)}
                    />
                </div>
                <Box sx={{ width: 'auto' }}>
                    <Slider
                        getAriaLabel={() => 'Price range'}
                        value={value}
                        min={minPrice}
                        max={maxPrice}
                        onChange={handleChange}
                        valueLabelDisplay="auto"
                        getAriaValueText={valuetext}
                        disableSwap
                        className='m-3'
                        sx={{
                            color: 'black', // Color of the track and rail
                            '& .MuiSlider-thumb': {
                                backgroundColor: 'white', // Color of the thumb
                                border: '2px solid black', // Border color of the thumb
                                '&:hover, &.Mui-focusVisible, &.Mui-active': {
                                    boxShadow: 'none', // Remove default box-shadow
                                },
                            },
                            '& .MuiSlider-rail': {
                                color: 'black', // Color of the rail
                                height: 4, // Height of the rail
                            },
                            '& .MuiSlider-track': {
                                color: 'black', // Color of the track
                                height: 2, // Height of the track
                            },
                        }}
                    />
                </Box>
            </div>
        </div>
    );
};

export default Filter;
