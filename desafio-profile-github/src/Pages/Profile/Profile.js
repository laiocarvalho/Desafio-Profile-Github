import React, {useEffect, useState} from 'react'
import '../../Assets/Sass/main.css'
import AsideBar from '../../components/AsideBar/AsideBar'
import RepositoryCard from '../../components/RepositoryCard/RepositoryCard'
import {useParams} from 'react-router-dom';
import api from '../../Services/Api'


export default function Profile() {
  const {username} = useParams();
  const getRepoInfo = async ()=>{
    const response = await api.get(`users/${username}/repos`)
    console.log(response.data);
  }
  useEffect(() => {
    getRepoInfo();
  },[]);

  return (
      <div className="profile-content-container">
        <AsideBar/>
        <div className="main-content">
          <RepositoryCard/>
          <RepositoryCard/>
          <RepositoryCard/>
        </div>
      </div>
  )
}
