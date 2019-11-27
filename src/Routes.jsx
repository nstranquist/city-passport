import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

export const PassportRoutes = ({
  MyProfile,
  MyCategories,
  MyHome,
}) => (
  <Switch>
    <Route exact path='/home' component={MyHome} />
    <Route exact path='/profile' component={MyProfile} />
    <Route exact path='/categories' component={MyCategories} />
    {/* <Route path='/categories/:detail' render={(props) => <CategoriesDetail {...props} />} />  can use match.params */}
    <Route path='/' render={() => <Redirect to='/home' />} />
  </Switch>
)