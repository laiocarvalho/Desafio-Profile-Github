import React from 'react'

export default function Home() {
  return (
    <div className="home-wrapper">
        <h1 className="home-title">Search Devs</h1>
        <form className="home-form">
          <input placeholder="type the username here..."/>
          <button className="primary-button"type="submit">Buscar</button>
        </form>
    </div>
  )
}
