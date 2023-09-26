
import './Contact.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import InputMask from 'react-input-mask';

function Contact() {
    const [isVisible, setIsVisible] = useState(false);
    const [hasAnimated, setHasAnimated] = useState(false);
    const [isFormVisible, setIsFormVisible] = useState(true);

    const [isFormValid, setIsFormValid] = useState(false); // Добавляем состояние для валидации формы

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + window.innerHeight;
            const formPosition = document.querySelector('.discountForm').offsetTop;

            if (scrollPosition > formPosition) {
                setIsVisible(true);

                if (!hasAnimated) {
                    setHasAnimated(true);
                }
            } else {
                setIsFormVisible(true);
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [hasAnimated]);

    useEffect(() => {
        if (!isFormVisible && isVisible) {
            setHasAnimated(false);
        }
    }, [isVisible, isFormVisible]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!isFormValid) {
            return; // Не отправляем форму, если поля не заполнены
        }

        try {
            // Отправляем данные на бэкенд
            await axios.post('http://localhost:4000/api/user', formData);

            // Очищаем форму после успешной отправки
            setFormData(initialState);
        } catch (error) {
            console.error('Ошибка:', error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };
    const initialState = {
        name: '',
        phone: '',
        email: ''
    };

    const [formData, setFormData] = useState(initialState);
    return (
        <div className="Contact">

<div className="contctMap">
    <h2>Мы находимся тут</h2>

    <div className="discountBlock">
        <div className="discountInfo">
                        <iframe
                            title="Google Maps"
                            width="100%"
                            height="400"
                            src="https://maps.google.com/maps?q=город%20Алматы,%20ул.%20Сатпаева%2090/1&amp;output=embed"
                        ></iframe>
        </div>
        <div className={`discountForm ${isVisible ? 'active' : ''}`}>
            <form onSubmit={handleSubmit}>
                <div className='Text'>
                <span>Оставте заявку и мы свяжемся с вами</span>
                </div>
                <input type="text" name="name" placeholder="Имя" value={formData.name} onChange={handleChange} />
                <InputMask
                    type="tel"
                    mask="+7 (999) 999-99-99"
                    maskChar=" "
                    name="phone"
                    placeholder="Номер телефона"
                    value={formData.phone}
                    onChange={handleChange}
                    onKeyPress={(e) => {
                        if (isNaN(Number(e.key))) {
                            e.preventDefault();
                        }
                    }}
                />
                <input type="text" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
                <button type="submit" disabled={!isFormValid}>Оставить заявку</button> {/* Отключение кнопки при незаполненных полях */}
            </form>

        </div>

    </div>

        <div className="contact-us">
            <h2>Контакты</h2>
            <div className='contactInfo'>
            <ul>
                <li><strong>Адрес:</strong> город Алматы, ул. Сатпаева 90/1</li>
                <li><strong>Телефон:</strong> +77273118358 , +77273118359 , +77017255264</li>
                <li><strong>Email:</strong> info@example.com</li>
            </ul>
            </div>
        </div>
</div>
        </div>
    );
}

export default Contact;
