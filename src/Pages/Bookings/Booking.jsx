import React, { useEffect, useState } from "react";
import { getAppointment, removeAppointment } from "../../utlities/utlities";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';

// Custom shape for bars
const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;
  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

// Color array for bars
const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

const Booking = () => {
  const [displayAppointment, setDisplayAppointment] = useState([]);

  useEffect(() => {
    const savedAppointment = getAppointment();
    setDisplayAppointment(savedAppointment);
  }, []);

  // Prepare chart data
  const chartData = displayAppointment.map(appointment => ({
    name: appointment.name,
    appointments: parseInt(appointment.consultation_fee) || 0
  }));

  const handleCancelAppointment = (id) => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger"
      },
      buttonsStyling: false
    });
    
    swalWithBootstrapButtons.fire({
      title: "Are you sure to cancel Appointment?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        swalWithBootstrapButtons.fire({
          title: "Canceled Appointment!",
          text: "Your appointment has been canceled.",
          icon: "success"
        });
        removeAppointment(id);
        setDisplayAppointment(getAppointment());
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        swalWithBootstrapButtons.fire({
          title: "Cancelled",
          text: "Your appointment is safe.",
          icon: "error"
        });
      }
    });
  };

  return (
    <div className="py-12 w-10/12 mx-auto">
      {/* Chart Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-center">Doctor Appointments Overview</h2>
        <div className="bg-white p-6 rounded-lg shadow">
          {chartData.length > 0 ? (
            <ResponsiveContainer width="100%" height={400}>
              <BarChart
                data={chartData}
                margin={{
                  top: 20,
                  right: 30,
                  left: 20,
                  bottom: 50,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis 
                  dataKey="name" 
                  angle={-45} 
                  textAnchor="end"
                  height={70}
                />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar 
                  dataKey="appointments" 
                  name="Consultation Fee (Taka)" 
                  shape={<TriangleBar />}
                  label={{ position: 'top' }}
                >
                  {chartData.map((entry, index) => (
                    <Cell 
                      key={`cell-${index}`} 
                      fill={colors[index % colors.length]} 
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          ) : (
            <div className="text-center py-8">
              <p className="text-gray-500">No appointment data available for chart</p>
            </div>
          )}
        </div>
      </div>

      {/* Appointments List Section */}
      <h1 className="font-bold text-4xl text-center">My Today Appointments</h1>
      <p className="text-center py-2">
        Our platform connects you with verified, experienced doctors across
        various specialties — all at your convenience.
      </p>

      <div className="rounded-xl shadow p-4 mx-auto w-full py-8 mt-4 mb-4">
        {displayAppointment.length === 0 ? (
          <div className="text-center">
            <h1 className="text-warning font-bold text-4xl">
              No appointments found
            </h1>
            <Link to="/">
              <button className="btn btn-active btn-primary mt-4 mx-auto block">
                Make an Appointment Now
              </button>
            </Link>
          </div>
        ) : (
          displayAppointment.map((appointment) => (
            <div
              key={appointment.id}
              className="bg-white rounded-lg shadow p-6 mb-4"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-semibold">{appointment.name}</h3>
                  <p className="text-gray-500 text-sm">
                    {appointment.education}
                  </p>
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