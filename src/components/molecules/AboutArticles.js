import {
    TextBox,
    H1,
    P
} from '../atoms/coachesAtoms';
import { textData } from '../../data/textData';

export default function AboutArticles() {
    return (
        <>
            <TextBox>
                <H1>{textData.aboutArticles[0].heading}</H1>
                <P>{textData.aboutArticles[0].text}</P>
            </TextBox>
            <TextBox>
                <H1>{textData.aboutArticles[1].heading}</H1>
                <P>{textData.aboutArticles[1].text}</P>
            </TextBox>
            <TextBox>
                <H1>{textData.aboutArticles[2].heading}</H1>
                <P>{textData.aboutArticles[2].text}</P>
            </TextBox>
        </>
    )
}


// later it would be good to put it as organism, mapped
// this right here is bad-style