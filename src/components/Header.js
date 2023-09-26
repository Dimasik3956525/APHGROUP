import React from 'react'; // Import React
import './header.css';
import logo from '../images/logo.PNG';
function Header() {
    return (
        <div className="header">
            <header className="header">
                <div className="header-top">
                    <div className="header-grid">
                        <div className="header-top--left">
                            <a className="logo" href="">
                                <img src={logo} alt="" />
                            </a>
                        </div>
                        <div className="header-top--right p-wrap-right">
                            <nav className="top-nav">
                                <div className="desktop-menu">
                                    <ul>
                                        <li className="first">О нас</li>
                                        <li className="last">Контакты</li>
                                    </ul>
                                </div>
                            </nav>
                            <div className="header-phone">
                                <a href="tel:+78005009422" className="top-phone-link tracking">8 (888) 888-88-88</a>
                                <span>Наш номер</span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default Header; // Export the "Header" component as the default export
