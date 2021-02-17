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

export default function ProgrammAccordion() {
    return (
        <StyledDiv>
            <Accordion
                allowMultipleExpanded
                allowZeroExpanded
            >
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            Woche 1: Bestimmung meines beruflichen Standpunktes/ Du wirst dir deiner beruflichen Leidenschaft klar
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <P>
                            Nur 80% der Menschen tun das, wofür sie brennen. Deshalb ist es an der Zeit, innezuhalten! Du darfst dir bewusst werden, dass es keinen richtigen und falschen beruflichen Weg gibt. Es gibt nur INDIVIDUELLE LEIDENSCHAFTEN, die in eigene Wege münden. Unser erster Schritt mit dir besteht deshalb darin, deine Leidenschaft(en) zu finden.
                        </P>
                    </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            Woche 2: Du entwirfst einen Plan und definierst deinen Wunschberuf
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <P>
                            Karrieren verlaufen nicht nur gerade, sondern mit Umwegen und Pausen. Der KARRIEREPLAN ist ein Tool für Orientierung und Klarheit, für Ziele und um ins Tun zu kommen. Wir blicken auch auf den TRAUMBERUF; mit gezielten Fragen werden wir diesen definieren. Du wirst dann nach konkreten Berufen suchen, anstelle dich auf Jobs „with no true passion“ zu bewerben.
                        </P>
                    </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            Woche 3: Du erstellst einen Lebenslauf, der dich bestmöglich präsentiert
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <P>
                            Dein LEBENSLAUF ist die Visitenkarte beim Bewerben. Dein Lebenslauf bist du und du bist dein Lebenslauf. Trotzdem schaffen es viele Bewerber*innen nicht, sich so zu präsentieren, dass sie Personaler umhauen. Wir zeigen, wie du berufliche Erfahrungen, Kenntnisse und deine Persönlichkeit interessant und pointiert darstellst; vom klassischen bis zum kreativen Lebenslauf.
                        </P>
                    </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            Woche 4: Du schreibst ein Anschreiben, das dich von anderen Bewerber*innen abhebt
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <P>
                            Das Anschreiben ist der Eindruck, den du hinterlässt. Wir zeigen dir einen gelungenen AUFBAU EINES ANSCHREIBENS. Wir geben Tipps, wie du 1) Motivation für den ausgeschriebenen Beruf zeigst und 2) ein „perfect fit“ zwischen dir und dem Beruf aufzeigst, sodass ein Personaler nicht anders kann, als dich zum Interview einzuladen. Wir blicken zudem auf die INITIATIVBEWERBUNG – und wie du das strategisch angehst.
                        </P>
                    </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                        Woche 5: Du lernst die 3 wichtigen Faktoren und trainierst dein Bewerbungsgespräch
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <P>
                            Das BEWERBUNGSGESPRÄCH: ARBEITGEBER: Wir zeigen, was du recherchierst, um beim Interview Fragen gut zu beantworten. DEINE FÄHIGKEITEN: Wir zeigen, wie du deine Erfahrungen mit den Stellenanforderungen zusammen bringen. KÖRPERSPRACHE: Wir zeigen dir Do’s & Don’ts der Rhetorik. Plus: 18 TOP-OF-THE-TOP INTERVIEW FRAGEN und der ABLAUF VON JOBINTERVIEWS.
                        </P>
                    </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            Woche 6: Du bekommst Verhandlungstipps und trainierst für deine Gehaltsverhandlung
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <P>
                            Wir blicken auf die Gehaltsverhandlung und zeigen, wie du das GEHALT FÜR DEN ARBEITGEBER recherchierst. Das ist essenziell, um weder unter noch ober den Möglichkeiten zu liegen. Wir zeigen dir SCHRITTE EINER VERHANDLUNGSSTRATEGIE und wie sie dir helfen kann. Du lernst KNIFFE AM VERHANDLUNGSTISCH, um für verschiedene Gehaltsangebote gewappnet zu sein.
                        </P>
                    </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            Woche 7 & 8: Du positionierst dich als Expertin mit Personal Branding
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <P>
                            Wir haben uns Unterstützung von der Frau geholt, die in Deutschland als Personal Branding Expertin gilt: Christina Richter. Sie zeigt, wie du dich als Expertin auf Social Media positionierst; vom ERSTELLEN eines PROFILS, Tipps wie du dich als EXPERTIN in POSTS POSITIONIERST, bis hin zum AUFBAU EINES NETZWERKS. Zusätzlich: SECRET TIPPS, was beim Personal Branding zu beachten ist.
                        </P>
                    </AccordionItemPanel>
                </AccordionItem>
            </Accordion>
        </StyledDiv>
    )
}