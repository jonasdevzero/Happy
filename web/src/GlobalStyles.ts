import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    };

    html {
        font-size: 62.5%;
    };

    body {
        color: #fff;
        background-color: #ebf2f5;
    };

    body, input, button, textarea {
        font: 600 1.8rem Nunito, sans-serif;
    };
`;

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    background: linear-gradient(329.54deg, #29B6D1 0%, #00C7C7 100%);
`;