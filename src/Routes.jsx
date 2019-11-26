import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
// import components
import Home from './components/Home'

export const PassportRoutes = ({
  MyProfile,
  MyCategories,
}) => (
  <Switch>
    <Route exact path='/home' component={Home} />
    <Route exact path='/profile' component={MyProfile} />
    <Route exact path='/categories' component={MyCategories} />
    {/* <Route path='/categories/:detail' render={(props) => <CategoriesDetail {...props} />} />  can use match.params */}
    <Route path='/' render={() => <Redirect to='/home' />} />
  </Switch>
)