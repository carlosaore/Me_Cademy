import React from 'react';
import { useHistory } from "react-router-dom";
import { StyledRegForm, GotoRegButton } from '../atoms/StyledRegForm';
import H1 from '../atoms/H1';
import H2 from '../atoms/H2';

const HomeReg = () => {
    const history = useHistory();

    return (
        <StyledRegForm>
            <div>
                <H1>MeCademy</H1>
                <H2>Erfolgreich bewerben!</H2>
                <GotoRegButton
                    onClick={() => history.push("/Registration")}
                >
                    Anmeldung
                </GotoRegButton>
            </div>
        </StyledRegForm>
    )
}

export default HomeReg;