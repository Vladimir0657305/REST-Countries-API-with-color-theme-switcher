import { useContext } from 'react';
import './Home.scss';
import { SearchContext } from '../App';
import { useNavigate } from 'react-router-dom';


export default function Home({ countries }) {
    const { v4: uuidv4 } = require('uuid');
    const { searchNameValue, setSearchNameValue } = useContext(SearchContext);
    let navigate = useNavigate();

    const format = (population) => {
        let temp = population + '';
        let len = temp.length;
        let formatPopulation = temp.split('').map((char, i) => i === len - 4 || i === len - 7 || i === len - 10 ? char + '.' : char).join('');
        return formatPopulation;
    }

    return (
        <div className='home'>
            <div className='homeList'>
                {
                    countries.filter(item =>

                        item.name.toLowerCase().includes(searchNameValue.toLowerCase())
                    ).map(c =>
                        <div className="block-home" key={uuidv4()}>
                            <img key={uuidv4()} src={c['flags']['png']} onClick={() => navigate(`/country/${c.name}`)} />
                            <br />
                            <span key={uuidv4()} onClick={() => navigate(`/country/${c.name}`)} data-key={c.name}>{c.name}</span>
                            <br />
                            <span key={uuidv4()}><b>Population: </b>{format(c.population)}</span>
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