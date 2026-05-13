import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    const navStyle = {
        backgroundColor: '#0077b6',
        color: 'white',
        padding: '10px',
        textAlign: 'center',
        alignItems: 'center',
        display: "flex",
        gap: "15px"

    };

    const leftStyle = {
        display: 'flex',
        alignItems: 'center',


    };

    const logoStyle = {
        borderRadius: '10px'
    };

    const titleStyle = {
        display: 'flex',
    };
    const linksStyle = {
        display: 'flex',
        gap: '25px',
        marginLeft: 'auto',
        fontWeight: 'bold',
        cursor: 'pointer',
        color: "white"
    };

    return (
        <div style={navStyle}>
            <div style={leftStyle}>
                <img
                    src="/images/logonav.png"
                    alt='logo'
                    width={60}
                    style={logoStyle}
                />
            </div>
            <div>
                <h2 style={{ titleStyle, fontSize: 20 }}>Doctor's On Call</h2>
            </div>
            <div style={linksStyle}>
                <Link
                    to="/" style={{ color: "white", textDecoration: "none" }} >
                    Home
                </Link>
                <Link
                    to="/Doctors" style={{ color: "white", textDecoration: "none" }} >
                    Doctors
                </Link>
                <Link
                    to="/About" style={{ color: "white", textDecoration: "none" }} >
                    About
                </Link>


                {/* <span>Home</span>
                <span>Doctors</span>
                <span>About</span> */}

            </div>

        </div>
    );
}

export default Navbar;


