import axios from 'axios';
import { useState, useEffect } from 'react';

import { Header } from './components/Header';
import './App.css';
// import {Main} from './components/Main';
// import {HomePage} from './pages/HomePage';
// import {Details} from './pages/Details';
// import {NotFound} from './pages/NotFound';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const [countries, setCountries] = useState([]);


  return (
    <>
      
      <Main>
        {/* <BrowserRouter> */}
        
          <Header/>
          <Routes>
          <Route path='/' element={<HomePage countries={countries} setCountries={setCountries} />} />
            <Route path='/country/:name' element={<Details />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        {/* </BrowserRouter> */}
      </Main>
    </>
  );
}

export default App;
