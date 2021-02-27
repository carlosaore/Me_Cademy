import React, { useContext } from 'react';
import styled from 'styled-components';
import Burger from './Burger';
import { MyContext } from '../context/MyContext';

const Nav = styled.nav`
	position: fixed;
	width: 100%;
	height: 80px;
	display: flex;
	justify-content: space-between;
	z-index: 20;
	transition: background 0.5s ease;
	background-color: ${(props) => props.theme.colors.light};
	box-shadow: 0px 0px 15px 1px #5f737d;
	.logo {
		padding: 15px 0;
	}
`;

const Navbar = () => {
	const { open, setOpen } = useContext(MyContext);
	const context = useContext(MyContext);

	if (false) setOpen(); // added to remove warning that we declare setOpen but don't use it. It shouldn't be a useState hook really.

	const handleMouseOver = () => {
		context.setHover(!context.hover);
	};

	return (
		<Nav
			open={open}
			isHover={context.hover}
			className="navbar"
			onMouseOver={() => handleMouseOver()}
			onMouseOut={() => handleMouseOver()}
		>
			<div className="logo"></div>
			<Burger />
		</Nav>
	);
};

export default Navbar;
