import React, {useState, useEffect} from 'react'
import {BsDot} from 'react-icons/bs'
import {AiOutlineStar} from 'react-icons/ai'
const repoObj = {
  "id": 347964244,
  "node_id": "MDEwOlJlcG9zaXRvcnkzNDc5NjQyNDQ=",
  "name": "Desafio2-CubosAcademy",
  "full_name": "laiocarvalho/Desafio2-CubosAcademy",
  "private": false,
  "owner": {
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
    "site_admin": false
  },
  "html_url": "https://github.com/laiocarvalho/Desafio2-CubosAcademy",
  "description": null,
  "fork": false,
  "url": "https://api.github.com/repos/laiocarvalho/Desafio2-CubosAcademy",
  "forks_url": "https://api.github.com/repos/laiocarvalho/Desafio2-CubosAcademy/forks",
  "keys_url": "https://api.github.com/repos/laiocarvalho/Desafio2-CubosAcademy/keys{/key_id}",
  "collaborators_url": "https://api.github.com/repos/laiocarvalho/Desafio2-CubosAcademy/collaborators{/collaborator}",
  "teams_url": "https://api.github.com/repos/laiocarvalho/Desafio2-CubosAcademy/teams",
  "hooks_url": "https://api.github.com/repos/laiocarvalho/Desafio2-CubosAcademy/hooks",
  "issue_events_url": "https://api.github.com/repos/laiocarvalho/Desafio2-CubosAcademy/issues/events{/number}",
  "events_url": "https://api.github.com/repos/laiocarvalho/Desafio2-CubosAcademy/events",
  "assignees_url": "https://api.github.com/repos/laiocarvalho/Desafio2-CubosAcademy/assignees{/user}",
  "branches_url": "https://api.github.com/repos/laiocarvalho/Desafio2-CubosAcademy/branches{/branch}",
  "tags_url": "https://api.github.com/repos/laiocarvalho/Desafio2-CubosAcademy/tags",
  "blobs_url": "https://api.github.com/repos/laiocarvalho/Desafio2-CubosAcademy/git/blobs{/sha}",
  "git_tags_url": "https://api.github.com/repos/laiocarvalho/Desafio2-CubosAcademy/git/tags{/sha}",
  "git_refs_url": "https://api.github.com/repos/laiocarvalho/Desafio2-CubosAcademy/git/refs{/sha}",
  "trees_url": "https://api.github.com/repos/laiocarvalho/Desafio2-CubosAcademy/git/trees{/sha}",
  "statuses_url": "https://api.github.com/repos/laiocarvalho/Desafio2-CubosAcademy/statuses/{sha}",
  "languages_url": "https://api.github.com/repos/laiocarvalho/Desafio2-CubosAcademy/languages",
  "stargazers_url": "https://api.github.com/repos/laiocarvalho/Desafio2-CubosAcademy/stargazers",
  "contributors_url": "https://api.github.com/repos/laiocarvalho/Desafio2-CubosAcademy/contributors",
  "subscribers_url": "https://api.github.com/repos/laiocarvalho/Desafio2-CubosAcademy/subscribers",
  "subscription_url": "https://api.github.com/repos/laiocarvalho/Desafio2-CubosAcademy/subscription",
  "commits_url": "https://api.github.com/repos/laiocarvalho/Desafio2-CubosAcademy/commits{/sha}",
  "git_commits_url": "https://api.github.com/repos/laiocarvalho/Desafio2-CubosAcademy/git/commits{/sha}",
  "comments_url": "https://api.github.com/repos/laiocarvalho/Desafio2-CubosAcademy/comments{/number}",
  "issue_comment_url": "https://api.github.com/repos/laiocarvalho/Desafio2-CubosAcademy/issues/comments{/number}",
  "contents_url": "https://api.github.com/repos/laiocarvalho/Desafio2-CubosAcademy/contents/{+path}",
  "compare_url": "https://api.github.com/repos/laiocarvalho/Desafio2-CubosAcademy/compare/{base}...{head}",
  "merges_url": "https://api.github.com/repos/laiocarvalho/Desafio2-CubosAcademy/merges",
  "archive_url": "https://api.github.com/repos/laiocarvalho/Desafio2-CubosAcademy/{archive_format}{/ref}",
  "downloads_url": "https://api.github.com/repos/laiocarvalho/Desafio2-CubosAcademy/downloads",
  "issues_url": "https://api.github.com/repos/laiocarvalho/Desafio2-CubosAcademy/issues{/number}",
  "pulls_url": "https://api.github.com/repos/laiocarvalho/Desafio2-CubosAcademy/pulls{/number}",
  "milestones_url": "https://api.github.com/repos/laiocarvalho/Desafio2-CubosAcademy/milestones{/number}",
  "notifications_url": "https://api.github.com/repos/laiocarvalho/Desafio2-CubosAcademy/notifications{?since,all,participating}",
  "labels_url": "https://api.github.com/repos/laiocarvalho/Desafio2-CubosAcademy/labels{/name}",
  "releases_url": "https://api.github.com/repos/laiocarvalho/Desafio2-CubosAcademy/releases{/id}",
  "deployments_url": "https://api.github.com/repos/laiocarvalho/Desafio2-CubosAcademy/deployments",
  "created_at": "2021-03-15T12:40:07Z",
  "updated_at": "2021-04-18T22:07:22Z",
  "pushed_at": "2021-04-18T22:07:20Z",
  "git_url": "git://github.com/laiocarvalho/Desafio2-CubosAcademy.git",
  "ssh_url": "git@github.com:laiocarvalho/Desafio2-CubosAcademy.git",
  "clone_url": "https://github.com/laiocarvalho/Desafio2-CubosAcademy.git",
  "svn_url": "https://github.com/laiocarvalho/Desafio2-CubosAcademy",
  "homepage": null,
  "size": 576,
  "stargazers_count": 0,
  "watchers_count": 0,
  "language": "JavaScript",
  "has_issues": true,
  "has_projects": true,
  "has_downloads": true,
  "has_wiki": true,
  "has_pages": false,
  "forks_count": 0,
  "mirror_url": null,
  "archived": false,
  "disabled": false,
  "open_issues_count": 0,
  "license": null,
  "forks": 0,
  "open_issues": 0,
  "watchers": 0,
  "default_branch": "main"
}

export default function RepositoryCard() {
  const [updatedTime, setupdatedTime] = useState();
  const getUpdatedDays = ()=>{
    const initalDate = new Date(repoObj.updated_at);
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
      <header>{repoObj.name}</header>
      <p>{repoObj.description}Lorem Ipsupsum</p>
      <footer>
        <span>
          <AiOutlineStar/>
          {`
            ${repoObj.stargazers_count} 
            ${repoObj.stargazers_count === 1 ? "star":"stars"}
            `
          }
        </span>
        <span><BsDot/></span>
        <span>{`Updated ${updatedTime} days ago`}</span>
      </footer>
    </div>
  )
}
