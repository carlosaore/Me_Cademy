import React from 'react';
import P from '../atoms/P';
import styled from 'styled-components';

const ProgramEmailForm = styled.div `

    a {
    text-decoration: none;
    color: ${props => props.theme.colors.meCademySalmon};
    }
`
    
const ProgramEmail = () => {
    return (
        <ProgramEmailForm>
            <P alignCenter>
                <b>Du hast noch Fragen?</b>
                <br/>
                Schreib uns: <a href="mailto:mecademy@mentorme-ngo.org">mecademy@mentorme-ngo.org</a>
            </P>
        </ProgramEmailForm>
    )
}

export default ProgramEmail;
