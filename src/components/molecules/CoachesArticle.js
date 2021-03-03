import TextBox from '../atoms/TextBox';
import P from '../atoms/P';
import ComponentWrapper from '../atoms/ComponentWrapper'
import { textData } from '../../data/textData';

export default function CoachesArticle(props) {
    return (
        <ComponentWrapper first>
            <TextBox>
                <P>{textData.coachesArticles[0].text}</P>
            </TextBox>
        </ComponentWrapper>
    )
}