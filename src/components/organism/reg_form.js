import React from 'react';
import { ReactTypeformEmbed } from 'react-typeform-embed';
import styled from 'styled-components';

const RegDiv = styled.div``;

const Registration_form = () => {
	return (
		<RegDiv>
			<ReactTypeformEmbed
				opacity={70}
				url="https://karinheinzl.typeform.com/to/N75W9teT"
			/>
		</RegDiv>
	);
};

export default Registration_form;