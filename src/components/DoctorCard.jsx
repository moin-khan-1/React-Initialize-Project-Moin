import React from 'react';

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
        border: "1px solid #0077b6"

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

    return (
        <div style={cardStyle}>
            <img
                src={props.image}
                alt={props.name}
                style={imageStyle}
            />

            <h2 style={titleStyle}>{props.name}</h2>
            <h4 style={textStyle}>{props.speciality}</h4>
            <p style={textStyle}>{props.address}</p>
        </div>
    );
}

export default DoctorCard;
