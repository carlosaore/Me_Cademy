import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none !important;
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