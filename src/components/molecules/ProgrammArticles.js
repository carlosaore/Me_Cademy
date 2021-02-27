import TextBox from '../atoms/TextBox';
import P from '../atoms/P';
import ComponentWrapper from '../atoms/ComponentWrapper';

export default function ProgrammArticles() {
    return (
        <ComponentWrapper>
            <TextBox>
                <P>
                    Willkommen bei deinem Onlineprogramm der MeCademy – erfolgreich bewerben. In den nächsten acht Wochen erhältst du von uns eine Vielzahl an Wissen, Methoden und Trainingslektionen zum großen Thema Bewerbung. Durch den Methodenmix aus Selbststudium, moderierten Gruppenarbeiten und dem Einzelcoaching, erhältst du die Möglichkeit das Programm auf deine individuellen Bedürfnisse abgestimmt zu nutzen und dich selbst in den Fokus zu rücken. Besonders durch das Einzelcoaching und die moderierten Gruppen erhältst du den Raum, um dich auszutauschen, Fragen zu klären und deine ganz eigenen Themen zu platzieren.
                </P>
                <P last>
                    Das Programm besteht aus 8 Modulen und einem Methodenmix aus Selbststudium, moderierten Gruppen sowie individuellem Einzelcoaching.
                </P>
            </TextBox>
        </ComponentWrapper>
    );
}