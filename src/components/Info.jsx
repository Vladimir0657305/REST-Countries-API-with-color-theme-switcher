import axios from 'axios';
import { useEffect, useState } from 'react';
import { filterByCode } from '../pages/config';
import './Info.scss';


export default function Info(props) {
    const { v4: uuidv4 } = require('uuid');
    const {
        name,
        nativeName,
        flag,
        capital,
        population,
        region,
        subregion,
        topLevelDomain,
        currencies = [],
        languages = [],
        borders = [],
        navigate
    } = props;
    const [neighbour, setNeighbour] = useState([]);

    useEffect(() => {
        borders.length && axios.get(filterByCode(borders)).then(({ data }) => setNeighbour(data))
    }, [borders])

    let temp = population + '';
    let len = temp.length;
    let formatPopulation = temp.split('').map((char, i) => i === len - 4 || i === len - 7 || i === len - 10 ? char + '.' : char).join('');

    return (
        <div className="info">
            <img src={flag} alt={name}  />
            <div className='info-block'>
                <ul>
                    <li><h1 ><b>{name}</b></h1></li>
                    <li><b>Native Name:</b> {nativeName}</li>
                    <li><b>Population:</b> {formatPopulation}</li>
                    <li><b>Region:</b> {region}</li>
                    <li><b>Sub Region:</b> {subregion}</li>
                    <li><b>Capital:</b> {capital}</li>
                </ul>
                <ul>
                    <li><b>Top Level Domain:</b> {topLevelDomain.map(d => (<span key={d}>{d}</span>))}</li>
                    <li><b>Currency:</b> {currencies.map(c => (<span key={c.code}>{c.name}</span>))}</li>
                    <li><b>Languages:</b> {languages.map(l => (<span key={uuidv4()}>{l['name'] + ', '}</span>))}</li>
                </ul>

            </div>
            {
                borders.length > 0 &&
                <span className='clLi'><b>Border countries: </b>
                    {
                        neighbour.map(b => <button key={uuidv4()} className='infoButton' onClick={() => navigate(`/country/${b.name}`)}>{b.name}</button>)
                    }
                </span>
            }
            <div className='lastInfo'>.</div>
        </div>
    );
}