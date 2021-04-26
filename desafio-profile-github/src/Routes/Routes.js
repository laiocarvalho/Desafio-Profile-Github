import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from '../Pages/Home/Home'
import Profile from '../Pages/Profile/Profile'


export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/profile/:username"  component={Profile}/>
    </Switch>
  )
}
