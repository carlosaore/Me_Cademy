import React from 'react';
import styled from 'styled-components';

const FooterDiv = styled.div`
display: flex;
flex-wrap: wrap;
height:120px ;
background-color: rgba(249,244,241,1.00);
position: relative;
  left: 0;
  bottom: 0;
  width: 100%;


  @media (max-width: 1200px) {
        height: auto;
    }

`;

const Ul = styled.ul`
height:100%;
 display: flex;
 list-style: none;
 margin: auto;
 position: relative;
 margin-left: ${(props)=> props.icon ? 'auto' : '190px'};
 align-items: center;
 flex-wrap: nowrap;

 @media (max-width: 1200px) {
        margin: auto;
    }


 li {
    padding: 18px 10px;
    letter-spacing: 0.84px;
    font-family: 'Big Shoulders Stencil Text', cursive;
    font-size: ${(props)=> props.icon ? '25px' : '18px'};
    transition: 0.3s ease-in;
    cursor: ${(props)=> props.icon ? '' : 'pointer'};
    margin: ${(props)=> props.icon ? '7px' : '35px'};

    i{  cursor: pointer;
       
    
    }

    @media (max-width: 1200px) {
        font-size: ${(props)=> props.icon ? '25px' : '16px'};
        margin:auto;
    }

    @media (max-width: 1000px) {
        font-size: ${(props)=> props.icon ? '25px' : '14px'};
    }

    
    :after {
    background-color:#4B9FA5;
    display: block;
    content: "";
    height: 3px;
    width: 0%;
    -webkit-transition: width .3s ease-in-out;
    -moz--transition: width .3s ease-in-out;
    transition: width .3s ease-in-out;
    }

    :hover:after,
    :focus:after {
        width: ${(props)=> props.icon ? '0%' : '100%'};
}
    
 }
`;




const Footer=()=> {
    return (
        <FooterDiv>
            <Ul>
                <li>Kontakt</li>
                <li>Impressum</li>
                <li>Datenschutz</li>
            </Ul>

            <Ul icon>
                     <li href="https://www.facebook.com/dmitry.piskun.5" target="_blank"><i class="fab fa-facebook"></i></li>
                    <li href="https://www.instagram.com/dmitry_piskun/" target="_blank"><i className="fab fa-instagram" /></li>
                    <li href="https://github.com/DzmitryPS/Currency_project" target="_blank"><i class="fab fa-linkedin"></i></li>
                    <li href="https://github.com/DzmitryPS/Currency_project" target="_blank"><i class="fab fa-twitter"></i></li>
            </Ul>
            
        </FooterDiv>
    )
}

export default Footer