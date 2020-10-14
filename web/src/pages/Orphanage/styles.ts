import styled from 'styled-components/macro';
import { Link as ReactRouterLink } from 'react-router-dom';

export const Container = styled.div`
    display: flex;
    min-height: 100vh;
`;

export const Inner = styled.main`
    flex: 1;
`;

export const Details = styled.div`
    width: 70rem;
    margin: 6.4rem auto;

    background: #FFFFFF;
    border: 1px solid #D3E2E5;
    border-radius: 2rem;

    overflow: hidden;
`;

export const Image = styled.img`
    width: 100%;
    height: 30rem;
    object-fit: cover;
`;

export const Button = styled.button`
    border: 0;
    height: 8.8rem;
    background: none;
    cursor: pointer;
    border-radius: 2rem;
    overflow: hidden;
    outline: none;
    
    opacity: 0.6;

    &.active {
        opacity: 1;
    };
`;

export const ImageButton = styled.img`
    width: 100%;
    height: 8.8rem;
    object-fit: cover;
`;

export const Images = styled.div`
    display: grid;
    grid-template-columns: repeat(6 ,1fr);
    column-gap: 1.6rem;

    margin: 1.6rem 4rem 0;
`;

export const DetailsContent = styled.div`
    padding: 8rem;
`;

export const Name = styled.h1`
    color: #4D6F80;
    font-size: 5.4rem;
    line-height: 5.4rem;
    margin-bottom: .8rem;
`;

export const Description = styled.p`
    line-height: 2.8rem;
    color: #5C8599;
    margin-top: 2.4rem;
`;

export const MapContainer = styled.div`
    margin-top: 6.4rem;
    background: #E6F7FB;
    border: .1rem solid #B3DAE2;
    border-radius: 2rem;

    .leaflet-container {
        border-bottom: .1rem solid #DDE3F0;
        border-radius: 2rem;
    };
`;

export const DetailsFooter = styled.footer`
    padding: 2rem 0;
    text-align: center;
`;

export const Link = styled(ReactRouterLink)`
    line-height: 2.4rem;
    color: #0089A5;
    text-decoration: none;
`;

export const Hr = styled.hr`
    width: 100%;
    height: .1rem;
    border: 0;
    background: #D3E2E6;
    margin: 6.4rem 0;
`;

export const InstructionTitle = styled.h2`
    font-size: 3.6rem;
    line-height: 4.6rem;
    color: #4D6F80;
`;

export const OpenDetails = styled.div`
    margin-top: 24px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 2rem;

    div {
        padding: 3.2rem 2.4rem;
        border-radius: 2rem;
        line-height: 2.8rem;

        svg {
            display: block;
            margin-bottom: 2rem;
        };
    };
`; 

export const DetailHour = styled.div`
    background: linear-gradient(149.97deg, #E6F7FB 8.13%, #FFFFFF 92.67%);
    border: .1rem solid #B3DAE2;
    color: #5C8599;
`;

export const DetailOpenOnWeekends = styled.div`
    background: linear-gradient(154.16deg, #EDFFF6 7.85%, #FFFFFF 91.03%);
    border: .1rem solid #A1E9C5;
    color: #37C77F;
`;

export const Contact = styled.button`
    margin-top: 6.4rem;

    width: 100%;
    height: 6.4rem;
    border: 0;
    cursor: pointer;
    background: #3CDC8C;
    border-radius: 2rem;
    color: #FFFFFF;
    font-weight: 800;

    display: flex;
    justify-content: center;
    align-items: center;

    transition: background-color 0.2s;

    &:hover {
        margin-right: 1.6rem;
    };

    svg {
        background: #36CF82;
    };
`;