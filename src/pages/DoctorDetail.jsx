import React from 'react';
import { useParams } from 'react-router-dom';
import doctors from '../data/data';
import { Link } from 'react-router-dom';

function DoctorDetail() {
    const { id } = useParams();
    // const doctor = doctors.find((doc) => doc.id === id);
    const doctor = doctors.find((doc) => doc.id === Number(id));
    if (!doctor) {
        return <h1>Doctor Not Found</h1>;
    }
    const containerStyle = {
        width: '90%',
        maxWidth: '700px',
        margin: '50px auto',
        padding: '30px',
        textAlign: 'center',
        backgroundColor: '#ffffff',
        borderRadius: '20px',
        boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
        boxSizing: 'border-box'
    };
    const titleStyle = {
        color: '#0077b6',
        fontSize: '36px',
        marginBottom: '10px',
        marginTop: '10px'
    };

    const specialityStyle = {
        color: '#494a4a',
        fontSize: '24px',
        marginBottom: '15px'
    };

    const addressStyle = {
        color: '#474343',
        fontSize: '18px',
        lineHeight: '1.1',
        marginBottom: '15px'
    };

    const buttonContainerStyle = {
        display: 'flex',
        justifyContent: 'center',
        gap: '15px',
        marginTop: '20px',
        flexWrap: 'wrap',

    };

    const backButtonStyle = {
        backgroundColor: '#6c757d',
        color: 'white',
        border: 'none',
        padding: '12px 24px',
        fontSize: '16px',
        borderRadius: '8px',
        cursor: 'pointer',
        transition: '0.3s ease',
    };

    const appointmentButtonStyle = {
        backgroundColor: '#0077b6',
        color: 'white',
        border: 'none',
        padding: '12px 24px',
        fontSize: '16px',
        borderRadius: '8px',
        cursor: 'pointer',
        transition: '0.3s ease',
    };

    return (
        <div style={containerStyle}>
            <img
                src={doctor.image}
                alt={doctor.name}
                style={{
                    width: '100%',
                    maxWidth: '250px',
                    height: '350px',
                    objectFit: 'cover',
                    borderRadius: '20px',
                    border: '2px solid #0077b6',
                    boxShadow: '0 8px 20px rgba(0,0,0,15)',
                    marginBottom: '20px'
                }}
            />
            <h1 style={titleStyle}>{doctor.name}</h1>
            <h2 style={specialityStyle}>{doctor.speciality}</h2>
            <p style={addressStyle}><strong>Address:</strong> {doctor.address}</p>
            <p style={addressStyle}><strong>Qualification:</strong> {doctor.qualification}</p>
            <p style={addressStyle}><strong>Experience:</strong> {doctor.experience}</p>
            <p style={addressStyle}><strong>Available:</strong> {doctor.timing}</p>
            <div
                style={buttonContainerStyle}>
                <button style={backButtonStyle}
                    onClick={() => window.history.back()}
                    onMouseEnter={(e) => e.target.style.backgroundColor = '#494a4a'}
                    onMouseLeave={(e) => e.target.style.backgroundColor = '#6c757d'}>
                    Back
                </button>
                <Link to={'/appointment'}>
                    <button style={appointmentButtonStyle}
                        onMouseEnter={(e) => e.target.style.backgroundColor = '#023e8a'}
                        onMouseLeave={(e) => e.target.style.backgroundColor = '#2385b9'}>
                        Book Appointment
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default DoctorDetail;




// import React from 'react';
// import { useParams } from 'react-router-dom';
// import doctors from '../data/data';


// function DoctorDetail() {
//     const { id } = useParams();
//     const doctor = doctors.find((doc) => doc.id == id);
//     if (!doctor) {
//         return <h1>Doctor Not Found</h1>;
//     }
//     const containerStyle = {
//         display: 'flex',
//         justifyContent: 'center',

//     };

//     return (
//         <div style={containerStyle}>
//             <img
//                 src={doctor.image}
//                 alt={doctor.name}
//                 width='250'
//                 style={{ borderRadius: '12px' }}
//             />
//             {/* <img src={doctor.image} alt={doctor.name} width="250" /> */}
//             <h1>{doctor.name}</h1>
//             <h2>{doctor.speciality}</h2>
//             <p>{doctor.address}</p>
//             {/* <h1>Doctor ID: {id}</h1> */}
//             {/* <h1>Kiya dekh rahay ho 😎</h1> */}
//         </div>
//     );
// }

// export default DoctorDetail;
