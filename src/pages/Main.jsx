import React, { useContext, useEffect, useState } from 'react';
import Select from 'react-select'
import { IoSearch } from 'react-icons/io5';

import './Main.scss';
import { SearchContext } from '../App';

const options = [
    { value: 'Africa', label: 'Africa' },
    { value: 'Americas', label: 'America' },
    { value: 'Asia', label: 'Asia' },
    { value: 'Europe', label: 'Europe' },
    { value: 'Oceania', label: 'Oceania' },
];

export default function Main() {
    const { region, setRegion } = useContext(SearchContext);
    const { searchNameValue, setSearchNameValue } = useContext(SearchContext);
    const [selectVal, setSelectVal] = useState('');


    const onClickChangeSearch = (event) => {
        event.preventDefault();
        setSearchNameValue(event.target.value);
    }

    useEffect(() => {
        const regionValue = selectVal?.value || undefined;
        setRegion(regionValue);
    }, [selectVal?.value]);


    return (
        <>
            <div className='block-input'>
                <form className='inp'>
                    <label>
                        <IoSearch styles={{ width: '300px' }} />
                        <input value={searchNameValue} onChange={onClickChangeSearch} name="name" type='search' placeholder='Search for a country...' />
                    </label>
                </form>

                <Select
                    classNamePrefix='selectStyle'
                    styles={{
                        control: (baseStyles, state) => ({
                            ...baseStyles,
                            borderColor: 'var(--colors-ui-base)',
                            borderColor: state.isHover ? 'var(--colors-ui-base)' : 'var(--colors-ui-base)',
                        }),
                    }}
                    onChange={setSelectVal}
                    options={options} placeholder='Filter by Region' isClearable={true} className='block-select' />
            </div>
        </>
    );
}