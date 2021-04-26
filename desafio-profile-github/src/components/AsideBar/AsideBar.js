import React from 'react'
import {MdPeopleOutline} from 'react-icons/md'
import {GoLocation} from 'react-icons/go'
import {HiOutlineOfficeBuilding} from 'react-icons/hi'
import {AiOutlineMail, AiOutlineHeart, AiOutlineStar} from 'react-icons/ai'
import {FiLink, FiTwitter} from 'react-icons/fi'

export default function AsideBar({totalStars,...userInfo}) {
  return (
    <div className="aside-bar">
     
      <div className="aside-bar-image-container">
      <img src={userInfo.avatar_url}/>
      </div>
      {console.log('totalStars')}
      <div className="aside-bar-information-container">
        <p className="profile-name">{userInfo.name}</p>
        <span className="user-name" >{userInfo.login}</span>
        <p className="bio">{userInfo.bio}</p>
        <ul>
          <li>
            <MdPeopleOutline className="icon"/> {`${userInfo.followers} followers`}
          </li> 
          <li>
            <AiOutlineHeart className="icon"/>{`${userInfo.following} following`}
          </li>
          <li>
            <AiOutlineStar className="icon"/>{totalStars} stars 
          </li>
        </ul>
        <ul className="aditional-information-list">
          <li>
            <HiOutlineOfficeBuilding className="icon"/>
            {userInfo.company === null ? "No information" : userInfo.company}
          </li>
          <li>
            <GoLocation className="icon"/>
            {userInfo.location === null ? "No information" : userInfo.location}
          </li>
          <li>
            <AiOutlineMail className="icon"/>
            {userInfo.email === null ? "No information" : userInfo.email}
          </li>
          <li>
            <FiLink className="icon"/>
            {userInfo.blog ==="" ? "No information":<a target="_blank" href={userInfo.blog}>{userInfo.blog}</a>}
          </li>
          <li>
            <FiTwitter className="icon"/>
            {userInfo.twitter_username === null ? "No information" :<a target="_blank" href={`https://twitter.com/${userInfo.twitter_username}`} >{userInfo.twitter_username}</a>}
          </li>
        </ul>
      </div>
      <button className="primary-button">
        Voltar
      </button>
    </div>
     
        
   
  )
}
