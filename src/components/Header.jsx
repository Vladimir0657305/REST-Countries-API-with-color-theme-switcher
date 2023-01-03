import { IoMoon, IoSunny } from 'react-icons/io5';
import React, { useEffect, useState } from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';
let themeLocalStorage = '';

export default function Header() {
    const [theme, setTheme] = useState(localStorage.getItem('themeLocalStorage') ? localStorage.getItem('themeLocalStorage') : 'Dark');
    // const [themeLocalStorage, setThemeLocalStorage] = useState('');

    useEffect(() => {
                let temp = localStorage.getItem('themeLocalStorage');
                console.log('temp=',temp);
                // console.log(localStorage.getItem('themeLocalStorage'));
                setTheme(temp);
                console.log('theme=', theme);
                document.body.setAttribute('data-theme', temp);
                // setThemeLocalStorage(temp);
                // document.body.setAttribute('data-theme', temp);
            },[]);

    useEffect(() => {
        console.log(theme);
        document.body.setAttribute('data-theme', theme);
        localStorage.setItem('themeLocalStorage',theme);
    }, [theme])

    const changeTheme = () => {
        theme === 'Light' ? (
            setTheme('Dark')
        ) :
            (
                setTheme('Light')
            )

    }
    

    return (
        <div className='container'>
            <div className='menu'>
                <Link to="/"><h3>Where in the world?</h3></Link>

                <span onClick={changeTheme}>
                    {theme === 'Light' ? (
                        <IoSunny size="14px" />
                    ) : (
                        <IoMoon size="18px" />
                    )}
                    {theme} <p>Mode</p></span>
            </div>

        </div>
    );

}