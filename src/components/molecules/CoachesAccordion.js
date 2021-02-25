import StyledDiv from '../atoms/StyledDiv';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import P from '../atoms/P';
import './accordion.css';

export default function CoachesAccordion() {
    return (
        <StyledDiv marginTop={false}>
            <Accordion
                allowMultipleExpanded
                allowZeroExpanded
            >
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            <P last left="2">KANN ich meinen individuellen Coach auswählen und ggf. wechseln?</P>
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <P>
                            Bei deinem individuellen 8-wöchigen Einzelcoaching stellen wir den Coach, basierend auf dem personal „Fit“ und der Verfügbarkeit unserer Coaches. Wir setzen bewusst auf nur erfahrene Coaches! Gibt es hier trotzdem persönliche Differenzen, werden wir dir einen anderen Coach zuweisen.
                        </P>
                        <P>
                            Hast du einen eigenen Coach, den du nutzen möchtest? Dann kann dein Coach Kontakt mit uns aufnehmen und wir nehmen ihn/sie gerne in unseren Pool auf.
                        </P>
                    </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            <P last left="2">WELCHE Voraussetzungen müssen MeCademy-Coaches haben?</P>
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <P>
                            All unsere Coaches haben eine Ausbildung zum Coach hinter sich. Die meisten sind zudem seit Jahren als Coaches tätig. So müssen sie, bevor sie in unseren Coaches-Pool aufgenommen werden, ihre Qualifikationen und Zertifikate bei uns einreichen.
                        </P>
                        <P>
                            Hast du einen eigenen Coach, den du nutzen möchtest? Dann kann dein Coach Kontakt mit uns aufnehmen und wir nehmen ihn/sie gerne in unseren Pool auf.
                        </P>
                    </AccordionItemPanel>
                </AccordionItem>
            </Accordion>
        </StyledDiv>
    )
}

