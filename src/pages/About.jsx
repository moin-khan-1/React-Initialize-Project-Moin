// import React from 'react';

// function About() {
//     const containerStyle = {
//         textAlign: 'center',
//         maxWidth: '800px',
//         margin: '0 auto'
//     };

//     const titleStyle = {
//         fontSize: '40px',
//         color: '#0077b6',
//         marginBottom: '20px'
//     };

//     const taglineStyle = {
//         fontSize: '25px',
//         lineHeight: 1.8,
//         color: '#333',
//         marginBottom: '20px'
//     };

//     const descriptionStyle = {
//         fontSize: '20px',
//         color: '#2c2b2b',
//         lineHeight: 1.8,
//         marginBottom: '30px',
//         textAlign: 'justify'
//     };

//     return (
//         <div style={containerStyle}>
//             <h1 style={titleStyle}>About Doctor's On Call</h1>

//             <h2 style={taglineStyle}>
//                 Transforming healthcare accessibility for every home and community.
//             </h2>

//             <p style={descriptionStyle}>
//                 Doctor's On Call is an innovative healthcare platform created to connect
//                 patients with qualified doctors in their surrounding areas. The purpose
//                 of this platform is to ensure that medical assistance is available
//                 quickly and conveniently without unnecessary travel and delays.

//                 <br /><br />

//                 Patients can search for nearby doctors, view their specialties and
//                 addresses, and request home visits whenever medical attention is needed.
//                 This saves valuable time, transportation costs, and provides immediate
//                 professional guidance.

//                 <br /><br />

//                 In emergency situations, the platform can also guide patients toward
//                 hospital-based care and ambulance services such as Rescue 1122, ensuring
//                 rapid response when urgent medical intervention is required.

//                 <br /><br />

//                 Our mission is to make healthcare more accessible, efficient, and
//                 reliable for everyone.
//             </p>
//         </div>
//     );
// }

// export default About;

import React from 'react';

function About() {

    const containerStyle = {
        maxWidth: '1200px',
        margin: '30px auto',
        padding: '20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '50px',
        flexWrap: 'wrap'
    };

    const leftStyle = {
        flex: '1',
        minWidth: '300px'
    };

    const rightStyle = {
        flex: '1',
        minWidth: '300px',
        textAlign: 'center'
    };

    const titleStyle = {
        fontSize: '40px',
        color: '#0077b6',
        marginBottom: '25px',
        fontWeight: '700',
        lineHeight: '1.2',
        textAlign: 'center'
    };

    const taglineStyle = {
        fontSize: '24px',
        lineHeight: '1.6',
        color: '#2b2b2b',
        marginBottom: '25px',
        fontWeight: '400',
        maxWidth: '700px',
        textAlign: 'justify'
    };

    const descriptionStyle = {
        fontSize: '18px',
        color: '#555',
        lineHeight: '1.9',
        backgroundColor: '#f8fbff',
        padding: '25px',
        borderLeft: '5px solid #0077b6',
        borderRadius: '12px',
        boxShadow: '0 6px 15px rgba(0,0,0,0.08)',
        textAlign: 'justify'
    };

    const missionSectionStyle = {
        width: '100%',
        marginTop: '30px',
        textAlign: 'center'
    };

    const missionContainerStyle = {
        display: 'flex',
        justifyContent: 'center',
        gap: '25px',
        flexWrap: 'wrap',
        marginTop: '40px'
    };

    const missionCardStyle = {
        width: '280px',
        padding: '30px 25px',
        backgroundColor: '#ffffff',
        borderRadius: '18px',
        boxShadow: '0 6px 15px rgba(0,0,0,0.08)',
        cursor: 'pointer',
        transition: '0.3s ease'
    };

    return (
        <div style={containerStyle}>

            <div style={leftStyle}>

                <h1 style={titleStyle}>
                    About Doctor's On Call
                </h1>

                <h2 style={taglineStyle}>
                    Transforming healthcare accessibility for every home and community.
                </h2>

                <p style={descriptionStyle}>
                    Doctor's On Call is a modern healthcare platform designed
                    to connect patients with qualified doctors quickly and efficiently.
                    Our mission is to make medical support more accessible, reliable,
                    and convenient for everyone.

                    <br /><br />

                    Patients can explore doctor profiles, view specialties,
                    check addresses, and book appointments online with ease.
                    The platform helps reduce unnecessary delays and ensures
                    professional healthcare guidance whenever needed.

                    <br /><br />

                    In emergency situations, patients can also receive support
                    regarding urgent medical care and ambulance services,
                    ensuring rapid response during critical moments.
                </p>

            </div>

            <div style={rightStyle}>

                <img
                    src="/images/imgabout1.avif"
                    alt="About Healthcare"
                    style={{
                        width: '100%',
                        maxWidth: '535px',
                        borderRadius: '12px',
                        boxShadow: '0 10px 25px rgba(0,0,0,0.15)',
                        objectFit: 'cover'
                    }}
                />

            </div>

            <div style={missionSectionStyle}>

                <h1
                    style={{
                        color: '#0077b6',
                        fontSize: '35px'
                    }}
                >
                    Our Mission
                </h1>

                <div style={missionContainerStyle}>

                    <div
                        style={missionCardStyle}

                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-8px)';
                            e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.15)';
                        }}

                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = '0 6px 15px rgba(0,0,0,0.08)';
                        }}
                    >
                        <h2>🏥 Accessible Care</h2>

                        <p>
                            Making professional healthcare services available
                            for everyone anytime and anywhere.
                        </p>
                    </div>

                    <div
                        style={missionCardStyle}

                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-8px)';
                            e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.15)';
                        }}

                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = '0 6px 15px rgba(0,0,0,0.08)';
                        }}
                    >
                        <h2>⚡Fast Response</h2>

                        <p>
                            Providing rapid medical guidance and emergency
                            healthcare support without delays.
                        </p>
                    </div>

                    <div
                        style={missionCardStyle}

                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-8px)';
                            e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.15)';
                        }}

                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = '0 6px 15px rgba(0,0,0,0.08)';
                        }}
                    >
                        <h2>💙 Trusted Doctors</h2>

                        <p>
                            Connecting patients with experienced and trusted
                            medical professionals for better healthcare.
                        </p>
                    </div>

                </div>

            </div>

        </div>
    );
}

export default About;