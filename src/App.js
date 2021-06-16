 import React from 'react'
 import { BrowserRouter, Route, Switch } from 'react-router-dom'  
 import Login from './pages/login/Login'
 import Layout from './pages/layout/Layout'
 import Main from './pages/main/Main'
 import NewBadge from './pages/NewBadge/NewBadge'
 import Signin from './pages/signin/Signin'
 import NotFound from './pages/NotFound/NotFound'
 import Badges from './pages/Badges/Badges'
 import BadgeDetails from './components/BadgeDetails'
 import EditBadge from './pages/EditBadge/EditBadge'


function App() {
  return (
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/" component={Main}></Route>
            <Route exact path="/new" component={NewBadge}></Route>
            <Route exact path="/login" component={Login}></Route>
            <Route exact path="/signup" component={Signin}></Route>
            <Route exact path="/badges" component={Badges}></Route>
            <Route exact path="/:badgeId" component={BadgeDetails}></Route>
            <Route exact path="/:badgeId/edit" component={EditBadge}></Route>
            <Route component={NotFound}></Route>
          </Switch>
        </Layout>
      </BrowserRouter>
  );
}

export default App;
