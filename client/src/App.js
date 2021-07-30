import React from 'react';
import Header from './components/Headers.js';
import Explore from './components/explore';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NewMemberForm from './components/newMember.js';
import ShowMembers from './components/showmembers.js';


function App() {
  return (
    <Switch>   
    <Route 
    exact path = "/"
    render={() => (<Header />)}
/>
<Route 
    exact path = "/explore"
    render={() => (<Explore />)}
/>
<Route
exact path = "/members"
render={()=>(<ShowMembers/>)}
/>
</Switch>
  )
}

export default App;
