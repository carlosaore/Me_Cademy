import React from 'react';
import ComponentWrapper from '../atoms/ComponentWrapper';
import StyledTeamCompForm from '../atoms/StyledTeamCompForm';
import P from '../atoms/P';
import H1 from '../atoms/H1';
import H3 from '../atoms/H3';


const AboutTeam = () => {
    return (
        <ComponentWrapper>
            <StyledTeamCompForm>
                <div className="row2">
                    <img 
                        className="img2"
                        src="/images/StefanieWey.jpeg"
                        alt="Stefanie Wey"
                    />  
                    <div className="text2">
                        <H1>Stefanie Wey</H1>
                        <H3>Head of MeCademy</H3>
                        <P last justify lastCenter hyphensAuto>
                            Stefanie ist diplomierte Personalmanagerin und Pflegewirtin. Sie hat in den vergangenen Jahren im Personalbereich und zuletzt als Akademieleitung gearbeitet. Darüber hinaus ist sie als Business Coach und Consultant tätig und seit 2019 Mentorin bei MentorMe. Nun leitet sie die MeCademy, die Frauen auf ihrem Karriereweg mit einem digitalen Bildungsangebot unterstützt.
                        </P>
                    </div>
                </div>
                <div className="row3">
                    <img 
                        className="img3"
                        src="/images/Karin78 square.jpeg"
                        alt="Karin Heinzl"
                    />
                    <div className="text3">
                        <H1>Karin Heinzl</H1>
                        <H3>Geschäftsführung</H3>
                        <P last justify lastCenter hyphensAuto>
                            Karin hat Kommunikation und Politik sowie Political Management studiert. Nach Erfahrung in der Erwachsenenbildung, Politik sowie Entwickungszusammenarbeit rund um Women Empowerment, hat Karin 2015 MentorMe gegründet. Seit Herbst 2018 ist Karin Vorstandsmitglied der Deutschen Gesellschaft für Mentoring.
                        </P>
                    </div>
                </div>
            </StyledTeamCompForm>
        </ComponentWrapper>
    )
}

export default AboutTeam;