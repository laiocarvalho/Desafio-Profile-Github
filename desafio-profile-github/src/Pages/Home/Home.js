import React, {useState} from 'react'
import {useHistory} from 'react-router-dom';

export default function Home() {
  const [userName, setUserName]= useState();
  const history = useHistory();  
  
  
  function handleInformationSubmit (event){
    event.preventDefault();
    history.push({pathname:`/profile/${userName}`, state:userName})  
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
