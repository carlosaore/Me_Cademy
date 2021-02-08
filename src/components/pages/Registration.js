import React from 'react'
import MetaDecorator from '../metadecorator/MetaDecorator';
import styled from 'styled-components';
import Quote from '../molecules/Quote';
import * as typeformEmbed from '@typeform/embed';
import TypeformRight from '../organism/reg_form';
import Popup from '../organism/Popup_form';


//TopDivR
const ButtonBox = styled.div`
  height: 400px;
  width: 80%;
  margin: auto;
  margin-top: 50px;
  padding-top: 200px;
  display: block;
  position: relative;
  background-color: white;
  border: 1px solid black;
`;

//CenterButtonR
const CenterButton = styled.div`
  height: 200px;
  width: 80%;
  margin: auto;
  padding-top: 40px;
  text-align: center;
  display: block;
  position: relative;
  background-color: grey;
`;

const TextBox = styled.div`
    height: "100px";
    margin-top: "3px";
    padding-bottom: 5px;
    border: "5px solid black";
    display: "flex";
    color: "white";
`;



const BoxAroundTypeform = styled.div`
  height: 500px;
  width: 80%;
  margin: auto;
  display: block;
  position: relative;
  background-color: lightgrey;
  border: 1px solid black;
  margin-bottom: 50px;
`;

const TextBoxForm = styled.div`
    height: 100px;
    width: 80%;
    margin: auto;
    padding-top: 100px;
    padding-bottom: 100px;
    display: block;
    position: relative;
    background-color: "white";
    text-align: center;
    /* border: 1px solid black; */
`;

const RegDivOnPage = styled.div`
  border: 3px solid #e95160;
  height: 250px;
  width: 80%;
  margin: auto;
  margin-top: 0px;
  padding-top: 200px;
  display: block;
  position: relative;
  background-color: lightgrey;
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
            
            <ButtonBox>
              <CenterButton>
                <TextBox><h1>MeCademy</h1><p>Erfolgreich bewerben!</p></TextBox>
                <Popup />
              </CenterButton> 
            </ButtonBox>

            <BoxAroundTypeform>
              <TextBoxForm><p>Chocolate bar sweet powder gummi bears dessert macaroon fruitcake. Caramels donut macaroon. Marzipan soufflé tart bonbon sweet cupcake.</p></TextBoxForm>
                <RegDivOnPage>
                  <TypeformRight />
                </RegDivOnPage>
            </BoxAroundTypeform>

           

        </div>
    )
}

export default Registration;
