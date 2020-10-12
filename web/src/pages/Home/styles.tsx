import styled from 'styled-components/macro';

import landing from '../../images/landing.svg';

export const Container = styled.div`
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
    position: absolute;
    top: 0;
    right: 0;

    display: flex;
    flex-direction: column;
    text-align: right;
`;

export const City = styled.strong`
    font-weight: 800;
`;

export const State = styled.span``;

export const Link = styled.a`
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