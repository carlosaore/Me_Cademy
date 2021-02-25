import TextBox from '../atoms/TextBox';
import H2 from '../atoms/H2';
import P from '../atoms/P';
import ComponentWrapper from '../atoms/ComponentWrapper';

export default function AboutArticles() {
    return (
        <ComponentWrapper>
            <TextBox>
                <H2>MeCademy – erfolgreich bewerben</H2>
                <P>
                    Die Maßnahme der MentorMe gGmbH unterstützt weibliche arbeitssuchende & arbeitslose Akademikerinnen bei der zügigen Wiedereingliederung in den Arbeitsmarkt. Die Maßnahme umfasst ein Online-Programm und ein individuelles Coaching.</P>
                <P justify alignCenter last><b>
                    Im 8-wöchigen Programm erhalten alle Teilnehmerinnen:
                </b></P>
                <P justify alignCenter last>Beratung zu allen Schritten des Bewerbungsprozesses.</P>
                <P justify alignCenter last>Persönliche Begleitung von erfahrenen TOP-Coaches.</P>
                <P justify alignCenter last>Moderierter Austausch & Feedback in Online-Gruppen.</P>
                <P justify alignCenter>Interaktive, praxisfokussierte, individualisierte Übungen.</P>
                
                {/* <Ul>
                    <li>
                        Beratung zu allen Schritten des Bewerbungsprozesses.
                    </li>
                    <li>
                        Persönliche Begleitung von erfahrenen TOP-Coaches.
                    </li>
                    <li>
                        Moderierter Austausch & Feedback in Online-Gruppen.
                    </li>
                    <li>
                        Interaktive, praxisfokussierte, individualisierte Übungen.
                    </li>
                </Ul> */}
                <P last>
                    Das Ziel unseres Programmes ist, dich in den kommenden Wochen so stark wie möglich zu unterstützen und zu befähigen, deinen individuellen beruflichen Weg neu zu identifizieren, zu definieren und mit den professionellsten Tools auszustatten. Wir sind davon überzeugt, dass es immer Möglichkeiten gibt Veränderungen einzuleiten und besonders durch Kooperation, Netzwerk und Verständnis von Gleichgesinnten es leichter ist diese positiv zu erleben.
                </P>
            </TextBox>
        </ComponentWrapper>
    )
}


// later it would be good to put it as organism, mapped
// this right here is bad-style