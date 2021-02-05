import {
    Footer,
    Container,
    FooterWidgets,
    FooterWidget,
    Li,
    SocialMediaIcon
} from '../Atoms/mentormeFooterAtoms';
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
                                <Li><Link to='/Program'>Program</Link></Li>
                            </ul>
                    </FooterWidgets>
                    <FooterWidgets>
                        <a href="https://facebook.com/MentorMeBerlin">
                            <SocialMediaIcon src="https://mentorme-ngo.org/wp-content/uploads/2020/12/facebook-logo.png" alt="facebook"/>
                        </a>
                        <a href="https://instagram.com/mentorme_berlin">
                            <SocialMediaIcon src="https://mentorme-ngo.org/wp-content/uploads/2020/12/instagram-logo.png" alt="instagram" />
                        </a>
                        <a href="https://twitter.com/MentorMe_Berlin">
                            <SocialMediaIcon src="https://mentorme-ngo.org/wp-content/uploads/2020/12/twitter-logo.png" alt="twitter"/>
                        </a>
                        <a href="https://www.linkedin.com/company/mentorme/">
                            <SocialMediaIcon src="https://mentorme-ngo.org/wp-content/uploads/2020/12/linkedin-logo-1.png" alt="linkedin" />
                        </a>
                    </FooterWidgets>
                </FooterWidget>
            </Container>
        </Footer>
    )
}