import { IoMoon, IoMoonOutline, IoSunnyOutline, IoSunny } from 'react-icons/io5';
import React, {useEffect, useState} from 'react';
import './Header.scss';

export default function Header() {
    const [theme, setTheme] = useState('Dark');
    const [themeSvg, setThemeSvg] = useState(<IoMoon />);
    // const ModeSwitcher = <IoMoon />;

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

    return(
        <div className='container'>
            <div className='menu'>
                <h3>Where in the world?</h3>
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