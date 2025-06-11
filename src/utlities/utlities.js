// utilities.js
export const getAppointment = () => {
    try {
        const appointment = localStorage.getItem('appointments');
        return appointment ? JSON.parse(appointment) : [];
    } catch (error) {
        console.error('Error getting appointments:', error);
        return [];
    }
};

export const addAppointment = (appointment) => {
    try {
        const appointments = getAppointment();
        const isExist = appointments.find((p) => p.id === appointment.id);
        
        if (isExist) {
            console.log("Appointment already exists");
            return false;
        }
        
        appointments.push(appointment);
        localStorage.setItem('appointments', JSON.stringify(appointments));
        return true;
    } catch (error) {
        console.error('Error adding appointment:', error);
        return false;
    }
};

export const removeAppointment = (id) => {
    try {
        const appointments = getAppointment();
        const remainingAppointments = appointments.filter(
            (appointment) => appointment.id !== id
        );
        localStorage.setItem('appointments', JSON.stringify(remainingAppointments));
        return true;
    } catch (error) {
        console.error('Error removing appointment:', error);
        return false;
    }
};