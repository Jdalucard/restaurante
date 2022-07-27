import React from 'react'
import { NavLink } from 'react-router-dom';
import { useState } from 'react';


const ReservacionesPage = () => {
const [contador, setContador] = useState(0)

const contar=()=>{
  setContador (contador +1);
 };

 const [reservas] = useState([
  {
    id:1,
    nombre: 'Jose ',
    hora :'1:00 pm',
    fecha:Date,
    correo:'josed3188@gmail.com',
    telefono:'3023315479',
    NPersonas:4
  },
  {
    id:2 ,
    nombre: 'MARIA ',
    hora :'1:00 pm',
    fecha:Date,
    correo:'josed3188@gmail.com',
    telefono:'3023315479',
    NPersonas:6
  },
  {
    id:3 ,
    nombre: 'Hecsil ',
    hora :'1:00 pm',
    fecha:Date,
    correo:'josed3188@gmail.com',
    telefono:'3023315479',
    NPersonas:6
  }
 ])

  return (
    <>
<table >
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">ver mas</th>
    </tr>
  </thead>
  <tbody>
  {reservas.map((element)=>
      <tr>
      <th scope="row">{element.id}</th>
      <td>{element.nombre}</td>
      <td><NavLink to={`/reservacion/${element.id}`}>Tu reservacion</NavLink></td>
      </tr>
    )
  }

  </tbody>
</table>

{/* contador */}
  <div className='container-fluid'>
    <h2>Contar numero de llamadas: {contador} </h2>
    <button  className= 'btn btn-dark b' onClick={contar}>Cuenta </button>
  </div>
</>
  )
}

export default ReservacionesPage