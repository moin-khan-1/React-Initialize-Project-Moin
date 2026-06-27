import React from 'react';

function Contact() {

    const containerStyle = {
        maxWidth: '1200px',
        margin: '30px auto',
        padding: '20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'stretch',
        gap: '50px',
        flexWrap: 'wrap'
    };

    const leftStyle = {
        flex: '1',
        minWidth: '280px'
    };

    const rightStyle = {
        flex: '1',
        minWidth: '280px',
    };

    const titleStyle = {
        fontSize: '35px',
        color: '#0077b6',
        marginBottom: '20px',
        fontWeight: '700',
        textAlign: 'center',


    };

    const descriptionStyle = {
        fontSize: '18px',
        color: '#555',
        lineHeight: '1.8',
        backgroundColor: '#f8fbff',
        padding: '40px',
        borderLeft: '5px solid #0077b6',
        borderRadius: '20px',
        boxShadow: '0 6px 15px rgba(0,0,0,0.08)'
    };
    const emergencyBoxStyle = {
        width: '100%',
        maxWidth: '1200px',
        boxSizing: 'border-box',
        // textAlign: '0 0 0 15px',
        margin: '30px auto',
        backgroundColor: '#f8fbff',
        borderLeft: '5px solid #d62828',
        padding: '25px',
        borderRadius: '20px',
        boxShadow: '0 6px 15px rgba(0,0,0,0.08)',

        display: 'flex',
        justifyContent: 'space-between',
        gap: '30px',
        flexWrap: 'wrap'

    };

    const formStyle = {
        backgroundColor: '#f8fbff',
        padding: '35px',
        borderRadius: '20px',
        boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
        borderLeft: '5px solid #0f0f10',
    };

    const inputStyle = {
        width: '100%',
        padding: '15px',
        marginBottom: '20px',
        borderRadius: '10px',
        border: '1px solid #ccc',
        fontSize: '16px',
        boxSizing: 'border-box'
    };

    const textareaStyle = {
        width: '100%',
        padding: '15px',
        marginBottom: '20px',
        borderRadius: '10px',
        border: '1px solid #ccc',
        fontSize: '16px',
        resize: 'none',
        boxSizing: 'border-box'
    };

    const buttonStyle = {
        backgroundColor: '#0077b6',
        color: 'white',
        border: 'none',
        padding: '15px 30px',
        borderRadius: '10px',
        fontSize: '17px',
        cursor: 'pointer',
        fontWeight: '600',
        transition: '0.3s ease',
    };
    const sectionStyle = {
        flex: '1',
        minWidth: '250px',
        textAlign: 'left',
        paddingLeft: '30px'
    };

    return (
        <div>
            <div style={containerStyle}>

                <div style={leftStyle}>

                    <h1 style={titleStyle}>
                        Contact Us
                    </h1>

                    <p style={descriptionStyle}>
                        We are always here to help you with your healthcare needs.
                        Whether you want to book an appointment, ask a medical question,
                        or get emergency guidance, feel free to contact our team anytime.

                        <br /><br />

                        Our support team is available to provide reliable assistance
                        and connect you with professional healthcare services quickly
                        and efficiently.
                    </p>

                </div>


                <div style={rightStyle}>

                    <form
                        style={formStyle}

                        onSubmit={(e) => {
                            e.preventDefault();

                            alert('Message Sent Successfully!');
                        }}
                    >

                        <input
                            type="text"
                            placeholder="Enter your name"
                            style={inputStyle}
                            required
                        />

                        <input
                            type="email"
                            placeholder="Enter your email"
                            style={inputStyle}
                            required
                        />

                        <textarea
                            rows="6"
                            placeholder="Write your message..."
                            style={textareaStyle}
                            required
                        ></textarea>

                        <button
                            type="submit"
                            style={buttonStyle}

                            onMouseEnter={(e) =>
                                e.target.style.backgroundColor = '#023e8a'
                            }

                            onMouseLeave={(e) =>
                                e.target.style.backgroundColor = '#0077b6'
                            }
                        >
                            Send Message
                        </button>

                    </form>

                </div>

            </div>
            <div style={{
                maxWidth: '1200px',
                margin: '0 auto',
                padding: '0 10px'
            }}>
                <div style={{
                    textAlign: 'center',
                    marginBottom: '25px'
                }}>
                    <h1 style={{ color: '#d62828' }}>
                        🚨 Emergency Contacts
                    </h1>
                </div>
                <div style={emergencyBoxStyle}>
                    <div style={sectionStyle}>
                        <h3 style={{
                            color: '#0077b6',
                            marginBottom: '15px',
                            borderBottom: '2px solid #0077b6',
                            paddingBottom: '10px',
                            textAlign: 'center',
                        }}
                        >
                            <strong>🚑 Ambulances</strong>
                        </h3>
                        <div style={{ paddingLeft: '50px' }}>
                            <p><strong>Rescue Ambulance : </strong>1122</p>
                            <p><strong>Aman Ambulance : </strong>1021</p>
                            <p><strong>Edhi Ambulance : </strong>115</p>
                            <p><strong>Chhipa Ambulance : </strong>1020</p>
                            <p><strong>Alkhidmat Ambulance : </strong>1023</p>
                        </div>
                    </div>

                    <div style={sectionStyle}>
                        <h3 style={{
                            color: '#0077b6',
                            marginBottom: '15px',
                            borderBottom: '2px solid #0077b6',
                            paddingBottom: '10px',
                            textAlign: 'center',
                        }}
                        >
                            <strong>📞 Emergency Helplines</strong>
                        </h3>
                        <div style={{ paddingLeft: '30px' }}>
                            <p><strong>Helpline Number : </strong>+92 300 1876545</p>
                            <p><strong>Helpline Number : </strong>+92 300 2876544</p>
                            <p><strong>Helpline Number : </strong>+92 300 3876543</p>
                            <p><strong>Helpline Number : </strong>+92 300 4876542</p>
                            <p><strong>Helpline Number : </strong>+92 300 5876541</p>
                        </div>
                    </div>
                    <div style={sectionStyle}>
                        <h3 style={{
                            color: '#0077b6',
                            marginBottom: '15px',
                            borderBottom: '2px solid #0077b6',
                            paddingBottom: '10px',
                            textAlign: 'center',
                        }}
                        >
                            <strong>🏥 Hospital Support</strong>
                        </h3>
                        <div style={{ paddingLeft: 'px' }}>
                            <p><strong>Jinnah Hospital : </strong>+92 321 1234565</p>
                            <p><strong>Liaquat National Hospital : </strong>+92 321 2234564</p>
                            <p><strong>Agha Khan Hospital : </strong>+92 321 3234563</p>
                            <p><strong>Civil Hospital : </strong>+92 321 4234562</p>
                            <p><strong>SIUT Hospital : </strong>+92 321 5234561</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;

{/* <div style={{
                maxWidth: '1200px',
                margin: '0 auto',
                padding: '0 20px'
            }}>
                <div style={emergencyBoxStyle}>

                    <h2 style={{ color: '#d62828', marginBottom: '15px' }}>
                        🚑 Emergency Contacts
                    </h2>

                    <p style={{ marginBottom: '10px' }}>
                        <strong>Ambulance:</strong> 1122
                    </p>

                    <p style={{ marginBottom: '10px' }}>
                        <strong>Emergency Helpline:</strong> +92 300 9876543
                    </p>

                    <p>
                        <strong>Hospital Support:</strong> +92 321 1234567
                    </p>
                </div>
            </div> */}