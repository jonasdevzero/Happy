import styled from 'styled-components/macro';
import { Link as ReactRouterLink } from 'react-router-dom';

import landing from '../../images/icons/landing.svg';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    background: linear-gradient(329.54deg, #29B6D1 0%, #00C7C7 100%);
`;

export const Inner = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-direction: column;
    width: 100%;
    max-width: 110rem;
    height: 100%;
    max-height: 68rem;
    position: relative;
    background: url(${landing}) no-repeat 80% center;
`;

export const Header = styled.header`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
`;

export const HeaderContainer = styled.div`
    display: flex;
`;

export const Logo = styled.img``;

export const Content = styled.main`
    max-width: 35rem;
`;

export const Title = styled.h1`
    font-size: 7.6rem;
    font-weight: 900;
    line-height: 7rem;
`;

export const SubTitle = styled.p`
    margin-top: 4.8rem;
    font-size: 2.4rem;
    line-height: 3.4rem;
`;

export const Location = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    margin-left: 7rem;
`;

export const City = styled.strong`
    font-weight: 800;
`;

export const State = styled.span``;

export const Link = styled(ReactRouterLink)`
    position: absolute;
    bottom: 0;
    right: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 8rem;
    height: 8rem;
    background-color: #ffd666;
    border-radius: 3rem;
    transition: background-color .2s;
    cursor: pointer;

    &:hover {
        background-color: #96feff;
    }
`;

export const AccessRestrict = styled(ReactRouterLink)`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 22rem;
    height: 6rem;
    border-radius: 2rem;
    background-color: #12D4E0;
    text-decoration: none;
    color: #FFF;
    transition: background-color ease .3s;

    &:hover {
        background: #96FEFF;
        color: #15C3D6;
    }; 
`;