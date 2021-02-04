import React from 'react'
import MetaDecorator from '../../MetaDecorator/MetaDecorator';
import styled from 'styled-components';
import Quote from '../../molecules/Quote';
import * as typeformEmbed from '@typeform/embed';
import TypeformRight from '../../Organism/reg_form';

const TopDiv = styled.div`
  position:relative;
  height: 440px;
  width:100%;
  background-image: url("/images/placeholder.png");
  background-repeat: no-repeat;
  background-position:center;
  background-size: cover;
  margin-top: -55px;
  z-index: -1;
`;

const RegDivOnPage = styled.div`
 height: 400px;
  width: 80%;
  margin: auto;
  margin-top: 50px;
  display: block;
  position: relative;
`;


const Registration = () => {
    return (
        <div>
            <MetaDecorator
             description='Registration'
             title='Register Here'
             />
              <TopDiv>
             </TopDiv>
            <Quote />
            <p>Hola! Register here</p>

            <RegDivOnPage>
            <TypeformRight  />
            </RegDivOnPage>

        </div>
    )
}

export default Registration;
