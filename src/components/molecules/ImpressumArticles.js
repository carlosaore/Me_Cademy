import React from 'react';
import H1 from '../atoms/H1';
import H2 from '../atoms/H2';
import P from '../atoms/P';
import styled from "styled-components";

const Wrapper = styled.div`
H1, H2 {
    text-align: left;
    font-weight: 400;
    } 

table {
  border-collapse: collapse;
  width: 100%;
  margin-bottom: 30px;
}

td {
  border: 1px solid ${props => props.theme.colors.meCademyMediumGrey};
  color: ${props => props.theme.colors.meCademyTextGrey};
  text-align: left;
  font-size : 0.9em;
  padding: 8px 0 8px 25px;
}

.img24 {
    width: 120px;
    border-radius: 4px;
    margin-bottom: 60px;
  } 
`;

const ImpressumArticles = () => {
    return (
            <Wrapper>
            <H1>
                Impressum
            </H1>
            <H2>
                Angaben gemäß § 5 TMG:
            </H2>
            <P>
                MentorMe gGmbH, Maybachufer 26, 12047 Berlin
            </P>
            <H2>
                Vertreten durch: 
            </H2>
            <P>
                Karin Heinzl
            </P>
            <H2>
                Kontakt:
            </H2>
                <table>
                <tbody>
                    <tr>
                        <td>Telefon:</td>
                        <td>+49 (0)176 – 64949316</td>
                    </tr>
                    <tr>
                        <td>E-Mail:</td>
                        <td>mail@mentorme-ngo.org</td>
                    </tr>
                    </tbody>
                </table>
            <H2>
                Registereintrag:
            </H2>
            <P>
                Eintragung im Handelsregister. Registergericht: Amtsgericht Berlin Charlottenburg- Registernummer: HRB 172739 B
                <br/>
                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
            </P>
            <H1>
                English Version of legal info
            </H1>
            <H1>
                Information provided according to Sec. 5 German Telemedia Act (TMG):
            </H1>
            <P>
                MentorMe gGmbH, Maybachufer 26, 12047 Berlin
            </P>
            <H2>
                Represented by:
            </H2>
            <P>
                Karin Heinzl
            </P>
            <H2>
                Contact:
            </H2>
            <table>
                <tbody>
                    <tr>
                        <td>Telephone:</td>
                        <td>+49 (0)176 – 64949316</td>
                    </tr>
                    <tr>
                        <td>Email:</td>
                        <td>mail@mentorme-ngo.org</td>
                    </tr>
                    </tbody>
                </table>
            <H2>
                Register entry:
            </H2>
            <P>
                Entry in the Handelsregister. Registering court: Amtsgericht Berlin Charlottenburg. Registration number: HRB 172739 B
                <br/>
                We do not take part in online dispute resolutions at consumer arbitration boards.
            </P>
            <img 
                        className="img24"
                        src="/images/erecht24.png"
                        alt="erecht24"
                    />
        </Wrapper>
    )
}

export default ImpressumArticles;
