import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Info from "../components/Info";
import { searchByCountry } from "./config";
import { IoArrowBackOutline } from 'react-icons/io5';
import './Detail.scss';

export default function Detail(match) {
    const { name } = useParams();
    let navigate = useNavigate();
    const [country, setCountry] = useState(null);
    // console.log(match.params);
    console.log(country);
    
    useEffect(() => {
        axios.get(searchByCountry(name)).then(
            ({ data }) => setCountry(data[0])
        )
    }, [name])
    
    return (
        <div className="detail">
            <button onClick={() => navigate(-1)} className='detBut'>
                <IoArrowBackOutline /> <p>Back</p>
            </button>
            {country && (<Info navigate={navigate} {...country} />)}
        </div>
    );
}