import React from 'react';
import whatsappIcon from '../assets/images/whatsapp.png';
import { Container } from 'react-bootstrap';

const WhatsappIcon = () => {
    const iconStyles = {
        position: 'fixed',
        bottom: '60px',
        right: '75px',
        zIndex: 1000,
        width: '50px',
        height: '50px',
    };

    const imageStyles = {
        width: '100%',
        height: 'auto',
        objectFit: 'contain',
        transition: 'transform 0.3s ease',
    };

    return (
        <Container fluid>
            <div style={iconStyles}>
                <a href="https://wa.me/9116577183" target="_blank" rel="noopener noreferrer">
                    <img
                        src={whatsappIcon}
                        alt="WhatsApp"
                        style={imageStyles}
                        onMouseEnter={(e) => (e.target.style.transform = 'scale(1.1)')}
                        onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
                    />
                </a>
            </div>
        </Container>
    );
};

export default WhatsappIcon;
