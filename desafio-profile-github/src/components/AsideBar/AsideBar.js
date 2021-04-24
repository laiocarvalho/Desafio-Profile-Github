import React from 'react'
import {MdPeopleOutline} from 'react-icons/md'
import {GoLocation} from 'react-icons/go'
import {HiOutlineOfficeBuilding} from 'react-icons/hi'
import {AiOutlineMail, AiOutlineHeart, AiOutlineStar} from 'react-icons/ai'
import {FiLink, FiTwitter} from 'react-icons/fi'
const obj ={
  "login": "laiocarvalho",
  "id": 79883041,
  "node_id": "MDQ6VXNlcjc5ODgzMDQx",
  "avatar_url": "https://avatars.githubusercontent.com/u/79883041?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/laiocarvalho",
  "html_url": "https://github.com/laiocarvalho",
  "followers_url": "https://api.github.com/users/laiocarvalho/followers",
  "following_url": "https://api.github.com/users/laiocarvalho/following{/other_user}",
  "gists_url": "https://api.github.com/users/laiocarvalho/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/laiocarvalho/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/laiocarvalho/subscriptions",
  "organizations_url": "https://api.github.com/users/laiocarvalho/orgs",
  "repos_url": "https://api.github.com/users/laiocarvalho/repos",
  "events_url": "https://api.github.com/users/laiocarvalho/events{/privacy}",
  "received_events_url": "https://api.github.com/users/laiocarvalho/received_events",
  "type": "User",
  "site_admin": false,
  "name": "Laio Carvalho",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": "Web Development Student",
  "twitter_username": null,
  "public_repos": 3,
  "public_gists": 0,
  "followers": 2,
  "following": 2,
  "created_at": "2021-03-02T00:58:05Z",
  "updated_at": "2021-04-23T16:15:30Z"
}
export default function AsideBar() {
  return (
    <div className="aside-bar">
      <div className="aside-bar-image-container">
      <img src={obj.avatar_url}/>
      </div>
      <div className="aside-bar-information-container">
        <p className="profile-name">{obj.name}</p>
        <span className="user-name" >{obj.login}</span>
        <p className="bio">{obj.bio}</p>
        <ul>
          <li>
            <MdPeopleOutline className="icon"/> {`${obj.followers} followers`}
          </li> 
          <li>
            <AiOutlineHeart className="icon"/>{`${obj.following} following`}
          </li>
          <li>
            <AiOutlineStar className="icon"/>stars
          </li>
        </ul>
        <ul className="aditional-information-list">
          <li>
            <HiOutlineOfficeBuilding className="icon"/>
            {obj.company === null ? "No information" : obj.company}
          </li>
          <li>
            <GoLocation className="icon"/>
            {obj.location === null ? "No information" : obj.location}
          </li>
          <li>
            <AiOutlineMail className="icon"/>
            {obj.email === null ? "No information" : obj.email}
          </li>
          <li>
            <FiLink className="icon"/>
            {obj.blog ==="" ? "No information":obj.blog}
          </li>
          <li>
            <FiTwitter className="icon"/>
            {obj.twitter_username === null ? "No information" : obj.twitter_username}
          </li>
        </ul>
      </div>
      <button className="primary-button">
        Voltar
      </button>
    </div>
     
        
   
  )
}
