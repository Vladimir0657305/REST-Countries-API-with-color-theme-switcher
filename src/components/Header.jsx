import styled from "styled-components";
import {useState, useEffect} from 'react';
import { Container } from "./Container";
import { IoMoon, IoMoonOutline, IoSunnyOutline, IoSunny } from 'react-icons/io5';
import {Link} from 'react-router-dom';

const HeaderEl = styled.header`
    box-shadow: var(--shadow);
    background-color: var(--colors-ui-base);
`;

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 0;
`;

const Title = styled(Link).attrs({
    to: "/",
})`
    color: var(--colors-text);
    font-size: var(--fs-sm);
    text-decoration: none;
    font-weight: var(--fw-bold);
    text-transform: capitalize;
`;

const ModeSwitcher = styled.div`
    color: var(--colors-text);
    font-size: var(--fs-sm);
    cursor: pointer;
    font-weight: var(--fw-bold);
`;



export const Header = () => {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

    useEffect(() => {
        document.body.setAttribute('data-theme', theme);
    }, [theme])

    return(
        <HeaderEl>
            <Container>
                <Wrapper>
                    <Title>Where isi the world?</Title>
                    <ModeSwitcher onClick={toggleTheme}>
                        {theme === 'light' ? (
                            <IoSunny size="18px" />
                        ) : (
                            <IoMoon size="14px"/> 
                        )}
                        <span style={{marginLeft: '0.5rem'}}> {theme} Theme</span>
                    </ModeSwitcher>
                </Wrapper>
            </Container>
        </HeaderEl>
    );
}