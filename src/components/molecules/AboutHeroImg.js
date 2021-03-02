import HeroImg from '../atoms/HeroImg';
import { textData } from '../../data/textData';

export default function AboutHeroImg() {
    return (
        <HeroImg
            url={textData.aboutHeroImg}
            about
        />
    )
};