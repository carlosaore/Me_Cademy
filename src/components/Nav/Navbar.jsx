import React, { useContext } from 'react';
import styled from 'styled-components';
import Burger from './Burger';
import { MyContext } from '../context/MyContext';

const Nav = styled.nav`
  position: relative;
  width: 100%;
  height: 55px;
  padding: 0 100px 0 10px;
  display: flex;
  justify-content: space-between;
  z-index: 20;
  transition: background 0.5s ease;
  background-color: ${(props)=> props.isHover && 'white'};
  background-color: ${(props) => props.open  &&  'white'} ; 

  .logo {
    padding: 15px 0;
  }

`

const Navbar = () => {
  const {open, setOpen} = useContext(MyContext);
  const context = useContext(MyContext);
  

  const handleMouseOver= ()=>{
    context.setHover(!context.hover)
  }

  return (
    
    <Nav open={open} isHover={context.hover} className='navbar' onMouseOver={()=>handleMouseOver()} onMouseOut={()=>handleMouseOver()}>
      <div className="logo">
      </div>
      <Burger />
    </Nav>
    
    
  )
}

export default Navbar;
