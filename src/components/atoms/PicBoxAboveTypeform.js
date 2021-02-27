import styled from 'styled-components';
import { textData } from '../../data/textData';
import DivGradient from '../atoms/DivGradient';
import H1 from '../atoms/H1';

const PicBox = styled.div`
	background-image: url(${textData.picBoxAboveTypeform});
	background-position: 50% 25%;
	background-size: cover;
	display: flex;
	justify-content: center;
	align-items: flex-end;

	@media (min-width: ${(props) => props.theme.largeViewport.size}) {
		margin-bottom: ${(props) => props.theme.largeViewport.margin};
		height: 490px;
	}

	@media (min-width: ${(props) =>
			props.theme.mediumViewport.minSize}) and (max-width: ${(props) =>
			props.theme.mediumViewport.maxSize}) {
		margin-bottom: ${(props) => props.theme.mediumViewport.margin};
		height: 490px;
	}

	@media (max-width: ${(props) => props.theme.smallViewport.size}) {
		margin-bottom: ${(props) => props.theme.smallViewport.margin};
		height: 550px;
	}
`;

const PicBoxAboveTypeform = () => (
	<PicBox>
		<DivGradient>
			<H1 light last>
				{textData.registrationQuote}
			</H1>
		</DivGradient>
	</PicBox>
);

export default PicBoxAboveTypeform;
