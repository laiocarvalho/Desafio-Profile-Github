import React, {useState, useEffect} from 'react'
import {BsDot} from 'react-icons/bs'
import {AiOutlineStar} from 'react-icons/ai'


export default function RepositoryCard({totalStars,...repoInfo}) {
  const [updatedTime, setupdatedTime] = useState();
  const getUpdatedDays = ()=>{
    const initalDate = new Date(repoInfo.updated_at);
    const today = new Date();
    const diffMs = today - initalDate;
    const diffDays = diffMs /(1000*60*60*24)
    setupdatedTime(diffDays.toFixed(0)); 
  }

  useEffect(() => {
    getUpdatedDays()
  }, [])

  return (
    <div className="repository-card-container">
      {console.log(totalStars)}
      <header>{repoInfo.name}</header>
      <p>
        {`
          ${repoInfo.description === null ? 'no description':repoInfo.description}
         `
        }
      </p>
      <footer>
        <span>
          <AiOutlineStar/>
          {`
            ${repoInfo.stargazers_count} 
            ${repoInfo.stargazers_count === 1 ? "star":"stars"}
            `
          }
        </span>
        <span><BsDot/></span>
        <span>{`Updated ${updatedTime} days ago`}</span>
      </footer>
    </div>
  )
}
