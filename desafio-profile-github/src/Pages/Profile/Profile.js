import React from 'react'
import '../../Assets/Sass/main.css'
import AsideBar from '../../components/AsideBar/AsideBar'
import RepositoryCard from '../../components/RepositoryCard/RepositoryCard'



export default function Profile() {
  return (
    <>
     <AsideBar/>
      <div className="profile-content-container">
        <RepositoryCard/>
      </div>
     </>
  )
}
