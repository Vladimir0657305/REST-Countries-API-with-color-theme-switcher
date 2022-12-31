import { useContext, useState } from 'react';
import './Home.scss';
import { SearchContext } from '../App';


export default function Home({ countries, setCountries }){
    const { v4: uuidv4 } = require('uuid');
    const { searchNameValue, setSearchNameValue } = useContext(SearchContext);
    const { region, setRegion } = useContext(SearchContext);
    // console.log(countries[0]['flags']['png']);
    // console.log(countries[0]);
    // console.log(region.value);
    
    const onClickDetails = () => {
        
    }

    return(
        <div className='home'>
            <div className='homeList'>
                {
                    countries.filter(item => 
                        
                        item.name.toLowerCase().includes(searchNameValue.toLowerCase()) 
                    ).map(c => 
                    <div className="block-home" key={uuidv4()}>
                        <img key={uuidv4()} src={c['flags']['png']} />
                        <br/>
                        <span key={uuidv4()} onClick={onClickDetails}><b>{c.name}</b></span>
                        <br />
                        <span key={uuidv4()}><b>Population: </b>{c.population}</span>
                        <br />
                        <span key={uuidv4()}><b>Region: </b>{c.region}</span>
                        <br />
                        <span key={uuidv4()}><b>Capital: </b>{c.capital}</span>
                    </div>
                    
                )
                }
            </div>
        </div>
    );
}