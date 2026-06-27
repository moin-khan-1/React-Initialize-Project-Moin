import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    const navStyle = {
        backgroundColor: '#0077b6',
        color: 'white',
        padding: '15px 40px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        position: 'sticky',
        top: '0',
        zIndex: '1000',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
    };
    const leftSectionStyle = {
        display: 'flex',
        alignItems: 'center',
        gap: '12px'
    };

    const leftStyle = {
        display: 'flex',
        alignItems: 'center',
    };

    const logoStyle = {
        borderRadius: '10px'
    };
    const titleStyle = {
        marginLeft: 'auto',
        fontSize: '24px',
        fontWeight: '700',
        letterSpacing: '1px'
    };
    const linksStyle = {
        display: 'flex',
        gap: '20px',
        alignItems: 'center',
        fontWeight: '600'
    };

    return (
        <div style={navStyle}>
            <div style={leftSectionStyle}>
                <div style={leftStyle}>
                    <img
                        src="/images/logonav.png"
                        alt='logo'
                        width={60}
                        style={logoStyle}
                    />
                </div>
                <div>
                    <h2 style={{ ...titleStyle, fontSize: 20 }}>Doctor's On Call</h2>
                </div>
            </div>
            <div style={linksStyle}>
                {/* <Link
                    to="/" style={{ color: "white", textDecoration: "none" }} >
                    Home
                </Link> */}
                <Link
                    to="/"
                    style={{ color: 'white', textDecoration: 'none', transition: '0.4s' }}
                    onMouseEnter={(e) => e.target.style.color = '#383838'}
                    onMouseLeave={(e) => e.target.style.color = 'white'}>
                    Home
                </Link>
                <Link
                    to="/doctors" style={{ color: 'white', textDecoration: 'none', transition: '0.4s' }}
                    onMouseEnter={(e) => e.target.style.color = '#383838'}
                    onMouseLeave={(e) => e.target.style.color = 'white'}>
                    Doctors
                </Link>
                <Link
                    to="/about" style={{ color: 'white', textDecoration: 'none', transition: '0.4s' }}
                    onMouseEnter={(e) => e.target.style.color = '#383838'}
                    onMouseLeave={(e) => e.target.style.color = 'white'}>
                    About
                </Link>
                <Link
                    to="/contact" style={{ color: 'white', textDecoration: 'none', transition: '0.4s' }}
                    onMouseEnter={(e) => e.target.style.color = '#383838'}
                    onMouseLeave={(e) => e.target.style.color = 'white'}>
                    Contact
                </Link>

            </div>

        </div>
    );
}

export default Navbar;


