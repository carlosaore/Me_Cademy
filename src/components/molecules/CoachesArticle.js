import TextBox from '../atoms/TextBox';
import H2 from '../atoms/H2';
import P from '../atoms/P';
import { textData } from '../../data/textData';

export default function CoachesArticle() {
    return (
        <TextBox>
            <H2>{textData.coachesArticles[0].heading}</H2>
            <P>{textData.coachesArticles[0].text}</P>
        </TextBox>
    )
}