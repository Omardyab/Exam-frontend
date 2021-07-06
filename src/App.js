import React from 'react';
import Header from './comp/Header.js'
import Home from './comp/Home.js'
import Favourite from './comp/Favourite.js'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

class App extends React.Component {

  render() {
    return(
      <>
        <Router>
        <Header/>
          <Switch>
            <Route exact path="/"><Home/></Route>
            <Route exact path="/Favourite"><Favourite/></Route>
          </Switch>
        </Router>
      </>
    )
  }
}

export default App;
