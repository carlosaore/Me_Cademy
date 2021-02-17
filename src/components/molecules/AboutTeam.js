import React from 'react';
import ComponentWrapper from '../atoms/ComponentWrapper';
import StyledTeamCompForm from '../atoms/StyledTeamCompForm';
import P from '../atoms/P';

const AboutTeam = () => {
    return (
        <ComponentWrapper>
            <StyledTeamCompForm>
                <div className="row1">
                    <img 
                    className="img"
                    src="/images/female-placeholder.png"
                    alt="Girl loves t-shirt"/>
                    <div className="text">
                        <h1>Jane Doe</h1>
                        <h3>Lorem ipsum dolor sit amet</h3>
                        <p>
                            There is only 2, remove or hide this one.
                        </p>
                    </div>
                    </div>
                <div className="bottom-row">
                <div className="row2">
                    <img 
                        className="img2"
                        src="/images/Karin78 square.jpeg"
                        alt="Stefanie Wey"
                    />  
                    <div className="text2">
                        <h1>Stefanie Wey</h1>
                        <h3>Head of MeCademy</h3>
                        <P last>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
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
                        <h1>Karin Heinzl</h1>
                        <h3>Geschäftsführung</h3>
                        <P last>
                            Karin hat Kommunikation und Politik sowie Political Management studiert. Nach Erfahrung in der Erwachsenenbildung, Politik sowie Entwickungszusammenarbeit rund um Women Empowerment, hat Karin 2015 MentorMe gegründet. Seit Herbst 2018 ist Karin Vorstandsmitglied der Deutschen Gesellschaft für Mentoring.
                        </P>
                    </div>
                </div>
                </div>
            </StyledTeamCompForm>
        </ComponentWrapper>
    )
}

export default AboutTeam;