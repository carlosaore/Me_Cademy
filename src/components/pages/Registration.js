import React from 'react'
import MetaDecorator from '../metadecorator/MetaDecorator';
import TypeformEmbedInfotext from '../molecules/TypeformEmbedInfotext';
import RegHeroImg from '../molecules/RegistrationHeroImg'
import MainContentWrapper from '../atoms/MainContentWrapper';
import RegistrationQuote from '../molecules/RegistrationQuote';

const Registration = () => {
    return (
        <div>
            <MetaDecorator
                description='Anmeldung'
                title='Anmeldung • MeCademy'
            />
            <RegHeroImg />
            <MainContentWrapper>
                <RegistrationQuote />
                <TypeformEmbedInfotext />
            </MainContentWrapper>
        </div>
    )
}

export default Registration;
