export const getAppointment=()=>{
    const appointment=localStorage.getItem('favorites');
    if(appointment) return JSON.parse(appointment);
    else return [];
}

export const addAppointment=(phone)=>{
   const appointments=getAppointment();
   const isExist=appointments.find((p)=>p.id===phone.id);
   if(isExist) return console.log("Already exist");
   appointments.push(phone);
   localStorage.setItem('appointments',JSON.stringify(appointments));
}