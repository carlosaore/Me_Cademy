import TextBox from '../atoms/TextBox';
import H1 from '../atoms/H1';
import P from '../atoms/P';
import { textData } from '../../data/textData';

export default function CoachesArticle() {
    return (
        <TextBox>
            <H1>{textData.coachesArticles[0].heading}</H1>
            <P>{textData.coachesArticles[0].text}</P>
        </TextBox>
    )
}