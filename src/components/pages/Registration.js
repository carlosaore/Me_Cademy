import React from 'react'
import MetaDecorator from '../metadecorator/MetaDecorator';
import TypeformEmbedInfotext from '../molecules/TypeformEmbedInfotext';
import PicBoxAboveTypeform from '../atoms/PicBoxAboveTypeform';
import RegHeroImg from '../molecules/RegistrationHeroImg'
import MainContentWrapper from '../atoms/MainContentWrapper';

const Registration = () => {
    return (
        <div>
            <MetaDecorator
                description='Anmeldung'
                title='Anmeldung • MeCademy'
            />
            <RegHeroImg />  {/* This may have to go, doesn't look right*/}
            <PicBoxAboveTypeform />
            <MainContentWrapper>
                <TypeformEmbedInfotext />
            </MainContentWrapper>
        </div>
    )
}

export default Registration;
