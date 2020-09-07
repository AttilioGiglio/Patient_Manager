import React from 'react';
import PropTypes from 'prop-types';

const Appointment = ({appointment,id,deleteAp}) => {
    return (
        <div className='appointment'>
            <p>Mascota:<span>{appointment.mascota}</span></p>
            <p>Dueño:<span>{appointment.dueño}</span></p>
            <p>Fecha:<span>{appointment.fecha}</span></p>
            <p>Hora:<span>{appointment.hora}</span></p>
            <p>Sintomas:<span>{appointment.sintomas}</span></p>
            <button onClick={() => deleteAp(id)} className='delete u-full-width'>Eliminar &times;</button>
        </div>      
    )
}
// Id no se documenta.
Appointment.propTypes = {
    appointment: PropTypes.object.isRequired,
    deleteAp: PropTypes.func.isRequired
}

export default Appointment
