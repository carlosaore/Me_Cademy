import React, { useContext } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { MyContext } from '../context/MyContext';

const Ul = styled.ul`
	margin: auto;
	list-style: none;
	display: flex;
	width: 60%;
	flex-flow: row nowrap;
	justify-content: flex-start;

	li {
		padding: 25px 25px;
		letter-spacing: 0.84px;
		font-weight: bolder;
		height: 100%;
		transition: 0.3s ease-in;
	}

	a {
		color: ${(props) => props.theme.colors.meCademyTextGrey};
		text-decoration: none;
	}

	a:hover {
		color: ${(props) => props.theme.colors.meCademySalmon};
	}

	.underline {
		border-bottom: 2px solid ${(props) => props.theme.colors.meCademyTextGrey};

		:hover {
			border-bottom: 2px solid ${(props) => props.theme.colors.meCademySalmon};
		}
	}

	@media (max-width: 1000px) {
		flex-flow: column nowrap;
		background-color: white;
		position: fixed;
		transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
		top: 0;
		right: 0;
		width: 100%;
		margin-top: 80px;
		padding: 55px 0 80px 0;
		transition: transform 0.3s ease-in-out;
		text-transform: uppercase;

		li {
			margin: 0 auto 0 auto;
			padding-bottom: 25px;
		}
	}

	.reg_btn {
		display: none;
		padding-bottom: 35px;
		border: none;

		@media (max-width: 768px) {
			cursor: pointer;
			display: block;
			height: 40px;
			background-color: #4b9fa5;
			border-radius: 4px;
			text-align: center;
			padding-top: 6px;
			margin-top: 25px;
			font-size: 19px;
			color: white;
			transition: background 0.5s ease;
		}

		:hover {
			background-color: #4ccad4;
		}
	}

	.reg_btn i {
		margin-left: 15px;
		display: inline-block;
		transition: 0.3s ease-in;
	}

	.reg_btn:hover i {
		transform: translateX(50%);
	}
`;

const Logo = styled.img`
	height: 55px;
`;

const LogoDiv = styled.div`
	margin: auto auto auto 70px;

	@media (max-width: 1000px) {
		margin: auto auto auto 70px;
	}

	@media (max-width: 768px) {
		margin: auto auto;
	}
`;

const RightNav = () => {
	const { open, setOpen } = useContext(MyContext);
	const context = useContext(MyContext);

	const handleClick = () => {
		setOpen(!open);
	};
	const handleClickOff = () => {
		setOpen(false);
	};

	return (
		<>
			<LogoDiv>
				<NavLink to="/" onClick={() => handleClickOff()}>
					<Logo src="./images/mecademy Logo Kopie reexported.png" />
				</NavLink>
			</LogoDiv>
			<Ul open={open} isHover={context.hover}>
				<li>
					<NavLink
						to="/About"
						activeClassName="underline"
						onClick={() => handleClick()}
					>
						About
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/Program"
						activeClassName="underline"
						onClick={() => handleClick()}
					>
						Programm
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/Coaches"
						activeClassName="underline"
						onClick={() => handleClick()}
					>
						Coaches
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/Registration"
						activeClassName="underline"
						onClick={() => handleClick()}
					>
						Registration
					</NavLink>
				</li>
			</Ul>
		</>
	);
};

export default RightNav;