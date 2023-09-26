
import React from 'react'; // Import React
import './Footer.css';
import logo from '../images/logo.PNG';


function Footer() {
    return (
        <div className="Footer">
            <footer className="footer">
                <div className="footer-top-wrap">
                    <div className="wrapper p-wrap-left p-wrap-right">
                        <div className="footer-top">
                            <div className="footer-col footer-col-1">
                                <div className="footer-logo">
                                    <a className="logo"  style={{ pointerEvents: 'none' }}>
                                        <img src={logo} alt="aph-group.kz" />
                                    </a>
                                </div>
                            </div>
                            <div className="footer-col footer-col-2">
                                <div className="footer-cities">
                                    <div className="city-item">
                                        <div className="city-title"></div>
                                        <div className="footer-section">
                                            <h3>Контакты</h3>
                                            <p>Адрес: ул. Примерная, 123</p>
                                            <p>Телефон: +7 123-45-67</p>
                                            <p>Email: info@example.com</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="footer-col footer-col-3">
                                <ul className="footer-menu">
                                    <li><a href="onas.php">О нас</a></li>
                                    <li><a href="contact.php">Контакты</a></li>
                                </ul>
                            </div>
                            <div className="footer-col footer-col-4">
                                <div className="col-4-contacts">
                                    <a href="tel:+78005004533" className="footer-phone tracking">8 (800) 500-45-33</a>
                                    <div className="call-time">10:00 - 18:00 по Алмате</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom-wrap">
                    <div className="wrapper p-wrap-left p-wrap-right">
                        <div className="footer-bottom">
                            <div className="footer-bottom-left">
                                <p>©2023 APH GROUP</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
