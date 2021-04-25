import React, {useState} from 'react'
import api from '../../Services/Api';
import {useHistory} from 'react-router-dom';

export default function Home() {
  const [userName, setUserName]= useState();
  const history = useHistory();  
  
  // const handleInformationSubmit =(e)=>{
  //   async ()=>{
  //     event.preventDefault();
  //     const response = await api.get(`repos/`)
  //     console.log(response);
  //   }
  // }
  async function handleInformationSubmit (event){
    event.preventDefault();
    history.push({pathname:`/profile/${userName}`, state:userName})
    const response = await api.get(`users/${userName}`)
    console.log(response)
  }

  return (
    <div className="home-wrapper">
        <h1 className="home-title">Search Devs</h1>
        <form className="home-form" onSubmit={handleInformationSubmit}>
          <input placeholder="type the username here..." onInput={(e)=>setUserName(e.target.value) } required/>
          <button className="primary-button"type="submit" >Buscar</button>
        </form>
    </div>
  )
}
