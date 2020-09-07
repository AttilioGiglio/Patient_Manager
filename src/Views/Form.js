import React, { Fragment, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const Form = ({ makeAp }) => {
    const [appointment, setAppointment] = useState
        ({
            mascota: '',
            dueño: '',
            fecha: '',
            hora: '',
            sintomas: ''
        })

    const [error, setError] = useState(false)

    const { mascota, dueño, fecha, hora, sintomas } = appointment;

    const handleChange = (e) => {
        setAppointment({ ...appointment, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (mascota.trim() === '' || dueño.trim() === '' || fecha.trim() === '' || hora.trim() === '' || sintomas.trim() === '') {
            setError(true);
            return;
        }
        // Eliminar el mensaje previo
        setError(false);
        // Asignar un ID
        appointment.id = uuidv4();
        // Imprimir cita en app por props en una lista
        makeAp(appointment);
        // Reiniciar Form
        setAppointment(
            {
                mascota: '',
                dueño: '',
                fecha: '',
                hora: '',
                sintomas: ''
            })
    }


    return (
        <Fragment>
            <h2>Crear Cita</h2>
            {error ? <p className='alerta-error u-full-width'>Todos los campos son obligatorios</p> : null}
            <form className='one-fourth column' onSubmit={handleSubmit}>
                <label>Nombre mascota</label>
                <input
                    type='text'
                    name='mascota'
                    className='u-full-width'
                    placeholder='¿Quien es la mascota?'
                    onChange={handleChange}
                    value={mascota}
                />
                <label>Nombre dueño</label>
                <input
                    type='text'
                    name='dueño'
                    className='u-full-width'
                    placeholder='¿Quien es el dueño?'
                    onChange={handleChange}
                    value={dueño}
                />
                <label>Fecha</label>
                <input
                    type='date'
                    name='fecha'
                    className='u-full-width'
                    onChange={handleChange}
                    value={fecha}
                />
                <label>Hora</label>
                <input
                    type='time'
                    name='hora'
                    className='u-full-width'
                    onChange={handleChange}
                    value={hora}
                />
                <label>Sintomas</label>
                <textarea
                    name='sintomas'
                    className='u-full-width'
                    placeholder='Porfavor, necesitamos más información. Para poder evaluar de la mejor manera.'
                    onChange={handleChange}
                    value={sintomas}
                />
                <button
                    type='submit'
                >
                    Agendar Cita
            </button>
            </form>
        </Fragment>
    )
}

export default Form
