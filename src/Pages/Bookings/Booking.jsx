// Booking.jsx
import React, { useEffect, useState } from "react";
import { getAppointment, removeAppointment } from "../../utlities/utlities";

const Booking = () => {
  const [displayAppointment, setDisplayAppointment] = useState([]);

  useEffect(() => {
    const savedAppointment = getAppointment();
    setDisplayAppointment(savedAppointment);
  }, []);

  const handleCancelAppointment = (id) => {
    if (window.confirm('Are you sure you want to cancel this appointment?')) {
      removeAppointment(id);
      setDisplayAppointment(getAppointment());
    }
  };

  return (
    <div className="py-12">
      <h1 className="font-bold text-4xl text-center">My Today Appointments</h1>
      <p className="text-center py-2">
        Our platform connects you with verified, experienced doctors across
        various specialties — all at your convenience.
      </p>

      <div className="rounded-xl shadow p-4 mx-auto w-full py-8 mt-4 mb-4">
        {displayAppointment.length === 0 ? (
          <p className="text-center text-gray-500">No appointments found</p>
        ) : (
          displayAppointment.map((appointment) => (
            <div key={appointment.id} className="bg-white rounded-lg shadow p-6 mb-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-semibold">{appointment.name}</h3>
                  <p className="text-gray-500 text-sm">{appointment.education}</p>
                </div>
                <p className="text-gray-500 text-sm">
                  Appointment Fee : {appointment.consultation_fee} Taka + Vat
                </p>
              </div>

              <button
                onClick={() => handleCancelAppointment(appointment.id)}
                className="w-full text-red-600 border border-red-500 rounded-full py-2 font-semibold hover:bg-red-50 transition cursor-pointer mt-4"
              >
                Cancel Appointment
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Booking;