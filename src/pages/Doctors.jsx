import { useState } from 'react';
import doctors from '../data/data'
import DoctorCard from '../components/DoctorCard';

function Doctors() {
    const inputStyle = {
        width: "40%",
        padding: '12px',
        fontSize: '20px',
        margin: '20px auto',
        display: 'block',
        borderRadius: '15px',
        // border: "2px solid #0077b6",
        transition: '0.3s ease',
    };
    const viewButtonStyle = {
        backgroundColor: '#0077b6',
        color: 'white',
        border: 'none',
        padding: '15px 25px',
        fontSize: '18px',
        borderRadius: '10px',
        cursor: 'pointer',
        transition: '0.3s ease',
    };
    const viewBackStyle = {
        backgroundColor: '#0077b6',
        width: '190px',
        color: 'white',
        border: 'none',
        padding: '15px 25px',
        fontSize: '18px',
        borderRadius: '10px',
        cursor: 'pointer',
        transition: '0.3s ease',
    };


    const [search, setSearch] = useState('');
    const [visibleDoctors, setVisibleDoctors] = useState(6);
    const filteredDoctors = doctors.filter(
        (doctor) =>
            doctor.name.toLowerCase().includes(search.toLowerCase()) ||
            doctor.speciality.toLowerCase().includes(search.toLowerCase())
    );

    return (

        <div><input
            type="text"
            placeholder="Search doctors by name or speciality..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={inputStyle}
            onMouseEnter={(e) => e.target.style.border = '2px solid #023e8a'}
            onMouseLeave={(e) => e.target.style.border = '2px solid  #2385b9'}
        />

            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
                {
                    filteredDoctors.length === 0 ? (

                        <h2 style=
                            {{
                                color: '#d62828',
                                marginTop: '30px',
                                fontSize: '40px',
                            }}>
                            No Doctors Found
                        </h2>
                    ) : (
                        filteredDoctors
                            .slice(0, visibleDoctors))
                        .map((doctor) => {
                            console.log("doctors", doctors)
                            return (
                                <DoctorCard
                                    key={doctor.id}
                                    id={doctor.id}
                                    name={doctor.name}
                                    image={doctor.image}
                                    speciality={doctor.speciality}
                                    address={doctor.address}
                                />
                            )
                        }
                        )}
            </div >

            {
                visibleDoctors < doctors.length && (
                    <div style={{ textAlign: 'center', margin: '30px 0' }}>
                        <button style={viewButtonStyle}
                            onClick={() => setVisibleDoctors(doctors.length)}
                            onMouseEnter={(e) => e.target.style.backgroundColor = '#023e8a'}
                            onMouseLeave={(e) => e.target.style.backgroundColor = '#2385b9'}
                        >
                            View More Doctors
                        </button>
                    </div>
                )
            }
            {
                visibleDoctors === doctors.length && (
                    <div style={{ textAlign: 'center', margin: '30px 0' }}>
                        <button style={viewBackStyle}
                            onClick={() => setVisibleDoctors(6)}
                            onMouseEnter={(e) => e.target.style.backgroundColor = '#023e8a'}
                            onMouseLeave={(e) => e.target.style.backgroundColor = '#2385b9'}
                        >
                            View Back
                        </button>

                    </div>
                )
            }

        </div >
    )
}

export default Doctors
