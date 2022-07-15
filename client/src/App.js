import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react';
import './App.css';
import logo from './logo.svg'

function Card({title,url,body}){
return(
  <div className='card'>
    <div className ='card-body'>
      <img src={url} alt='imagen' />
      <h5>{title}</h5>
      <p>{body}</p>
  </div>
  </div>
);}



function App() {
  return (
<div className='App'>
  <div className="container d-flex justify-content-center align-items-center h-100">
    <div className="row">
       <div className="col-12">
        <Card title='tarea'
              url='logo'
              body="Powerful, extensible, and feature-packed frontend toolkit. Build and customize with Sass, utilize prebuilt grid system and components, and bring projects to life with powerful JavaScript plugins."
        /></div>

        
       </div>
    </div>
  </div>

  );
}

export default App;
