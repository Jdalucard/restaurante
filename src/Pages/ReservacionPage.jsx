
import React,{useState,useEffect} from 'react'

const ReservacionPage = () => {
  const [posts, setpost]=useState([])

  useEffect(()=>{
      const traerPost= async ()=>{
        const resp = await fetch('https://jsonplaceholder.typicode.com/todos/');
        const datos= await resp.json();

        setpost(datos);
      }
      traerPost();
  },[]) ;

  return (
    <>
    <header>
      <h1>Reservaciones</h1>
    </header>

      <article>
      <div>
      <ul>
       {posts.map((post)=>{
        return(
       <li key={post.id}></li>,
       <li>{post.title}</li>
        )
       })}
      </ul>
      </div>

      </article>

    </>
  )
}

export default ReservacionPage