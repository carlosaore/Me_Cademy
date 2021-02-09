import React from 'react';
import Popup from './Popup_form';
import StyledRegForm from '../atoms/StyledRegForm';

const HomeReg = () => {
    return (
        <StyledRegForm>
            <div>
                <h1>MeCademy</h1>
                <h3>Erfolgreich bewerben!</h3>
                <Popup/>
            </div>
        </StyledRegForm>
    )
}

export default HomeReg;