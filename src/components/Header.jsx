import { IoMoon, IoSunny } from 'react-icons/io5';
import React, { useEffect, useState } from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';

export default function Header() {
    const [theme, setTheme] = useState('Dark');

    useEffect(() => {
        document.body.setAttribute('data-theme', theme);
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