import { hover } from '@testing-library/user-event/dist/hover';
import React from 'react';
import { Link } from 'react-router-dom';

function DoctorCard(props) {

    const cardStyle = {
        width: "350px",
        border: "1px solid #ddd",
        borderRadius: "12px",
        padding: "15px",
        margin: "15px",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        textAlign: "center",
        backgroundColor: "#ffffff",
        display: "inline-block",
        verticalAlign: "top"
    };

    const imageStyle = {

        width: "50%",
        height: "250px",
        objectFit: "cover",
        borderRadius: "10px",
        border: "1.5px solid #0077b6"

    };

    const titleStyle = {
        color: "#0077b6",
        marginTop: "10px",
        marginBottom: "5px"
    };

    const textStyle = {
        margin: "10px 0",
        color: "#555"
    };
    const buttonStyle = {
        backgroundColor: '#0077b6',
        color: 'white',
        border: 'none',
        padding: '10px 20px',
        borderRadius: '8px',
        cursor: 'pointer',
        marginTop: '10px',
        fontSize: '16px',
        textDecoration: 'none',
        display: 'inline-block',
        transition: '0.2s ease',
    };


    return (
        <div style={cardStyle} onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-8px)';
            e.currentTarget.style.boxShadow = '0 8px 16px rgba(0,0,0,0.2)';
        }}
            onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)';
            }}
        >
            <img
                src={props.image}
                alt={props.name}
                style={imageStyle}
            />

            <h2 style={titleStyle}>{props.name}</h2>
            <h4 style={textStyle}>{props.speciality}</h4>

            <Link to={`/doctor/${props.id}`}
                style={buttonStyle}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#023e8a'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#2385b9'}
            >
                View Profile
            </Link>
        </div>
    );
}

export default DoctorCard;
