import styled from 'styled-components';
import { textData } from '../../data/textData';
import H2 from '../atoms/H2';
import TypeformRight from '../organism/reg_form';
import P from '../atoms/P';
import H3 from '../atoms/H3';

const BoxAroundTypeform = styled.div`
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
`;

const FlexDiv = styled.div`
    display : flex;

    @media (min-width : ${props => props.theme.largeViewport.size}) {
        flex-direction : row-reverse;
        justify-content : space-between 
    }

    @media (min-width : ${props => props.theme.mediumViewport.minSize}) and (max-width : ${props => props.theme.mediumViewport.maxSize}) {
        flex-direction : column-reverse
    }

    @media (max-width : ${props => props.theme.smallViewport.size}) {
        flex-direction : column
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

const TypeformEmbedInfotext = () => {
    return (
        <BoxAroundTypeform>
            <H2>
                {textData.h2TextAboveRegistration}
            </H2>
            <FlexDiv>
                <FlexSection>
                    <P>
                        Du bist <b>Akademikerin</b> und beziehst <b>ALG</b>? Du suchst einen Beruf, der dich erfüllt, deine Ziele ebnet und deine Potenziale ausschöpft?
                    </P>
                    <P>
                        <b>Melde dich jetzt unverbindlich für die „MeCademy – Erfolgreich bewerben als Akademikerin“ an!</b>
                    </P>
                    <P>
                        <b>Wir schicken dir alle Infos per Mail zu</b>: Dein Gewinn durch die 8-wöchige MeCademy, Starttermine, Inhalte und wie die Agentur für Arbeit deine Teilnahmekosten übernimmt.
                    </P>
                    <P>
                        Die <b>Maßnahme</b> hilft dir, deinen Traumberuf und einen Top-Arbeitgeber zu finden, die Bewerbungsphase zum Erfolg zu bringen und dich als Expertin zu positionieren. Erreiche mit unserer Beratung und in Gesprächen mit erfahrenen Coaches, welchen Beruf du willst und wie du ihn bekommst!
                    </P>
                </FlexSection>
                <FlexSection>
                    <H3 salmon alignLeftIfBig>
                        {textData.h3TextAboveRegistration}
                    </H3>
                    <RegDivOnPage>
                        <TypeformRight />
                    </RegDivOnPage>
                </FlexSection>
            </FlexDiv>
        </BoxAroundTypeform>
        )
}

export default TypeformEmbedInfotext;