const reservar= [{
    id:'50',
    nombre: 'Jose ',
    hora :'1:00 pm',
    fecha:Date,
    correo:'josed3188@gmail.com',
    telefono:'3023315479',
    NPersonas:4
   },
   {
    id:'35',
    nombre: 'MARIA ',
    hora :'1:00 pm',
    fecha:Date,
    correo:'josed3188@gmail.com',
    telefono:'3023315479',
    NPersonas:6
   }
  ]
  


 const reservas=reservar.map((element)=>{
  return element.NPersonas*4
   
  
})

console.log(reservas[1])
