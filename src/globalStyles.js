import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    // style reset
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }

    // body font and general styles
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

    // carousel arrows
    .slick-prev { 
        top: 37.5%;

        :before {
            opacity: 1;
            color: ${(props) => props.theme.colors.meCademyGrey};
            content : "❮";
        }
    }

    .slick-next {    
        top: 37.5%;

        :before {
            opacity: 1;
            color: ${(props) => props.theme.colors.meCademyGrey};
            content : "❯";
        }
    }

    // modal styles
    .modal {
        position: absolute;
        background: #fff;
        overflow: auto;
        -webkit-overflow-scrolling: touch;
        border-radius: 4px;
        outline: none;
        padding: 20px;

        @media (min-width : ${(props) => props.theme.largeViewport.size}) {
            top: 30%;
            left: 30%;
            right: 30%;
        }

        @media (min-width : ${(props) =>
					props.theme.mediumViewport.minSize}) and (max-width : ${(props) =>
	props.theme.mediumViewport.maxSize}) {
            top: 30%;
            left: 20%;
            right: 20%;
        }

        @media (max-width : ${(props) => props.theme.smallViewport.size}) {
            top: 30%;
            left: 9%;
            right: 9%;
        }
    }

    .overlay {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(255, 255, 255, 0.5)
    }

`;

export default GlobalStyle;
