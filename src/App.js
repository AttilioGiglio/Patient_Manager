import React, {Fragment} from 'react';
import Form from './Views/Form';
import './App.css'

function App() {
  return (
    <Fragment>
      <h1>Administador de Mascotas</h1>
      <div className='container'>
      <div className='row'>
        <div className='one-half column'>
        <Form />
        </div>
      </div>
      </div>
    </Fragment>
  );
}

export default App;
