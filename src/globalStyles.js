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

    // Fonts (Muli)

    @import url("https://p.typekit.net/p.css?s=1&k=wbq3ksr&ht=tk&f=15780.15782.37496.37497.42302&a=58405195&app=typekit&e=css");

    @font-face {
    font-family:"muli";
    src:url("https://use.typekit.net/af/437da9/00000000000000007735a0e5/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i4&v=3") format("woff2"),url("https://use.typekit.net/af/437da9/00000000000000007735a0e5/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i4&v=3") format("woff"),url("https://use.typekit.net/af/437da9/00000000000000007735a0e5/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i4&v=3") format("opentype");
    font-display:auto;font-style:italic;font-weight:400;
    }

    @font-face {
    font-family:"muli";
    src:url("https://use.typekit.net/af/7fe570/00000000000000007735a0ee/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3") format("woff2"),url("https://use.typekit.net/af/7fe570/00000000000000007735a0ee/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3") format("woff"),url("https://use.typekit.net/af/7fe570/00000000000000007735a0ee/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3") format("opentype");
    font-display:auto;font-style:normal;font-weight:400;
    }

    @font-face {
    font-family:"muli";
    src:url("https://use.typekit.net/af/21b2f2/00000000000000007735a100/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i7&v=3") format("woff2"),url("https://use.typekit.net/af/21b2f2/00000000000000007735a100/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i7&v=3") format("woff"),url("https://use.typekit.net/af/21b2f2/00000000000000007735a100/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i7&v=3") format("opentype");
    font-display:auto;font-style:italic;font-weight:700;
    }

    @font-face {
    font-family:"muli";
    src:url("https://use.typekit.net/af/b0bf15/00000000000000007735a103/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff2"),url("https://use.typekit.net/af/b0bf15/00000000000000007735a103/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff"),url("https://use.typekit.net/af/b0bf15/00000000000000007735a103/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("opentype");
    font-display:auto;font-style:normal;font-weight:700;
    }

    @font-face {
    font-family:"muli";
    src:url("https://use.typekit.net/af/d22e78/00000000000000007735a109/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n9&v=3") format("woff2"),url("https://use.typekit.net/af/d22e78/00000000000000007735a109/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n9&v=3") format("woff"),url("https://use.typekit.net/af/d22e78/00000000000000007735a109/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n9&v=3") format("opentype");
    font-display:auto;font-style:normal;font-weight:900;
    }

    .tk-muli { font-family: "muli",sans-serif; }

`;

export default GlobalStyle;