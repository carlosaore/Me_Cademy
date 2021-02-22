import React, { useContext } from 'react';
import styled from 'styled-components';
import RightNav from './RightNav';
import { MyContext } from '../context/MyContext';

const StyledBurger = styled.div`
  cursor: pointer;
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 22px;
  right: 22px;
  z-index: 20;
  display: none;

  @media (max-width: 1000px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => open  ? '#ccc' : '#333'};      
    
    transform-origin: 1px;
    transition: all 0.3s linear;

    &:nth-child(1) {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    &:nth-child(2) {
      transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${({ open }) => open ? 0 : 1};
    }

    &:nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }

    @media (max-width: 1000px) {
      background-color : ${props => props.theme.colors.meCademyGrey}
  }
  }
`;

const Burger = () => {
  const {open, setOpen} = useContext(MyContext);
  const context = useContext(MyContext);
  return (
    <>
      <StyledBurger isHover={context.hover} open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <RightNav open={open}/>
    </>
  )
}

export default Burger;