import React, { useState } from 'react';
import Select from 'react-select'
import { IoSearch } from 'react-icons/io5';
import './Main.scss';

const options = [
    { value: 'Africa', label: 'Africa' },
    { value: 'America', label: 'America' },
    { value: 'Asia', label: 'Asia' },
    { value: 'Europe', label: 'Europe' },
    { value: 'Oceania', label: 'Oceania' },
];

export default function Main () {
    const [search, setSearch] = useState('');
    const [region, setRegion] = useState('');



    const colourOptions = [
        { value: 'ocean', label: 'Ocean', color: '#00B8D9', isFixed: true },
        { value: 'blue', label: 'Blue', color: '#0052CC', isDisabled: true },
        { value: 'purple', label: 'Purple', color: '#5243AA' },
        { value: 'red', label: 'Red', color: '#FF5630', isFixed: true },
        { value: 'orange', label: 'Orange', color: '#FF8B00' },
        { value: 'yellow', label: 'Yellow', color: '#FFC400' },
        { value: 'green', label: 'Green', color: '#36B37E' },
        { value: 'forest', label: 'Forest', color: '#00875A' },
        { value: 'slate', label: 'Slate', color: '#253858' },
        { value: 'silver', label: 'Silver', color: '#666666' },
    ];


    return(
        <>
            <div className='block-input'>
                <form className='inp'>
                    <label>
                        <IoSearch styles={{width: '300px' }}/>
                        <input name="name" type='search' placeholder='Search for a country...'/>
                    </label>
                </form>

                <Select styles={{
                    singleValue: (base) => ({
                        ...base,
                        padding: 5,
                        borderRadius: 5,
                        // background: colourOptions[4].color,
                        // color: 'white',
                        // display: 'flex',
                    })}} 
                    options={options} placeholder='Filter by Region' isClearable={true} className='block-select'/>

                
            </div>
            
        </>
    );
}