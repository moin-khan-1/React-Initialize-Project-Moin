import { useState } from 'react';
import doctors from '../data/data'
import DoctorCard from '../components/DoctorCard';

function Doctors() {
    const inputStyle = {
        width: '60%',
        padding: '12px',
        fontSize: '18px',
        margin: '20px auto',
        display: 'block',
        borderRadius: '8px',
        border: '1px solid #ccc'
    };

    const [search, setSearch] = useState('');
    return (

        <div><input
            type="text"
            placeholder="Search doctors by name or speciality..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={inputStyle}
        />

            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
                {doctors.map((doctor) => {
                    console.log("doctors", doctors)
                    return (
                        <DoctorCard

                            name={doctor.name}
                            image={doctor.image}
                            speciality={doctor.speciality}
                            address={doctor.address}
                        />


                    )

                })}
            </div>
        </div>
    )
}

export default Doctors
