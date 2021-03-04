import styled from 'styled-components';
import Ul from '../atoms/Ul';

const Numbered = styled(Ul)`
    list-style-type: none;
    padding: 0;
    margin: 0;
    display: table; 
    margin: 0 auto;
    text-align: left;

    .one {
        background: url("./images/one.png") no-repeat left;
        background-size: 30px 30px;
        padding: 10px 0 5px 44px;
    }

    .two {
        background: url("./images/two.png") no-repeat left;
        background-size: 30px 30px;
        padding: 10px 0 5px 44px;
    }

    .three {
        background: url("./images/three.png") no-repeat left;
        background-size: 30px 30px;
        padding: 10px 0 5px 44px;
    }

    .four {
        background: url("./images/four.png") no-repeat left;
        background-size: 30px 30px;
        padding: 10px 0 5px 44px;
    }

    li:last-of-type {
        @media (min-width : ${props => props.theme.largeViewport.size}) {
        margin-bottom : ${props => props.theme.largeViewport.margin}
        }

        @media (min-width : ${props => props.theme.mediumViewport.minSize}) and (max-width : ${props => props.theme.mediumViewport.maxSize}) {
            margin-bottom : ${props => props.theme.mediumViewport.margin}
        }

        @media (max-width : ${props => props.theme.smallViewport.size}) {
            margin-bottom : ${props => props.theme.smallViewport.margin}
        }  
    }
`

export default Numbered;