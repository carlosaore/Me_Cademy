import styled from 'styled-components';
// import { textData } from '../../data/textData';
import TypeformRight from '../organism/reg_form';
import P from '../atoms/P';
import H1 from '../atoms/H1';

const BoxAroundTypeform = styled.div`
    a {
        text-decoration: none;
        color: ${props => props.theme.colors.meCademySalmon};
    }

    @media (min-width : ${props => props.theme.largeViewport.size}) {
                margin-bottom : ${props => props.theme.largeViewport.margin}
        }

        @media (min-width : ${props => props.theme.mediumViewport.minSize}) and (max-width : ${props => props.theme.mediumViewport.maxSize}) {
                margin-bottom : ${props => props.theme.mediumViewport.margin}
        }

        @media (max-width : ${props => props.theme.smallViewport.size}) {
                margin-bottom : ${props => props.theme.smallViewport.margin}
        }
`;

const RegDivOnPage = styled.div`
    border: 3px solid ${props => props.theme.colors.meCademySalmon};
    height: 250px;
    margin: auto;
    margin-top: 0px;
    padding-top: 200px;
    display: block;
    position: relative;
    background-color: ${props => props.theme.colors.meCademyLightGrey};

    @media (max-width : ${props => props.theme.smallViewport.size}) {
    margin-bottom: 30px;
    }
`;

const FlexDiv = styled.div`
    display : flex;

    @media (min-width : ${props => props.theme.largeViewport.size}) {
        flex-direction : row-reverse;
        justify-content : space-between 
    }

    @media (min-width : ${props => props.theme.mediumViewport.minSize}) and (max-width : ${props => props.theme.mediumViewport.maxSize}) {
        flex-direction : column-reverse;
    }

    @media (max-width : ${props => props.theme.smallViewport.size}) {
        flex-direction : column-reverse;
    }

`

const FlexSection = styled.section`
    @media (min-width : ${props => props.theme.largeViewport.size}) {
        flex-basis : 47%
    }

    @media (min-width : ${props => props.theme.mediumViewport.minSize}) and (max-width : ${props => props.theme.mediumViewport.maxSize}) {
        :last-child {
            margin-bottom : ${props => props.theme.mediumViewport.margin}
        }
    }

    @media (max-width : ${props => props.theme.smallViewport.size}) {
        
    }
`

const KontaktArticles = () => {
    return (
        <BoxAroundTypeform>
            <FlexDiv>
                <FlexSection>
                    <P>
                        <b>MentorMe gGmbH</b>  
                        <br/>Maybachufer 26
                        <br/>12047 Berlin
                    </P>
                    <P>
                        <b>Kontakt:</b>
                    </P>
                    <P>
                    <a href="mail@mentorme-ngo.org">mail@mentorme-ngo.org</a>
                    <br/>
                    <a href="www.mentorme-ngo.org">www.mentorme-ngo.org</a> 
                    <br/>
                    </P>
                    <P>
                        <b>Für Partner:</b>
                        <br/>Karin Heinzl, Gründerin & 
                        <br/>Geschäftsführerin
                        <br/>
                        <br/>Tel.: +49 (0)176 – 64949316
                    </P>
                    <P>
                        <b>Für Fragen zum Programm:</b>
                        <br/>
                        <br/>Johanna Salewsky, Community
                        <br/>Managerin
                    </P>
                </FlexSection>
                <FlexSection>
                    <H1 alignLeftIfBig>
                        Wir freuen uns über deine Anfrage
                    </H1>
                    <RegDivOnPage>
                        <TypeformRight />
                    </RegDivOnPage>
                </FlexSection>
            </FlexDiv>
        </BoxAroundTypeform>
        )
}

export default KontaktArticles;