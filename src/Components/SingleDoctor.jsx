import React from "react";

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
    <div className="card bg-base-100 w-96 shadow-sm p-6">
      <figure>
        <img
          className="w-[350px] h-[250px] rounded-2xl"
          src={image}
          alt="Doctor Photo"
        />
      </figure>
      <div className="flex gap-2 items-center py-4">
        <button className="btn btn-outline btn-accent">{availability && <p>Available</p>}</button>
        <button className="btn btn-outline btn-info">{experience} experience</button>
      </div>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p className="text-left">Degree: {education}</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">Fashion</div>
          <div className="badge badge-outline">Products</div>
        </div>
      </div>
    </div>
  );
};

export default SingleDoctor;
