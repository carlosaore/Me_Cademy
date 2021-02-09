import HeroImg from '../atoms/HeroImg';
import { textData } from '../../data/textData';

export default function HeroImgMol() {
    return (
        <HeroImg url={textData.props}/>
    )
}