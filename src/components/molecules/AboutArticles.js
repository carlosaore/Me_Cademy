import TextBox from '../atoms/TextBox';
import H2 from '../atoms/H2';
import P from '../atoms/P';
import { textData } from '../../data/textData';
import ComponentWrapper from '../atoms/ComponentWrapper';

export default function AboutArticles() {
    return (
        <ComponentWrapper>
            <TextBox>
                <H2>{textData.aboutArticles[0].heading}</H2>
                <P>{textData.aboutArticles[0].text}</P>
            </TextBox>
            <TextBox>
                <H2>{textData.aboutArticles[1].heading}</H2>
                <P>{textData.aboutArticles[1].text}</P>
            </TextBox>
            <TextBox>
                <H2>{textData.aboutArticles[2].heading}</H2>
                <P>{textData.aboutArticles[2].text}</P>
                {/* pass "last" prop it in the last text tag
                (easier that :last-child) if you don't want 
                margin in the last text tag*/}
            </TextBox>
        </ComponentWrapper>
    )
}


// later it would be good to put it as organism, mapped
// this right here is bad-style