import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
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
                            Für wen ist die MeCademy?
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
                            Voraussetzung für die Finanzierung über den AVGS.
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
                            Schritte zum Erhalt des AVGS für Interessierte
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <Ol last>
                            <li>Interessierte haben sich <b>hier</b> für die MeCademy angemeldet.</li>
                            <li>Interessierte beantragen bei ihren Betreuern einen AVGS.</li>
                            <li>Interessierte erhalten von ihren Betreuern einen AVGS.</li>
                            <li>Interessierte lösen den AVGS bei MentorMe <b>hier</b> ein.</li>
                        </Ol>
                    </AccordionItemPanel>
                </AccordionItem>
            </Accordion>
        </ComponentWrapper>
    )
}

