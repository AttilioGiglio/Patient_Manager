import React, {Fragment, useState} from 'react'

const Form = () => {
    const [state, setState]= useState
      ({  
          mascota:'',
          dueño: '',
          fecha: '',
          hora: '',
          sintomas: ''
      })

      const handleChange = (e) => {
        console.log(e.target.value);
      }

      const handleSubmit = (e) => {
          e.preventDefault();
          console.log(e);
      }
   
    return (
        <Fragment>
            <h2>Crear Cita</h2>
            <form className='one-fourth column'>
            <label>Nombre mascota</label>
            <input
            type='text'
            name='mascota'
            className='u-full-width'
            placeholder='¿Quien es la mascota?'
            onChange={handleChange}
            />
            <label>Nombre dueño</label>
            <input
            type='text'
            name='dueño'
            className='u-full-width'
            placeholder='¿Quien es el dueño?'
            onChange={handleChange}
            />
            <label>Fecha</label>
            <input
            type='date'
            name='fecha'
            className='u-full-width'
            onChange={handleChange}
            />
            <label>Hora</label>
            <input
            type='time'
            name='hora'
            className='u-full-width'
            onChange={handleChange}
            />
            <label>Sintomas</label>
            <textarea
            name='sintomas'
            className='u-full-width'
            placeholder='Porfavor, necesitamos más información. Para poder evaluar de la mejor manera.'
            onChange={handleChange}
            />
            <button
            type='submit'
            onClick={handleSubmit}
            >
            Agendar Cita
            </button>
            </form>
        </Fragment>
    )
}

export default Form
