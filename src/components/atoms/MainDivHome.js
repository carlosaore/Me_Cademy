import styled from 'styled-components';

const MainDiv = styled.div`
	position: relative;

	.home__logo {
		display: flex;
		justify-content: center;
		margin: 50px;
	}

	.home__form {
		display: flex;
		justify-content: space-evenly;
		margin: 50px 0 50px 0;

		@media screen and (max-width: 751px) {
			display: flex;
			flex-wrap: wrap;
			flex-direction: row;
			justify-content: center;
		}
	}
`;

export default MainDiv;