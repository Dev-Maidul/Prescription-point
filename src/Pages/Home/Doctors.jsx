import React, { useEffect, useState } from 'react';
import SingleDoctor from '../../Components/SingleDoctor';

const Doctors = ({doctors}) => {
    const [displayDoctors,setDisplayDoctors]=useState([]);
    const [showAll,setShowAll]=useState(false);

    useEffect(()=>{
        if(showAll)
        {
            setDisplayDoctors(doctors);
        }
        else{
            setDisplayDoctors(doctors.slice(0,6));
        }
    },[doctors,showAll]);
    // console.log(doctors);
    return (
        <div className='w-10/12 mx-auto text-center py-12 mt-12'>
            <h1 className='font-bold text-3xl text-center'>Our Best Doctors</h1>
            <p className='text-center font-thin'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a <br />routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
            <div className="doctor-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-2 py-12"> 
                {
                    displayDoctors.map((doctor)=> <SingleDoctor doctor={doctor} key={doctor.id}></SingleDoctor>)
                }
            </div>
            <button onClick={()=> {
                setShowAll(prev=>!prev);
                if(showAll) window.scrollTo(0,400);
            }} className="relative inline-block text-lg group cursor-pointer text-center mx-auto">
    <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
        <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
        <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
        <span className="relative">{showAll? 'Show Less':"Show All"}</span>
    </span>
    <span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
</button>
        </div>
        
    );
};

export default Doctors;