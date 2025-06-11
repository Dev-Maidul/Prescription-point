import React from "react";
import review from '../assets/success-doctor.png'
import star from '../assets/success-review.png'
import staff from '../assets/success-staffs.png'
import patient from '../assets/success-patients.png'
import CountUp from "react-countup";
const Success = () => {
  return (
    <div className="w-10/12 mx-auto py-12 mt-4 text-center">
      <h1 className="font-bold text-4xl mb-2">
        We Provide Best Medical Services
      </h1>
      <p>
        Our platform connects you with verified, experienced doctors across
        various specialties — all at your convenience.{" "}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 py-8">
        <div className="bg-white p-14 rounded-3xl">
            <img className="" src={review} alt="" />
            <h1 className="font-bold text-6xl text-left py-2"><CountUp end={199}
            duration={3} />+</h1>
            <h4 className="text-xl text-gray-500 mt-2 text-left"> Total Doctors</h4>
        </div>
        <div className="bg-white p-14 rounded-3xl">
            <img className="" src={star} alt="" />
            <h1 className="font-bold text-6xl text-left py-2"><CountUp end={467}
            duration={3} />+</h1>
            <h4 className="text-xl text-gray-500 mt-2 text-left"> Total Review</h4>
        </div>
        <div className="bg-white p-14 rounded-3xl">
            <img className="" src={patient} alt="" />
            <h1 className="font-bold text-6xl text-left py-2"><CountUp end={1900}
            duration={3} />+</h1>
            <h4 className="text-xl text-gray-500 mt-2 text-left">  Patients</h4>
        </div>
        <div className="bg-white p-14 rounded-3xl">
            <img className="" src={staff} alt="" />
            <h1 className="font-bold text-6xl text-left py-2"><CountUp end={300}
            duration={3} />+</h1>
            <h4 className="text-xl text-gray-500 mt-2 text-left"> Total Staffs</h4>
        </div>
      </div>
    </div>
  );
};

export default Success;
