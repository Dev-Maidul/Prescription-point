import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const Booking = () => {
     const data = useLoaderData();
  const { id } = useParams();
  const doctors = data.doctors;
  const SingleDoctor = doctors.find((doctor) => doctor.id === id);
console.log(SingleDoctor)
  if (!SingleDoctor) {
    return <div className="text-center text-red-500">Doctor not found</div>;
  }

  const {
    name,
    experience,
    availability,
    image,
    registration_number,
    education,
    consultation_fee,
    speciality,
    working_place,
  } = SingleDoctor;
    return (
        <div className='py-12'>
           <h1 className='font-bold text-4xl text-center'>My Today Appointments</h1>
           <p className='text-center py-2'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience.</p>
           <div className="bg-white rounded-xl shadow p-4 flex flex-col space-y-4 mx-auto w-full py-8">
  {/* Doctor Info */}
  <div className="flex justify-between items-start ">
    <div>
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-gray-500 text-sm">{education}</p>
    </div>
    <p className="text-gray-500 text-sm mt-1">Appointment Fee : {consultation_fee} Taka + Vat</p>
  </div>

  {/* Dotted Divider */}
  <hr className="border-t border-dashed border-gray-300" />

  {/* Cancel Button */}
  <button className="w-full text-red-600 border border-red-500 rounded-full py-2 font-semibold hover:bg-red-50 transition cursor-pointer">
    Cancel Appointment
  </button>
</div>

        </div>
    );
};

export default Booking;