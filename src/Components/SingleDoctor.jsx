import React from "react";
import { RiRegisteredLine } from "react-icons/ri";

const SingleDoctor = ({ doctor }) => {
  const {
    name,
    experience,
    availability,
    image,
    registration_number,
    education,
  } = doctor;
  return (
    <div className="card bg-base-100 shadow-sm p-6">
      <figure>
        <img
          className="w-full h-[250px] rounded-2xl"
          src={image}
          alt="Doctor Photo"
        />
      </figure>
      <div className="flex gap-2 items-center py-4">
        <button className="btn btn-outline btn-accent">
          {availability && <p>Available</p>}
        </button>
        <button className="btn btn-outline btn-info">
          {experience} experience
        </button>
      </div>
      <div className="card-body">
        <div className="border-b border-dashed border-gray-400 pb-4 mb-4">
          <h2 className="card-title text-2xl">{name}</h2>
          <p className="text-left text-xl text-gray-500">{education}</p>
        </div>

        <div className="card-actions justify-between">
          <h1 className="flex text-xl gap-1 items-center"><RiRegisteredLine size={26}/>Reg No: {registration_number} </h1>
          
        </div>
        <button className="btn btn-outline btn-primary text-xl font-bold mt-2">View Details</button>
      </div>
    </div>
  );
};

export default SingleDoctor;
