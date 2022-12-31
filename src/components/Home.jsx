import './Home.scss';

export default function Home({ countries, setCountries }){
    const { v4: uuidv4 } = require('uuid');
    // console.log(countries[0]['flags']['png']);
    // console.log(countries[0]);
    const onClickDetails = () => {
        
    }

    return(
        <div className='home'>
            <div className='homeList'>
                {
                // countries.map(c => (c['flags']['png']))
                countries.map(c => 
                    <div className="block-home">
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