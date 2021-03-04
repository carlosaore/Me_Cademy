import React from 'react';
import MetaDecorator from '../metadecorator/MetaDecorator';
import AboutAccordion from '../molecules/AboutAccordion';
import AboutTeam from '../molecules/AboutTeam';
import AboutArticles from '../molecules/AboutArticles';
import { textData } from '../../data/textData';
import AboutHeroImg from '../molecules/AboutHeroImg';
import MainContentWrapper from '../atoms/MainContentWrapper';
import AboutQuote from '../molecules/AboutQuote';

const About = () => {
	return (
		<div>
			<MetaDecorator description="About" title="About • MeCademy" />
			<AboutHeroImg url={textData.aboutHeroImg} />
			<MainContentWrapper>
				<AboutQuote />
				<AboutArticles />
				<AboutAccordion />
				<AboutTeam />
			</MainContentWrapper>
		</div>
	);
};

export default About;