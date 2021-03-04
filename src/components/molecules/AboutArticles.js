import TextBox from '../atoms/TextBox';
import P from '../atoms/P';
import Numbered from '../atoms/Numbered';
import ComponentWrapper from '../atoms/ComponentWrapper';

export default function AboutArticles() {
    return (
        <ComponentWrapper first>
            <TextBox>
                <P>
                    Die Maßnahme der MentorMe gGmbH unterstützt weibliche arbeitssuchende & arbeitslose Akademikerinnen bei der zügigen Wiedereingliederung in den Arbeitsmarkt. Die Maßnahme umfasst ein Online-Programm und ein individuelles Coaching.</P>
                <P justify alignCenter last>
                    <b>Im 8-wöchigen Programm erhalten alle Teilnehmerinnen:</b>
                </P>
                <Numbered>
                    <li className="one">Beratung zu allen Schritten des Bewerbungsprozesses.</li>
                    <li className="two">Persönliche Begleitung von erfahrenen TOP-Coaches.</li>
                    <li className="three">Moderierter Austausch & Feedback in Online-Gruppen.</li>
                    <li className="four">Interaktive, praxisfokussierte, individualisierte Übungen.</li>
                </Numbered>                           
                <P last>
                    Das Ziel unseres Programmes ist, dich in den kommenden Wochen so stark wie möglich zu unterstützen und zu befähigen, deinen individuellen beruflichen Weg neu zu identifizieren, zu definieren und mit den professionellsten Tools auszustatten. Wir sind davon überzeugt, dass es immer Möglichkeiten gibt Veränderungen einzuleiten und besonders durch Kooperation, Netzwerk und Verständnis von Gleichgesinnten es leichter ist diese positiv zu erleben.
                </P>
            </TextBox>
        </ComponentWrapper>
    );
}
