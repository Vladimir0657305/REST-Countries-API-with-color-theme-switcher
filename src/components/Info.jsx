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
        lenguages = [],
        borders = [],
        navigate
    } = props;
    console.log(borders);
    return(
        <div className="info">
            <img src={flag} alt={name} />
            <div className='info-block'>
                <ul>
                    <li><h1 ><b>{name}</b></h1></li>
                    <li><b>Native Name:</b> {nativeName}</li>
                    <li><b>Population:</b> {population}</li>
                    <li><b>Region:</b> {region}</li>
                    <li><b>Sub Region:</b> {subregion}</li>
                    <li><b>Capital:</b> {capital}</li>
                    {/* <li className='clLi'><b>Border countries: </b>{
                        borders.map(b => <button>{b}</button> )
                        }</li> */}
                </ul>
                <ul>
                    <li><b>Top Level Domain:</b> {topLevelDomain.map(d => (<span key={d}>{d}</span>))}</li>
                    <li><b>Currency:</b> {currencies.map(c => (<span key={c.code}>{c.name}</span>))}</li>
                    <li><b>Top Level Domain:</b> {topLevelDomain.map(l => (<span key={l}>{l}</span>))}</li>
                </ul>
                
            </div>
            <span className='clLi'><b>Border countries: </b>
            {
                borders.map(b => <button key={uuidv4()}>{b}</button>)
            }
            </span>
        </div>
    );
}