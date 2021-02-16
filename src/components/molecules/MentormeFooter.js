import {
    Footer,
    Container,
    FooterWidgets,
    FooterWidget,
    Li,
    SocialMediaIcon
} from '../atoms/mentormeFooterAtoms';
import { Link } from 'react-router-dom';

export default function MentormeFooter() {
    return (
        <Footer>
            <Container>
                <FooterWidget>
                    <FooterWidgets>
                            <ul>
                                <Li><Link to='/About'>About</Link></Li>
                                <Li><Link to='/Registration'>Registration</Link></Li>
                                <Li><Link to='/Coaches'>Coaches</Link></Li>
                                <Li><Link to='/Program'>Programm</Link></Li>
                            </ul>
                    </FooterWidgets>
                    <FooterWidgets>
                        <a href="https://facebook.com/MentorMeBerlin">
                            <SocialMediaIcon src="/icons/facebook-logo.png" alt="facebook"/>
                        </a>
                        <a href="https://instagram.com/mentorme_berlin">
                            <SocialMediaIcon src="/icons/instagram-logo.png" alt="instagram" />
                        </a>
                        <a href="https://twitter.com/MentorMe_Berlin">
                            <SocialMediaIcon src="icons/twitter-logo.png" alt="twitter"/>
                        </a>
                        <a href="https://www.linkedin.com/company/mentorme/">
                            <SocialMediaIcon src="icons/linkedin-logo.png" alt="linkedin" />
                        </a>
                    </FooterWidgets>
                </FooterWidget>
            </Container>
        </Footer>
    )
}