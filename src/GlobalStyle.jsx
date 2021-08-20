import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    body{
        display: grid;
        place-items: center;
        height: 100vh;
    }

    .App{
        width: 500px;
        height: 600px;
        border-radius: 16px;
        background: #f2f2f2;
        display: grid;
        place-items: center;
    }
`