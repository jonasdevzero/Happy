import styled from 'styled-components/macro';

export const Container  = styled.div`
    display: flex;
    flex: 1;
    
`;

export const Content = styled.div`
    flex: 1;
    margin-top: 7rem;
    margin-left: 11.2rem;
`;

export const OrphanagesContainer = styled.div`
    display: flex; 
    flex-direction: column;
    flex: 1;
`;

export const TitleContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 9rem 1rem 9rem;
    padding-bottom: 2rem;
    border-bottom: solid .1rem #D3E2E5;
`;

export const Title = styled.h1`
    font-size: 3.2rem;
    font-weight: 700;
    line-height: 3.4rem;
    color: #4D6F80;
`;

export const OrphanagesTotal = styled.p`
    color: #8FA7B2;
    font-size: 1.6rem;
    line-height: 2.2rem;
`;

export const OrphanagesContent = styled.div`
    display: flex;
    flex: 1;
    flex-wrap: wrap;
    margin: 2rem 8rem;
    justify-content: flex-start;
`;

export const NotFoundContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 70vh;
`;

export const NotFoundContent = styled.div`
    display: flex;
    flex-direction: column;
`;

export const NotFoundMessage = styled.h2`
    font-size: 2.4rem;
    line-height: 3.4rem;
    color: #8FA7B2;
    text-align: center;
    margin-top: 1rem;
`;

export const DeletedContainer = styled.div`
    display: flex;
    background-color: #FF669D;
    flex: 1;
    height: 100vh;  
    align-items: center;
    justify-content: center;
`;

export const DeletedInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 10rem;
`;

export const DeletedTitle = styled.h1`
    font-weight: 800;
    font-size: 8rem;
    line-height: 8rem;
    text-align: center;
    margin-bottom: 3rem;
`;

export const DeletedSubtitle = styled.h2`
    font-size: 2.4rem;
    line-height: 3.4rem;
    text-align: center;
    margin-bottom: 4rem;
`;

export const DeletedImage = styled.img`
    object-fit: contain;
    height: auto;
`;

export const DeletedButton = styled.button`
    width: 24.3rem;
    height: 6.4rem;
    border-radius: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    cursor: pointer;
    background-color: #D6487B;
    color: #fff;
`;