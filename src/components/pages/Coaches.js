import React from 'react';
import MetaDecorator from '../metadecorator/MetaDecorator';
import CoachesCarousel from '../molecules/CoachesCarousel';
import CoachesAccordion from '../molecules/CoachesAccordion';
import CoachesArticle from '../molecules/CoachesArticle';
import CoachesHeroImg from '../molecules/CoachesHeroImg';
import MainContentWrapper from '../atoms/MainContentWrapper';
import CoachesQuote from '../molecules/CoachesQuote';

const Coaches = () => {
	return (
		<div>
			<MetaDecorator description="Coaches" title="Coaches • MeCademy" />
			<CoachesHeroImg />
			<MainContentWrapper>
				<CoachesQuote />
				<CoachesArticle/>
				<CoachesCarousel />
				<CoachesAccordion />
			</MainContentWrapper>
		</div>
	);
};

export default Coaches;
