import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
// import components
// import Profile from './components/Profile'
import Categories from './components/Categories'
import CategoryDetail from './components/CategoryDetail'

export const PassportRoutes = ({
  MyProfile
}) => (
  <Switch>
    <Route exact path='/profile' component={MyProfile} />
    <Route exact path='/categories' component={Categories} />
    {/* <Route path='/categories/:detail' render={(props) => <CategoriesDetail {...props} />} />  can use match.params */}
    <Route path='/' render={() => <Redirect to='/categories' />} />
  </Switch>
)