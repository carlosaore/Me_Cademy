import React from 'react';
import MetaDecorator from '../metadecorator/MetaDecorator';
import ProgrammHeroImg from '../molecules/ProgrammHeroImg';
import MainContentWrapper from '../atoms/MainContentWrapper';
import ProgrammArticles from '../molecules/ProgrammArticles';
import ProgrammAccordion from '../molecules/ProgrammAccordion';
import NumbSteps from '../organism/NumbSteps';
import ProgramEmail from '../molecules/ProgramEmail';
import ProgrammQuote from '../molecules/ProgrammQuote';

const Program = () => {
	return (
		<div>
			<MetaDecorator description="Programm" title="Programm • MeCademy" />
			<ProgrammHeroImg />
			<MainContentWrapper>
				<ProgrammQuote />
				<ProgrammArticles />
				<ProgrammAccordion />
				<NumbSteps />
				<ProgramEmail />
			</MainContentWrapper>
		</div>
	);
};

export default Program;
