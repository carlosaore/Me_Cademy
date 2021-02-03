import React, { useContext } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { MyContext } from '../Context/MyContext';

const Ul = styled.ul`
  margin: auto;
  list-style: none;
  display: flex;
  width: 60%;
  flex-flow: row nowrap;
  justify-content: flex-start;
  
 
  li {
    padding: 18px 10px;
    letter-spacing: 0.84px;
    font-family: Arial, Helvetica, sans-serif;
    height: 100%;
    transition: 0.3s ease-in;

    :hover{
      background-color: rgba(249,244,241,1.00);
      background-color: ${(props) => props.open  &&  'white'} ; 
    }
  }
  
  a{
    color: ${(props)=> props.isHover ? 'black' : 'white'};
    color: ${(props) => props.open  &&  'black'} ; 
    
  }

  @media (max-width: 1000px) {

    flex-flow: column nowrap;
    background-color: white;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    width: 100%;
    margin-top: 50px;
    transition: transform 0.3s ease-in-out;

    li {
      color: black;
      height: 25px;
      margin: 5px 15px;
      padding-bottom:25px;
      border-bottom: 5px solid rgba(249,244,241,1.00);
    }
  
  }
 
   .reg_btn{
    display:none; 
    padding-bottom:35px;
    border: none; 
    
    
    @media (max-width: 768px) {
      cursor: pointer;
      display:block;
      height: 40px;
      background-color:#4B9FA5;
     border-radius: 4px;
     text-align: center;
     padding-top: 6px;
     margin-top:25px;
     font-size: 19px;
     color: white;
     transition: background 0.5s ease;
    }

    :hover{
      background-color:#4ccad4;
    }
}

.reg_btn i{
  margin-left: 15px;
  display: inline-block;
  transition: 0.3s ease-in;
  }
  .reg_btn:hover i {
    transform: translateX(50%);
  }
`;

const Logo = styled.img`
    width: 130px;
`;

const LogoDiv =styled.div`
width: 130px;
height: 40px;
margin: 10px auto 10px 70px;


@media (max-width: 1000px) {
  margin: 10px auto 10px 70px;
}

@media (max-width: 768px) {
  margin: 10px auto;
  padding-left: 35px;
}
`

const RegBtn = styled.button`
    cursor: pointer;
    width: 170px;
    height: 40px;
    background-color: ${(props)=> props.isHover ? '#4B9FA5' : 'white'};
    background-color: ${(props) => props.open  &&  '#4B9FA5'} ; 
    border: none;
    border-radius: 50px;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 16px;
    color:  ${(props)=> props.isHover ? 'white' : 'black'};
    color: ${(props) => props.open  &&  'white'} ; 
    letter-spacing: 2px;
    margin-top: 8px;
    margin-right: 70px;
    transition: background 0.5s ease;

    @media (max-width: 768px) {
      display: none;
    }

    :hover{
      background-color:#4ccad4;
    }
`;



const RightNav = () => {

  const {open, setOpen} = useContext(MyContext);
  const context = useContext(MyContext);

  const handleClick=()=>{
    setOpen(!open)
  }
  const handleClickOff=()=>{
    setOpen(false)
  }

  return (
    <>
    <LogoDiv><Link to='/' onClick={()=>handleClickOff()}><Logo src="./images/mecademy logo placeholder.png" /></Link></LogoDiv>
    <Ul open={open}  isHover={context.hover}>
      <li className='reg_btn'>Registration<i class="fas fa-arrow-right"></i></li>
      <li><Link to='/About' onClick={()=>handleClick()}>About</Link></li>
      <li><Link to='/Registration' onClick={()=>handleClick()}>Registration</Link></li>
      <li><Link to='/Coaches' onClick={()=>handleClick()}>Coaches</Link></li>
      <li><Link to='/Program' onClick={()=>handleClick()}>Program</Link></li>
     
    </Ul>
    <RegBtn open={open} isHover={context.hover}>Registration</RegBtn>
    </>
  )
}

export default RightNav;