import styled from 'styled-components/macro';
import { Link as ReactRouterLink } from 'react-router-dom';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    position: relative;

    .leaflet-container {
        z-index: 1;
    };
`;

export const Link = styled(ReactRouterLink)`
    position: absolute;
    right: 4rem;
    bottom: 4rem;

    display: flex;
    align-items: center;
    justify-content: center;
    width: 6.4rem;
    height: 6.4rem;
    border-radius: 2rem;
    background-color: #15c3d6;
    transition: background-color .2s;
    z-index: 2;

    &:hover {
        background-color: #17d6eb;
    }
`;
