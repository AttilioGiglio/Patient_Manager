import React, {Fragment, useState, useEffect} from 'react';
import Form from './Views/Form';
import './App.css'
import Appointment from './Views/Appointment'

function App() {
  
  const [apList, setApList] = useState([]);

  // Para realizar ciertas operaciones cuando el state cambia. Cada vez que cambie el state, se ejecuta el useffect
  useEffect(()=>{
    console.log(apList)
  },[apList])

  const makeAp = ap =>{
    setApList([...apList, ap])
  }

  const deleteAp = (id) => {
    const newApList = apList.filter(appointment => appointment.id !== id );
    setApList(newApList);
  }

  // Mensaje Condicional
  const titule = apList.length===0 ? 'No hay citas' : 'Administra citas'; 

  return (
    <Fragment>
      <h1>Administador de Mascotas</h1>
      <div className='container'>
      <div className='row'>
        <div className='one-half column'>
        <Form 
        makeAp={makeAp}
        // traspasando los props al hijo para que que el padre renderize
        />
        </div>
        <div className='one-half column'>
          <h2>{titule}</h2>
          {apList.map(ap =>
            <Appointment 
            appointment ={ap}
            id={ap.id}
            deleteAp={deleteAp}
            />          
          )}
        </div>
      </div>
      </div>
    </Fragment>
  );
}

export default App;
