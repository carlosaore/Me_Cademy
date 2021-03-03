import HeroImg from '../atoms/HeroImg';
import { textData } from '../../data/textData';

export default function RegistrationHeroImg() {
    return (
        <HeroImg
            url={textData.registrationHeroImg}
            registration    
        />
    )
}