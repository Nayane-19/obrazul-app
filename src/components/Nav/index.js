import React from 'react';
import Search from '../Search/index';
import Logo from '../../images/Logo.png'
import {Image, NavContent, Paragraph} from './NavElements'
import {Section} from '../../styles/styles'

function Nav () {
    return(
        <Section>
            <NavContent>
            <Image src={Logo} alt="Logo"/>
            <Search />
            <Paragraph>Compre sem sair do conforto da sua casa</Paragraph>
            </NavContent>
        </Section>

    );
}

export default Nav;