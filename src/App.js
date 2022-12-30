import axios from 'axios';
import { useState, useEffect } from 'react';

import  Header  from './components/Header';
import './App.css';
import Main from './components/Main';
// import {HomePage} from './pages/HomePage';
// import {Details} from './pages/Details';
// import {NotFound} from './pages/NotFound';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Detail from './components/Detail';
import Notfound from './components/Notfound';
import { ALL_COUNTRIES } from './pages/config';

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios.get(ALL_COUNTRIES).then(({ data }) => setCountries(data));
  }, [])
  
  

  return (
    <>
      <Header/>
      <Main/>
      <Routes>
      <Route path='/' element={<Home countries={countries} setCountries={setCountries} />} />
      <Route path='/country/:name' element={<Detail />} />
      <Route path='*' element={<Notfound />} />
      </Routes>
    </>
  );
}

export default App;
