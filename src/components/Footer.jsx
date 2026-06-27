import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    const containerStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '30px',
        maxWidth: '1200px',
        margin: '0 auto'
    };

    const footerStyle = {
        backgroundColor: '#012a63',
        color: 'white',
        padding: '40px 25px 15px',
        marginTop: '60px'
    };

    const sectionStyle = {
        flex: '1',
        minWidth: '250px'
    };

    const titleStyle = {
        fontSize: '20px',
        marginBottom: '15px',
        color: '#48cae4'
    };

    const textStyle = {
        fontSize: '15px',
        margin: '5px ',

    };
    const linkStyle = {

        color: 'white',
        textDecoration: 'none',
        display: 'inline-block',
        // display: 'block',
        marginBottom: '5px',
        transition: '0.3s ease'
    };
    const linkHoverEnter = (e) => {
        e.target.style.color = '#48cae4';
        e.target.style.transform = 'translateX(8px)';
    };
    const linkHoverLeave = (e) => {
        e.target.style.color = 'white';
        e.target.style.transform = 'translateX(0)';
    };
    const contactStyle = {
        color: 'white',
        textDecoration: 'none',
        transition: '0.3s ease'
    };
    const contactHoverEnter = (e) => {
        e.target.style.color = '#48cae4';
    };

    const contactHoverLeave = (e) => {
        e.target.style.color = 'white';
    };


    return (
        <footer style={footerStyle}>

            <div style={containerStyle}>

                <div style={sectionStyle}>

                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '15px',
                            marginBottom: '15px'
                        }}>

                        <img
                            src="/images/logonav.png"
                            alt="logo"
                            width={70}
                            style={{
                                borderRadius: '12px'
                            }}
                        />

                        <h2
                            style={{ fontSize: '20px', margin: '5px' }}>
                            Doctor's On Call
                        </h2>

                    </div>

                    <p
                        style={{ ...textStyle, color: '#dbeafe', lineHeight: '2' }}>
                        Reliable healthcare support anytime, anywhere.
                    </p>

                </div>

                <div style={sectionStyle}>
                    <h3 style={titleStyle}>Quick Links</h3>

                    <Link to="/" style={linkStyle}
                        onMouseEnter={linkHoverEnter}
                        onMouseLeave={linkHoverLeave}>
                        {'>'} Home
                    </Link>
                    <br />

                    <Link to="/doctors" style={linkStyle}
                        onMouseEnter={linkHoverEnter}
                        onMouseLeave={linkHoverLeave}>
                        {'>'} Doctors
                    </Link>
                    <br />

                    <Link to="/about" style={linkStyle}
                        onMouseEnter={linkHoverEnter}
                        onMouseLeave={linkHoverLeave}>
                        {'>'} About
                    </Link>
                    <br />

                    <Link to="/contact" style={linkStyle}
                        onMouseEnter={linkHoverEnter}
                        onMouseLeave={linkHoverLeave}>
                        {'>'} Contact
                    </Link>
                    <br />
                </div>

                <div style={sectionStyle}>
                    <h3 style={titleStyle}>Contact</h3>

                    <p style={textStyle}> 📍  Karachi, Pakistan</p>
                    <p style={textStyle}
                    > ✉️{' '}
                        <a href="mailto:support@doctorsoncall.com"
                            style={contactStyle}
                            onMouseEnter={contactHoverEnter}
                            onMouseLeave={contactHoverLeave}>
                            support@doctorsoncall.com
                        </a>
                    </p>
                    <p style={textStyle}
                    > 📞{' '}
                        <a href="tel:+92 300 1234567"
                            style={contactStyle}
                            onMouseEnter={contactHoverEnter}
                            onMouseLeave={contactHoverLeave}>
                            +92 300 1234567</a>
                    </p>
                </div>

            </div>

            <p
                style={{
                    ...textStyle,
                    marginTop: '40px',
                    textAlign: 'center',
                    borderTop: '1px solid rgba(255,255,255,0.08)',
                    paddingTop: '20px'
                }}
            >
                © 2026 Doctor's On Call - All Rights Reserved.
            </p>

        </footer>
    );
}

export default Footer;