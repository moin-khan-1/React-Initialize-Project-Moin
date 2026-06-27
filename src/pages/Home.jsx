import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {

    const containerStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        maxWidth: '1200px',
        margin: '30px auto',
        padding: '20px',
        gap: '40px',
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
    }

    const titleStyle = {
        fontSize: '40px',
        color: '#0077b6',
        marginBottom: '60px',
        fontWeight: '700',
        lineHeight: '1.5',
        textAlign: 'center'
    };

    const taglineStyle = {
        fontSize: '24px',
        lineHeight: '1.6',
        color: '#515050',
        marginBottom: '35px',
        fontWeight: '500',
        maxWidth: '700px',
        textAlign: 'justify',
        backgroundColor: '#f8fbff',
        padding: '30px',
        borderLeft: '5px solid #013c5c',
        borderRadius: '20px',
        boxShadow: '0 6px 15px rgba(0,0,0,0.08)',
    };

    const descriptionStyle = {
        fontSize: '18px',
        color: '#555',
        lineHeight: '1.9',
        backgroundColor: '#f8fbff',
        padding: '30px',
        marginBottom: '40px',
        maxWidth: '620px',
        textAlign: 'justify',
        borderLeft: '5px solid #0077b6',
        borderRadius: '20px',
        boxShadow: '0 6px 15px rgba(0,0,0,0.08)',

    };

    const buttonStyle = {
        backgroundColor: '#0077b6',
        color: 'white',
        border: 'none',
        padding: '15px 35px',
        fontSize: '18px',
        borderRadius: '12px',
        cursor: 'pointer',
        fontWeight: '550',
        transition: '0.3s ease',
    };
    const servicesSectionStyle = {
        width: '100%',
        marginTop: '30px',
        textAlign: 'center'
    };

    const servicesContainerStyle = {
        display: 'flex',
        justifyContent: 'center',
        gap: '20px',
        flexWrap: 'wrap',
        marginTop: '40px'
    };

    const serviceCardStyle = {
        width: '300px',
        padding: '25px',
        backgroundColor: '#fdfdfd',
        borderRadius: '15px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        textAlign: 'center',
        transition: '0.4s ease',
        cursor: 'pointer'
    };
    const whySectionStyle = {
        width: '100%',
        marginTop: '80px',
        textAlign: 'center'
    };

    const whyContainerStyle = {
        display: 'flex',
        justifyContent: 'center',
        gap: '20px',
        flexWrap: 'wrap',
        marginTop: '40px'
    };

    const whyCardStyle = {
        width: '300px',
        padding: '25px',
        backgroundColor: '#f8fbff',
        borderRadius: '15px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        textAlign: 'center',
        transition: '0.4s ease',
        cursor: 'pointer'
    };
    const serviceButtonStyle = {
        marginTop: '15px',
        padding: '10px 20px',
        backgroundColor: '#0077b6',
        color: 'white',
        border: 'none',
        borderRadius: '8px',
        cursor: 'pointer',
        fontSize: '15px',
        fontWeight: '500'
    };

    return (
        <div style={containerStyle}>
            <div style={leftStyle}>
                <h1 style={titleStyle}>Doctor's On Call</h1>

                <h2 style={taglineStyle}>
                    Fast, reliable, and professional healthcare support -
                    from online consultations to emergency medical assistance.
                </h2>

                <p style={descriptionStyle}>

                    Doctor’s On Call provides fast, reliable, and professional healthcare services
                    from online consultations to emergency medical support - ensuring expert care
                    is always within your reach.

                </p>
                <div style={{ textAlign: 'center' }}>
                    <Link to="/Doctors">
                        <button style={buttonStyle}
                            onMouseEnter={(e) => e.target.style.backgroundColor = '#023e8a'}
                            onMouseLeave={(e) => e.target.style.backgroundColor = '#0077b6'}>View Doctors</button>
                    </Link>
                </div>
            </div>

            <div style={rightStyle}>
                <img
                    src="/images/heroimg-3.avif"
                    alt="Doctors Team"
                    style={{
                        width: '100%',
                        maxWidth: '500px',
                        height: '500px',
                        objectFit: 'cover',
                        borderRadius: '20px'
                    }}
                />
            </div>
            <div style={servicesSectionStyle}>
                <h1 style={{ color: '#0077b6' }}>
                    Our Services
                </h1>

                <div style={servicesContainerStyle}>

                    <div style={serviceCardStyle}>
                        <h2>🩺 Online Consultation</h2>

                        <p>
                            Connect with experienced doctors from the comfort of your home.
                        </p>
                        <Link to="/Doctors">
                            <button style={serviceButtonStyle}
                                onMouseEnter={(e) => e.target.style.backgroundColor = '#023e8a'}
                                onMouseLeave={(e) => e.target.style.backgroundColor = '#0077b6'}>
                                Explore
                            </button>
                        </Link>
                    </div>

                    <div style={serviceCardStyle}>
                        <h2>🚑 Emergency Support</h2>

                        <p>
                            Get rapid emergency medical assistance whenever needed.
                        </p>
                        <Link to="/Doctors">
                            <button style={serviceButtonStyle}
                                onMouseEnter={(e) => e.target.style.backgroundColor = '#023e8a'}
                                onMouseLeave={(e) => e.target.style.backgroundColor = '#0077b6'}>
                                Explore
                            </button>
                        </Link>
                    </div>

                    <div style={serviceCardStyle}>
                        <h2>📅 Appointment Booking</h2>

                        <p>
                            Easily schedule appointments with specialist doctors online.
                        </p>
                        <Link to="/Doctors">
                            <button style={serviceButtonStyle}
                                onMouseEnter={(e) => e.target.style.backgroundColor = '#023e8a'}
                                onMouseLeave={(e) => e.target.style.backgroundColor = '#0077b6'}>
                                Explore
                            </button>
                        </Link>

                    </div>
                </div>
                <div style={whySectionStyle}>

                    <h1 style={{ color: '#0077b6' }}>
                        Why Choose Us
                    </h1>

                    <div style={whyContainerStyle}>

                        <div style={whyCardStyle}

                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-8px)';
                                e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.15)';
                            }}

                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
                            }}>
                            <h2>👨‍⚕️ Expert Doctors</h2>

                            <p>
                                Connect with highly qualified and experienced medical professionals.
                            </p>
                        </div>

                        <div style={whyCardStyle}

                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-8px)';
                                e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.15)';
                            }}

                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
                            }}>
                            <h2>⏰ 24/7 Support</h2>

                            <p>
                                Healthcare assistance available anytime for emergencies and consultations.
                            </p>
                        </div>

                        <div style={whyCardStyle}

                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-8px)';
                                e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.15)';
                            }}

                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
                            }}>
                            <h2>🚑 Fast Emergency Response</h2>

                            <p>
                                Quick access to emergency services and ambulance support when needed.
                            </p>
                        </div>

                        <div style={whyCardStyle}

                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-8px)';
                                e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.15)';
                            }}

                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
                            }}>
                            <h2>📅 Easy Appointments</h2>

                            <p>
                                Book appointments online quickly and conveniently from anywhere.
                            </p>
                        </div>

                    </div>

                </div>
            </div >
        </div >
    )
}

export default Home;
