import axios from 'axios';
import { useState, useEffect, createContext } from 'react';

import  Header  from './components/Header';
import './App.css';
import Main from './components/Main';
// import {HomePage} from './pages/HomePage';
// import {Details} from './pages/Details';
// import {NotFound} from './pages/NotFound';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Detail from './components/Detail';
import Notfound from './components/Notfound';
import { ALL_COUNTRIES, searchByRegion } from './pages/config';

export const SearchContext = createContext('');

function App() {
  const [countries, setCountries] = useState([]);
  const [searchNameValue, setSearchNameValue] = useState('');
  const [region, setRegion] = useState('');
  // console.log(region);


  
  useEffect(() => {
    {
      region != null ?
        axios.get(searchByRegion(region)).then(({ data }) => setCountries(data)) 
      : ''
    }
  }, [region])
  
    useEffect(() => {
    axios.get(ALL_COUNTRIES).then(({ data }) => setCountries(data));
  }, [])

  return (
    <>
      <SearchContext.Provider value={{ searchNameValue, setSearchNameValue, region, setRegion }}>
        <Header/>
        <Main/>
        <Routes>
          <Route path='/' element={<Home countries={countries} setCountries={setCountries} />} />
          <Route path='/country/:name' element={<Detail />} />
          <Route path='*' element={<Notfound />} />
        </Routes>
      </SearchContext.Provider>
    </>
  );
}

export default App;
