import HeroImage from '../atoms/HeroImg';
import { textData } from '../../data/textData';

export default function HomeHeroImg() {
    return (
        <HeroImage url={textData.homeHeroImage}/>
    )
}

