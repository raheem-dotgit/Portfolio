'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faGithub, faYoutube, faLinkedin } from '@fortawesome/free-brands-svg-icons'


const Footer = () =>
{
    return (
        <footer className="footer">
            <a href="#" className="footer--link">raheem.dev7@gmail.com</a>
            <ul className="social-list">
                <li className="social-list__items">
                    <a href="#" className="social-list__link"
                    ><FontAwesomeIcon icon={faTwitter} /></a>
                </li>

                <li className="social-list__items">
                    <a href="https://github.com/Sonuje7" target="_blank" className="social-list__link"
                    ><FontAwesomeIcon icon={faGithub} /></a>
                </li>

                <li className="social-list__items">
                    <a href="#" className="social-list__link"
                    ><FontAwesomeIcon icon={faYoutube} /></a>
                </li>

                <li className="social-list__items">
                    <a href="https://www.linkedin.com/in/abdul-raheem-60b924297/" target="_blank" className="social-list__link"
                    ><FontAwesomeIcon icon={faLinkedin} /></a>
                </li>
            </ul>
        </footer>
    )
}
export default Footer