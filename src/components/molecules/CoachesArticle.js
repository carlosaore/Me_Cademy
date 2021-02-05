import {
    TextBox,
    H1,
    P
} from '../atoms/coachesAtoms';
import { textData } from '../../data/textData';

export default function CoachesArticle() {
    return (
        <TextBox>
            <H1>{textData.coachesArticles[0].heading}</H1>
            <P>{textData.coachesArticles[0].text}</P>
        </TextBox>
    )
}