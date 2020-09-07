import React from 'react'

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

export default Appointment
