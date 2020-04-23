import React from 'react';
import { Switch, Route, Link, Redirect } from 'react-router-dom'

// import components
import Home from './components/Home'
import Profile from './components/Profile'
import Categories from './components/Categories'
import CategoryDetail from './components/CategoryDetail'

import './App.css'

const App = () => {

  // TODO: use match.params to set header title according to our current page
  return (
    <div className="page-container">
      <div className="content-container">
        <header className="content-header">
          {/* TODO: update section title with current page with react-router 'withParams' HOC */}
          <h2>Section Title</h2>
          <nav className='header-nav'>
            <Link to='/home' className='nav-link'>Home</Link>
            <Link to='/categories' className='nav-link'>Categories</Link>
            <Link to='/profile' className='nav-link'>Profile</Link>
            {/* Can toggle a dropdown, shortcut to logout, settings, donate, etc */}
            <div className="circle-profile nav-link" style={{cursor:'pointer'}}></div>
          </nav>
        </header>
        <main className="content-view">
          <Switch>
            <Route exact path='/home' component={Home} />
            <Route exact path='/profile' component={Profile} />
            <Route exact path='/categories' component={Categories} />
            <Route exact path='/categories/:categoryId' render={CategoryDetail} />
            <Route path='/' render={() => <Redirect to='/home' />} />
          </Switch>
        </main>
      </div>
    </div>
  );
}

export default App;
