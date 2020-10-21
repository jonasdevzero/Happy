import styled from 'styled-components/macro';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 54.4rem;
    height: 30.1rem;
    background-color: #fff;
    border: 1px solid #DDE3F0;
    border-radius: 2rem;
    margin: 1rem;
`;

export const MapContainer = styled.div`
    width: 100%;
    height: 22.7rem;
    border-radius: 2rem;
`;

export const Info = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
`;

export const OrphanageName = styled.h2`
    color: #4D6F80;
    margin-left: 2rem;
    font-weight: 700;
    line-height: 3.4rem;
    font-size: 2.4rem;
`;

export const ButtonWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 2rem;
`;

export const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 4.8rem;
    height: 4.8rem;
    border: none;
    margin: 0 .5rem;
    border-radius: 1.6rem;
    cursor: pointer;
`;