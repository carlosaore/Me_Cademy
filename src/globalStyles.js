import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }

    body {
        font-family : muli, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
    }

    p,
    span,
    a,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-family: Muli;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        line-height: 1.3em;
    }

    h2 {
        padding-bottom: 30px;
    }

    h3 {
        margin-top: 20px;
    }

    a:hover {
        cursor: pointer !important;
    }


    .fa-twitter:hover{
    color:#1DA1F2;
    }
    .fa-linkedin:hover{
    color:#0072b1;
    }
    .fa-instagram:hover{
    border-radius: 40px;
    background: #d6249f;
    background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%);
    box-shadow: 0px 3px 10px rgba(0,0,0,.25);
    }
    .fa-facebook:hover{
    color: #3b5998;
    }
`;

export default GlobalStyle;