import React from 'react';
import styled from 'styled-components';

const StyledArrowsForm = styled.div`
	.prev,
	.next {
		cursor: pointer;
		position: absolute;
		top: 50%;
		font-size: 20px;
		margin: 10px;
	}

	.prev:hover,
	.next:hover {
		color: rgba(0, 0, 0, 0.3);
	}

	.next {
		right: 0;
	}
`;

function Arrows(props) {
	return (
		<StyledArrowsForm>
			<div className="arrows">
				<span className="prev" onClick={props.prevSlide}>
					&#10094;
				</span>
				<span className="next" onClick={props.nextSlide}>
					&#10095;
				</span>
			</div>
		</StyledArrowsForm>
	);
}

export default Arrows;
