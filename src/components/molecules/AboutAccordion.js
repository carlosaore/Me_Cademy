import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import { Link } from 'react-router-dom';
import P from '../atoms/P';
import Ul from '../atoms/Ul';
import Ol from '../atoms/Ol';
import './accordion.css';
import ComponentWrapper from '../atoms/ComponentWrapper';

export default function AboutAccordion() {
    return (
        <ComponentWrapper>
            <Accordion
                allowMultipleExpanded
                allowZeroExpanded
            >
                <AccordionItem >
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            <P last left="2">Für wen ist die MeCademy?</P>
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <P last>
                            Die MeCademy richtet sich an Akademikerinnen jeden Altersund aller Studienrichtungen, die erfolgreich (zurück) in den Beruf möchten und sich dafür ein strukturiertes und digitales Programm mit persönlicher Begleitung durch Expert*innen und Coaches sowie Austausch mit Gleichgesinnten wünschen.
                        </P>
                        <P last>                            
                            Die Agentur für Arbeit bzw. das Jobcenter kann die Teilnahme an der MeCademy über einen AVGS-MAT (Aktivierungs- & Vermittlungsgutschein zum Heranführen an den Ausbildungs- & Arbeitsmarkt) für förderfähige Personen finanzieren.
                        </P>
                    </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem >
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            <P last left="2">Voraussetzung für die Finanzierung über den AVGS</P>
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <Ul last>
                            <li>Weibliche Akademiker.</li>
                            <li>Weibliche Arbeitslose, die ALG I oder ALG II beziehen.</li>
                            <li>Weibliche Arbeitsuchende, denen Arbeitslosigkeit droht.</li>
                        </Ul>
                    </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem >
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            <P last left="2">Schritte zum Erhalt des AVGS für Interessierte</P>
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <Ol last>
                            <li>Interessierte haben sich <Link to='/Registration'>hier</Link> für die MeCademy angemeldet.</li>
                            <li>Interessierte beantragen bei ihren Betreuern einen AVGS.</li>
                            <li>Interessierte erhalten von ihren Betreuern einen AVGS.</li>
                            <li>Interessierte lösen den AVGS bei MentorMe <a href="mailto:mecademy@mentorme-ngo.org">hier</a> ein.</li>
                        </Ol>
                    </AccordionItemPanel>
                </AccordionItem>
            </Accordion>
        </ComponentWrapper>
    )
}

