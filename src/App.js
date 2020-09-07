import React, {Fragment, useState} from 'react';
import Form from './Views/Form';
import './App.css'

function App() {
  
  const [apList, setApList] = useState([]);


  const makeAp = ap =>{
    setApList([...apList, ap])
  }

  return (
    <Fragment>
      <h1>Administador de Mascotas</h1>
      <div className='container'>
      <div className='row'>
        <div className='one-half column'>
        <Form 
        makeAp={makeAp}
        />
        </div>
      </div>
      </div>
    </Fragment>
  );
}

export default App;
