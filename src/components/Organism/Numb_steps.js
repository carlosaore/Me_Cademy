import React from 'react'
import styled from 'styled-components';
import { textData } from '../../data/textData';

const MainDiv = styled.div`
  position:relative;
  background-color: gray;
  display: flex;
  margin: auto;
  position: center;
  margin-top:50px;
  width:70%;
  flex-wrap: wrap;
`;

const NestedDiv = styled.div`
display: flex;
height: 650px;
margin-top:0px;
width: 400px;
flex-wrap: wrap;
margin: auto;
img{
    width:100%;
    height: 35%;
}
p{
    margin: 10px;
}

`;

const Numb_steps = () => {
    return (
        <MainDiv>
           <NestedDiv>
               <img src='https://via.placeholder.com/150'/>
               <p>{textData.aboutNumeric[0].one}</p>
           </NestedDiv>
           <NestedDiv>
               <img src='https://via.placeholder.com/150'/>
               <p>{textData.aboutNumeric[0].two}</p>
           </NestedDiv>
           <NestedDiv>
               <img src='https://via.placeholder.com/150'/>
               <p>{textData.aboutNumeric[0].three}</p>
           </NestedDiv>
           <NestedDiv>
               <img src='https://via.placeholder.com/150'/>
               <p>{textData.aboutNumeric[0].four}</p>
           </NestedDiv>
           <NestedDiv>
               <img src='https://via.placeholder.com/150'/>
               <p>{textData.aboutNumeric[0].five}</p>
           </NestedDiv>
           <NestedDiv>
               <img src='https://via.placeholder.com/150'/>
               <p>{textData.aboutNumeric[0].six}</p>
           </NestedDiv>
        </MainDiv>      
    )
}

export default Numb_steps;
