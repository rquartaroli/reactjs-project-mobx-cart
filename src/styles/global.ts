import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root{
        --background: ${({ theme }) => theme.COLORS.BACKGROUND};
        --text: ${({ theme }) => theme.COLORS.TITLE};
    }
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html {
        @media (max-width: 1080px) {
            font-size: 93.75%;
        }
        @media (max-width: 720px) {
            font-size: 87.5%;
        }
    }
    body {
        background: var(--background);
        -webkit-font-smoothing: antialiased;
    }
    body, input, textarea, button {
        font-family: sans-serif;
        font-weight: 400;
        color: var(--text);
    }
    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }
    button {
        cursor: pointer;
        color: var(--background);
    }
    a {
        color: inherit;
        text-decoration: none;
        cursor: pointer;
    }
    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }
`;