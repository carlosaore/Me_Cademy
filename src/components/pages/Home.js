import React from 'react';
import MetaDecorator from '../metadecorator/MetaDecorator';
import HomeSlider from '../molecules/HomeSlider';
import HomeReg from '../molecules/HomeReg';
import HomeQuote from '../molecules/HomeQuote';
import HomeHeroImage from '../molecules/HomeHeroImg';
import MainContentWrapper from '../atoms/MainContentWrapper';

const Home = () => {
	return (
		<>
			<MetaDecorator description="Home" title="MeCademy" />
			<HomeHeroImage />
			<MainContentWrapper>
				<HomeQuote />
			</MainContentWrapper>
			<MainContentWrapper flex>
				<HomeSlider />
				<HomeReg />
			</MainContentWrapper>
		</>
	);
};

export default Home;

