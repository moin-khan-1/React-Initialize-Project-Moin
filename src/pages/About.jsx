import React from 'react';

function About() {
    const containerStyle = {
        textAlign: 'center',
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
        marginBottom: '20px'
    };

    const descriptionStyle = {
        fontSize: '20px',
        color: '#2c2b2b',
        lineHeight: 1.8,
        marginBottom: '30px',
        textAlign: 'justify'
    };

    return (
        <div style={containerStyle}>
            <h1 style={titleStyle}>About Doctor's On Call</h1>

            <h2 style={taglineStyle}>
                Transforming healthcare accessibility for every home and community.
            </h2>

            <p style={descriptionStyle}>
                Doctor's On Call is an innovative healthcare platform created to connect
                patients with qualified doctors in their surrounding areas. The purpose
                of this platform is to ensure that medical assistance is available
                quickly and conveniently without unnecessary travel and delays.

                <br /><br />

                Patients can search for nearby doctors, view their specialties and
                addresses, and request home visits whenever medical attention is needed.
                This saves valuable time, transportation costs, and provides immediate
                professional guidance.

                <br /><br />

                In emergency situations, the platform can also guide patients toward
                hospital-based care and ambulance services such as Rescue 1122, ensuring
                rapid response when urgent medical intervention is required.

                <br /><br />

                Our mission is to make healthcare more accessible, efficient, and
                reliable for everyone.
            </p>
        </div>
    );
}

export default About;