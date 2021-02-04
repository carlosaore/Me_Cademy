import styled from "styled-components";

const Footer = styled.footer`
    background-color : ${props => props.theme.colors.darkgrey};
`

const Container = styled.div`
    width: 80%;
    max-width: 1080px;
    margin: auto;
    text-align: left;
`

const FooterWidget = styled.div`
    padding : 6% 0 6% 0;
    display : flex;
    justify-content : space-between;
    
    
    @media (max-width : 479px) {
    flex-wrap : wrap;
    padding: 12% 0;
    }
`

const FooterWidgets = styled.div`
    width : 380px;

    :last-of-type {
        text-align : right
    }

    @media (max-width : 479px) {
        margin-bottom : 11.5%;
        text-align : center;

        :last-of-type {
            margin-bottom : 0;
            text-align : center
        }
    }
`

const Li = styled.li`
    text-decoration : none;
    list-style : none;

    a {
        color : ${props => props.theme.colors.light}  
    }
`

const SocialMediaIcon = styled.img`
    width : 25px;
    margin-right : 10px;
`

export {
    Footer,
    Container,
    FooterWidgets,
    FooterWidget,
    Li,
    SocialMediaIcon
}