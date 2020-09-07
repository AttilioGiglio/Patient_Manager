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
    // destructuring, evitando el uso de state.mascota = appointment.dueño, etc.
    const { mascota, dueño, fecha, hora, sintomas } = appointment;
    
    const handleChange = (e) => {
        // con el uso de hook usestate, se puede personalizar el nombre del setstate.
        setAppointment({ ...appointment, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        // cancela el evento si es cancelable, lo que significa que la acción predeterminada que pertenece al evento no ocurrirá. Al hacer clic en un "Submit" botón, evitar que enviar un formulario por query en url.
        e.preventDefault();
        // Mensaje de error al no completar todos los inputs
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
            }
        )
    }


    return (
        <Fragment
        // Reemplaza a los divs y se pueden ejecutar de manera independiente, por lo que puedes poner 2 separados.
        >    
            <h2>Crear Cita</h2>
            {error ? <p className='alerta-error u-full-width'>Todos los campos son obligatorios</p> : null}
            <form className='one-fourth column' onSubmit={handleSubmit}>
            {/* addEvent listener que rastrea los clicks. Estos se ejecutan al hacer click al boton respectivo  */}
                <label>Nombre mascota</label>
                <input
                    type='text'
                    name='mascota'
                    className='u-full-width'
                    placeholder='¿Quien es la mascota?'
                    // addEvent listener que rastrea los cambios en el input. Estos se ejecutan al escribir o borrar.
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
