import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {

    const containerStyle = {
        textAlign: 'center',
        // padding: '80px 20px',
        maxWidth: '800px',
        margin: '0 auto'
    };

    const titleStyle = {
        fontSize: '40px',
        color: '#0077b6',
        marginBottom: '20px'
    };

    const taglineStyle = {
        fontSize: '25px',
        lineHeight: 1.8,
        color: '#333',
        marginBottom: '20px',
        // textAlign: "justify"
    };

    const descriptionStyle = {
        fontSize: '20px',
        color: '#2c2b2b',
        lineHeight: 1.8,
        marginBottom: '30px',
        textAlign: "justify"
    };

    const buttonStyle = {
        backgroundColor: '#0077b6',
        color: 'white',
        border: 'none',
        padding: '15px 30px',
        fontSize: '18px',
        borderRadius: '8px',
        cursor: 'pointer'
    };

    return (
        <div style={containerStyle}>
            <h1 style={titleStyle}>Doctor's On Call</h1>

            <h2 style={taglineStyle}>
                Get instant medical support at home, stay connected with expert doctors on call,
                and in emergencies, access rapid ambulance rescue services when every second matters.
            </h2>

            <p style={descriptionStyle}>
                Doctor’s On Call is a complete healthcare support system designed to ensure that
                medical help is always within your reach. Whether you need a routine consultation
                from the comfort of your home or immediate guidance through a doctor on call,
                our platform connects you with qualified medical professionals in real time.

                <br /><br />

                In case of urgent or critical situations, our system ensures seamless escalation
                to emergency medical services. If required, patients are directed towards
                hospital-based emergency care and Rescue 1122 ambulance service, equipped with
                essential life-saving equipment and trained medical staff including junior doctors.

                <br /><br />

                Our goal is to provide fast, reliable, and structured healthcare support -
                from home care to emergency response - ensuring that no patient is left without help
                when it matters most.
            </p>
            <Link to="/Doctors">
                <button style={buttonStyle}>View Doctors</button>
            </Link>
        </div>
    )
}

export default Home;
