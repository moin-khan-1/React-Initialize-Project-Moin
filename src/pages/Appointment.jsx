import React from 'react';

function Appointment() {

    const containerStyle = {
        width: '90%',
        maxWidth: '500px',
        margin: '50px auto',
        padding: '35px',
        backgroundColor: '#ffffff',
        borderRadius: '20px',
        boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
        boxSizing: 'border-box'
    };

    const titleStyle = {
        textAlign: 'center',
        color: '#0077b6',
        marginBottom: '30px',
        fontSize: '36px'
    };

    const inputStyle = {
        width: '100%',
        padding: '14px',
        marginBottom: '20px',
        borderRadius: '8px',
        border: '1px solid #ccc',
        fontSize: '16px',
        boxSizing: 'border-box'
    };

    const buttonStyle = {
        width: '100%',
        padding: '14px',
        backgroundColor: '#0077b6',
        color: 'white',
        border: 'none',
        borderRadius: '8px',
        fontSize: '18px',
        cursor: 'pointer',
        fontWeight: '600'
    };

    return (
        <div style={containerStyle}>

            <h1 style={titleStyle}>
                Book Appointment
            </h1>

            <form onSubmit={(e) => {
                e.preventDefault();

                alert('Message Sent Successfully!');
            }}>

                <input
                    type="text"
                    placeholder="Enter Your Name"
                    style={inputStyle}
                    required
                />

                <input
                    type="email"
                    placeholder="Enter Your Email"
                    style={inputStyle}
                    required
                />

                <input
                    type="date"
                    style={inputStyle}
                    required
                />

                <textarea
                    placeholder="Describe Your Problem"
                    rows="5"
                    style={inputStyle}
                    required
                />

                <button
                    style={buttonStyle}
                    onMouseEnter={(e) => e.target.style.backgroundColor = '#023e8a'}
                    onMouseLeave={(e) => e.target.style.backgroundColor = '#0077b6'}>
                    Confirm Appointment
                </button>

            </form>

        </div>
    );
}

export default Appointment;