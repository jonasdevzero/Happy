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
    margin: 0 8rem 1rem 8rem;
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
    justify-content: center;
`;