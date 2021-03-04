import TextBox from '../atoms/TextBox';
import P from '../atoms/P';
import ComponentWrapper from '../atoms/ComponentWrapper';

export default function AboutArticles() {
    return (
        <ComponentWrapper first>
            <TextBox>
                <P>
                    Die Maßnahme der MentorMe gGmbH unterstützt weibliche arbeitssuchende & arbeitslose Akademikerinnen bei der zügigen Wiedereingliederung in den Arbeitsmarkt. Die Maßnahme umfasst ein Online-Programm und ein individuelles Coaching.</P>
                <P justify alignCenter last>
                    <b>Im 8-wöchigen Programm erhalten alle Teilnehmerinnen:</b></P>
                                        <br/>
                                        <div className="numbered">
                                                <P> <img className="one"
                                                src="/images/one.png"
                                                alt="one" />Beratung zu allen Schritten des Bewerbungsprozesses.</P>
                                                
                                                <P><img className="two"
                                                src="/images/two.png"
                                                alt="two" />Persönliche Begleitung von erfahrenen TOP-Coaches.</P>
                                                
                                                <P><img className="three"
                                                src="/images/three.png"
                                                alt="three" />Moderierter Austausch & Feedback in Online-Gruppen.</P>
                                                
                                                <P><img className="four"
                                                src="/images/four.png"
                                                alt="four" />Interaktive, praxisfokussierte, individualisierte Übungen.</P>
                                            </div>
                                            
                <P last>Das Ziel unseres Programmes ist, dich in den kommenden Wochen so stark wie möglich zu unterstützen und zu befähigen, deinen individuellen beruflichen Weg neu zu identifizieren, zu definieren und mit den professionellsten Tools auszustatten. Wir sind davon überzeugt, dass es immer Möglichkeiten gibt Veränderungen einzuleiten und besonders durch Kooperation, Netzwerk und Verständnis von Gleichgesinnten es leichter ist diese positiv zu erleben.
                </P>
            </TextBox>
        </ComponentWrapper>
    );
}
