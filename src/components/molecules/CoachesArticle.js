import TextBox from '../atoms/TextBox';
import P from '../atoms/P';
import { textData } from '../../data/textData';

export default function CoachesArticle() {
    return (
        <TextBox>
            <P>{textData.coachesArticles[0].text}</P>
        </TextBox>
    )
}