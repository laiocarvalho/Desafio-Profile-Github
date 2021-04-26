import React, {useEffect, useState} from 'react'
import '../../Assets/Sass/main.css'
import AsideBar from '../../components/AsideBar/AsideBar'
import RepositoryCard from '../../components/RepositoryCard/RepositoryCard'
import {useParams} from 'react-router-dom';
import api from '../../Services/Api'


export default function Profile() {
  const [repoInfo, setRepoInfo] = useState();
  const {username} = useParams();
  const [userInfo, setUserInfo] = useState({}); 
  const [loading, setLoading] = useState(true);
  const [totalStars, setTotalStars] =  useState('0');

 
  useEffect(() => {
    async function apiRequest(){
      const response = await api.get(`users/${username}`);
      const repositories = await api.get(`users/${username}/repos`)
      setTotalStars(repositories.data.reduce(
        (valorPrevio, elemento) =>valorPrevio + elemento.stargazers_count,0)
      )
      console.log(totalStars)
      setRepoInfo(repositories.data);
      setUserInfo(response.data);
      setLoading(false)
    }

    apiRequest()
  },[]);

  return (
    <>
    {loading === false
    ? <div className="profile-content-container">
         <AsideBar   {...userInfo} totalStars={totalStars}/>
         {console.log(totalStars)}
        <div className="main-content">
          {
          repoInfo.sort(
           function(a,b){
             return b.stargazers_count - a.stargazers_count;
           })
           .map((repo)=>(
            <RepositoryCard key={repo.id} {...repo} totalStars={totalStars}/>
          ))
          }
        </div>
      </div>
      :'carregando'
    }
    </>
  )
}
