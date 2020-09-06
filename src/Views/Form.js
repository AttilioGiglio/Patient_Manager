import React, {Fragment} from 'react'

const Form = () => {
    return (
        <Fragment>
            <h2>Crear Cita</h2>
            <form className='one-fourth column'>
            <label>Nombre mascota</label>
            <input
            type='text'
            name='mascota'
            clasName='u-full-width'
            placeholder='¿Quien es la mascota?'
            />
            <label>Nombre dueño</label>
            <input
            type='text'
            name='dueño'
            clasName='u-full-width'
            placeholder='¿Quien es el dueño?'
            />
            <label>Fecha</label>
            <input
            type='date'
            name='fecha'
            clasName='u-full-width'
            />
            <label>Hora</label>
            <input
            type='time'
            name='hora'
            clasName='u-full-width'
            />
            <label>Sintomas</label>
            <textarea
            name='sintomas'
            clasName='u-full-width'
            placeholder='Porfavor, necesitamos más información. Para poder evaluar de la mejor manera.'
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
