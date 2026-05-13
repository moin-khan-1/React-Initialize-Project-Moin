import React from 'react';

function Footer() {
    const footerStyle = {
        backgroundColor: '#0077b6',
        color: 'white',
        textAlign: 'center',
        padding: '30px 20px',
        marginTop: '40px'
    };

    const titleStyle = {
        fontSize: '25px',
        marginBottom: '10px'
    };

    const textStyle = {
        fontSize: '15px',
        margin: '5px '
    };

    return (
        <footer style={footerStyle}>
            <h2 style={titleStyle}>Doctor's On Call</h2>

            <p style={textStyle}>Karachi, Pakistan</p>
            <p style={textStyle}>support@doctorsoncall.com</p>
            <p style={textStyle}>+92 300 1234567</p>

            <p style={{ textStyle, marginTop: '20px' }}>
                © 2026 All Rights Reserved.
            </p>
        </footer>
    );
}

export default Footer;