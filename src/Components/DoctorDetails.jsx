import React from "react";
import { RiRegisteredLine } from "react-icons/ri";
import { Link, useLoaderData, useNavigate, useParams } from "react-router";
import { addAppointment } from "../utlities/utlities";
import Swal from "sweetalert2";

const DoctorDetails = () => {
  const navigate = useNavigate();
  const data = useLoaderData();
  const { id } = useParams();
  const doctors = data.doctors;
  const SingleDoctor = doctors.find((doctor) => doctor.id === id);

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
  // handle doctor availability
  const today = new Date().toLocaleString("en-US", { weekday: "long" });
  const isAvailableToday = availability.includes(today);
  // handle make appointment
  const handleAppointment = () => {
    const isAdded = addAppointment(SingleDoctor);

    if (!isAdded) {
      Swal.fire({
        position: "top-end",
        icon: "info",
        title: "You have already created an appointment!",
        showConfirmButton: false,
        timer: 1500,
      });
      return;
    }

    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Appointment created successfully!",
      showConfirmButton: false,
      timer: 1500,
    });

    navigate("/bookings");
  };

  return (
    <div className="bg-[#f7f7f7] min-h-screen py-10 px-4">
      {/* Header */}
      <div className="bg-white max-w-5xl mx-auto rounded-xl shadow p-8 text-center mb-6">
        <h2 className="text-3xl font-bold">Doctor’s Profile Details</h2>
        <p className="text-gray-500 mt-2">
          {`I am Doctor ${name} specialized on ${speciality} with ${experience} experience. Currently working at ${working_place}`}
        </p>
      </div>

      {/* Doctor Info Card */}
      <div className="bg-white max-w-5xl mx-auto rounded-xl shadow p-8 flex flex-col lg:flex-row gap-8">
        <img
          src={image}
          alt={name}
          className="w-full max-w-sm rounded-xl object-cover"
        />
        <div className="flex-1">
          <h1 className="text-2xl font-bold mb-2">Dr. {name}</h1>
          <p className="text-gray-600 font-medium">{education}</p>
          <p className="text-gray-600">{speciality}</p>

          <p className="text-gray-600 mt-4">Working at</p>
          <h3 className="font-semibold text-lg text-gray-800">
            {working_place}
          </h3>

          <div className="border-y border-dashed border-gray-300 py-3 my-4">
            <p className="flex items-center gap-2 text-gray-700">
              <RiRegisteredLine size={20} />
              Reg No: {registration_number}
            </p>
          </div>

          {/* Availability */}
          <div className="mb-4">
            <h4 className="font-semibold mb-2">Availability</h4>
            <div className="flex flex-wrap gap-2">
              {availability?.map((day, index) => (
                <span
                  key={index}
                  className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium cursor-pointer"
                >
                  {day}
                </span>
              ))}
            </div>
          </div>

          {/* Consultation Fee */}
          <div className="mb-6">
            <p className="text-gray-800">
              <span className="font-semibold">Consultation Fee:</span>{" "}
              <span className="text-primary font-bold">
                Taka {consultation_fee}
              </span>{" "}
              <span className="text-gray-500">
                (incl. VAT) Per consultation
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* Book an Appointment Section */}
      <div className="bg-white max-w-5xl mx-auto rounded-xl shadow p-8 mt-6">
        <h3 className="text-xl font-semibold mb-2">Book an Appointment</h3>
        <div className="flex justify-between items-center flex-wrap gap-2 mb-4">
          <button
            className={`btn btn-outline ${
              isAvailableToday ? "btn-success" : "btn-error"
            }`}
          >
            {isAvailableToday ? "Available Today" : "Not Available Today"}
          </button>
          { 
  isAvailableToday && (
    <span className="text-yellow-800 bg-yellow-100 text-sm px-3 py-1 rounded-full">
      Due to high patient volume, we are currently accepting appointments
      for today only.
    </span>
  )
}

        </div>
        {
          <button
  onClick={handleAppointment}
  disabled={!isAvailableToday}
  className={`w-full text-white font-semibold py-3 rounded-full transition 
    ${
      isAvailableToday
        ? "bg-blue-600 hover:bg-blue-700 cursor-pointer"
        : "bg-gray-400 cursor-not-allowed"
    }
  `}
>
  Book Appointment Now
</button>

        }
      </div>
    </div>
  );
};

export default DoctorDetails;
