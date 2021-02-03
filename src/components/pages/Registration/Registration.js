import React from 'react'
import MetaDecorator from '../../MetaDecorator/MetaDecorator';
import styled from 'styled-components';


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
            <p>Hola! Register here</p>

            <RegDivOnPage>
            </RegDivOnPage>
        </div>
    )
}

export default Registration;
