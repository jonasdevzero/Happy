import styled from 'styled-components/macro';

export const Container = styled.div`
    display: flex;
`; 

export const Inner = styled.main`
    flex: 1;
`;

export const ConfirmContainer = styled.div`
    display: flex;
    background-color: #37C77F;
    flex: 1;
    height: 100vh;  
    align-items: center;
    justify-content: center;
`;

export const ConfirmInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 10rem;
    max-width: 40rem;
`;

export const ConfirmTitle = styled.h1`
    font-weight: 800;
    font-size: 8rem;
    line-height: 8rem;
    text-align: center;
    margin-bottom: 4rem;
`;

export const ConfirmSubtitle = styled.h2`
    font-size: 2.4rem;
    line-height: 3.4rem;
    text-align: center;
    margin-bottom: 5rem;
`;

export const ConfirmImage = styled.img`
    object-fit: contain;
    height: auto;
`;

export const ConfirmButton = styled.button`
    width: 24.3rem;
    height: 6.4rem;
    border-radius: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    cursor: pointer;
    background-color: #31B272;
    color: #fff;

    &:hover {
        background-color: #3BD689;
    };
`;