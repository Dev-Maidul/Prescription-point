import React from 'react';
import SingleDoctor from '../../Components/SingleDoctor';

const Doctors = ({doctors}) => {
    console.log(doctors);
    return (
        <div className='w-10/12 mx-auto text-center py-8'>
            <h1 className='font-bold text-3xl text-center'>Our Best Doctors</h1>
            <p className='text-center font-thin'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a <br />routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
            <div className="doctor-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-2"> 
                {
                    doctors.map((doctor)=> <SingleDoctor doctor={doctor} key={doctor.id}></SingleDoctor>)
                }
            </div>
        </div>
        
    );
};

export default Doctors;