import styled, { css } from 'styled-components';

const Footer = styled.footer`
	background-color: ${(props) => props.theme.colors.meCademyGrey};
`;

const Container = styled.div`
	width: 80%;
	max-width: 1080px;
	margin: auto;
	text-align: left;
`;

const FooterWidgetsWrapper = styled.div`
	padding: 25px 0 25px 0;
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;

	@media (max-width: 600px) {
		padding: 30px 0;
	}
`;

const FooterWidgets = styled.div`
	${props => !props.right && css`
		width: 70%;

		@media (max-width: 600px) {
			display: flex;
			justify-content: center;
		}
	`}

	${props => props.right && css`
		width: 30%;
		text-align: right;
	`}

	@media (max-width: 600px) {
		width: 100%;
		text-align: center;
	}
`;

const Li = styled.li`
	text-decoration: none;
	list-style: none;
	

	@media (min-width: 601px) {
		display: inline;
		float: left;
		margin-right: 20px;
		margin-top: 7px;
	}

	@media (max-width: 600px) {
		margin-bottom: 10px;
	}

	a {
		color: ${(props) => props.theme.colors.light};
		text-decoration: none;

		:hover {
			text-decoration: underline;
		}
	}
`;

const SocialMediaIcon = styled.img`
	width: 25px;
	margin-right: 10px;
	
	${props => props.last && css`
			margin-right: 0;
		`}

	:hover {
		filter: sepia(99%) saturate(332%) hue-rotate(113deg) brightness(91%) contrast(89%);
	}
`;

export { Footer, Container, FooterWidgets, FooterWidgetsWrapper, Li, SocialMediaIcon };
