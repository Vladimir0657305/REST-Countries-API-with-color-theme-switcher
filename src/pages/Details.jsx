import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { IoArrowBack } from 'react-icons/io5';
import { useNavigate, useParams } from 'react-router-dom';
import { searchByCountry } from './config';
import { Button } from '../components/Button';
import { Info } from '../components/Info';


export const Details = (match) => {
    const {name} = useParams();
    let navigate = useNavigate();
    const [country, setCountry] = useState(null);

    // console.log(country);

    useEffect(() => {
        axios.get(searchByCountry(name)).then(
            ({data}) => setCountry(data[0])
        )
    }, [name])


    // return <div>Details {match.params.name}</div>;
    return <div>
        <Button onClick={() => navigate(-1)}>
            <IoArrowBack/> Back
        </Button>
        {country && (<Info navigate={navigate} {...country} />)}
        
        
        </div>;
    
}
