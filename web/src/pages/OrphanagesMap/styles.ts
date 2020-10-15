import styled, { createGlobalStyle } from 'styled-components/macro';
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

export const MapStyle = createGlobalStyle`
    #map-container .map-popup .leaflet-popup-content-wrapper {
        background: rgba(255, 255, 255, .8);
        border-radius: 2rem;
        box-shadow: none;
        padding: .5rem;
    };
    #map-container .map-popup .leaflet-popup-content {
        display: flex;
        justify-content: space-between;
        align-items: center;

        margin: .8rem 1.2rem;
        font-size: 2rem;
        font-weight: bold;
        color: #0089a5;

        position: relative;
    };
    #map-container .map-popup .leaflet-popup-content a {
        display: flex;
        justify-content: center;
        align-items: center; 

        width: 3.5rem;
        height: 3.5rem;
        background: #15c3d6;
        box-shadow: 17.2868px 27.6589px 41.4884px rgba(23, 142, 166, .16);
        border-radius: 1.2rem;

        position: absolute;
        right: 0;
        top: -15%;
    };
    #map-container .map-popup .leaflet-popup-tip-container {
        display: none;
    };
`;