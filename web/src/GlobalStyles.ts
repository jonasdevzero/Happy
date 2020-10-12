import { createGlobalStyle } from 'styled-components'

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