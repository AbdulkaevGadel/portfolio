import {createGlobalStyle} from "styled-components";
import {theme} from "./theme/Theme.ts";


export const GlobalStyle = createGlobalStyle`
    
    *,
    *::before,
    *::after {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body {
        font-family: "Nunito", -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color:${theme.colors.primaryBg};
        color: ${theme.colors.fontPrimary };
    }

    ul {
        padding: 0;
    }

    li {
        list-style-type:none
    }

    h3 {
        margin: 0;
    }
    
    a {
        text-decoration: none;
        color: ${theme.colors.fontPrimary};
    }
    
    button {
        border: none;
        background-color: red;
        
    }
    
    p{
        margin: 0;
    }
    
    label {
        font-size: 16px;
        color: ${theme.colors.fontPrimary};
        margin-bottom: 8px;
        
    }
    
    input {
        min-height: 40px;
        margin-bottom: 24px;
        border: 1px solid #e8ecf4;
        border-radius: 8px;
    }
    
    textarea {
        min-height: 160px;
        margin-bottom: 24px;
        border: 1px solid #e8ecf4;
        border-radius: 8px;
        resize: none;
    }
    
    
`