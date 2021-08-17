import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html{
        height: 100%;
    }
    body {
        background: url("/arena.jpg");
        background-repeat: no-repeat;
        background-position: center;
        background-size: 100vw;
        background-attachment: fixed;
        overflow-x: auto;
    }

`;