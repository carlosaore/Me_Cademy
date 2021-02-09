import React from 'react'
import MetaDecorator from '../metadecorator/MetaDecorator';
import styled from 'styled-components';
import Quote from '../molecules/Quote';
import * as typeformEmbed from '@typeform/embed';
import TypeformRight from '../organism/reg_form';
import Popup from '../organism/Popup_form';
import HeroImg from '../atoms/HeroImg';
import StyledHomeQuoteForm from '../atoms/StyledHomeQuoteForm';
import TypeformEmbedInfotext from '../molecules/TypeformEmbedInfotext';
import PicBoxAboveTypeform from '../atoms/PicBoxAboveTypeform';
import { textData } from '../../data/textData';
import RegHeroImg from '../molecules/RegistrationHeroImg'


const Registration = () => {
    return (
        <div>
            <MetaDecorator
             description='Registration'
             title='Register Here'
             />
            <RegHeroImg />
            <StyledHomeQuoteForm />
            <Quote />
            <PicBoxAboveTypeform />
            <TypeformEmbedInfotext />
        </div>
    )
}

export default Registration;
