import React from 'react';
import {
    FooterWrapper,
    FooterTitle,
    FooterLogo,
    FooterDescription,
    HorizontalLine,
    Copyright
} from './Footer.styled';
import Logo from '../../../icons/homepage_logo.jpg';
import {FaFacebook, FaTwitter, FaLinkedin, FaGoogle} from 'react-icons/fa';
import {Container} from '../../../components/Global.styled';


function Footer() {
    return (
        <Container>
            <FooterWrapper>
                <div>
                    <FooterTitle>
                        Cosmetology Build
                    </FooterTitle>
                    <FooterDescription>Lorem ipsum dolor sit amet, consectetur<br/> adipisicing elit. Dicta laboriosam
                        nihil
                        quasi repudiandae<br/> totam velit veritatis?</FooterDescription>
                </div>
                <FooterLogo src={Logo} alt="logo"/>
                <div>
                    <FaFacebook style={{paddingLeft: "20px",}} size={42}/>
                    <FaTwitter style={{paddingLeft: "20px",}} size={42}/>
                    <FaLinkedin style={{paddingLeft: "20px",}} size={42}/>
                    <FaGoogle style={{paddingLeft: "20px",}} size={42}/>
                </div>
            </FooterWrapper>
            <HorizontalLine/>
            <Copyright> All rights reserved © Dzyuba Yevhen IOT 2020 </Copyright>
        </Container>
    );
}
export default Footer;