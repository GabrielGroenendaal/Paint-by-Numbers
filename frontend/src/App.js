import logo from './logo.svg';
import './App.css';
import { Route, Routes, Switch, withRouter } from 'react-router-dom';
// import SplashContainer from "./components/splash/splash_container.js"
// import LoginContainer from "./components/sessions/login_container.js";
// import SignUpContainer from "./components/sessions/signup_container.js";

import Main from './components/main';

function App () {
  return (
    <div className="App">
      <Switch>
        <Route exact path={`/`}><Main/></Route>
        <Route path={`/:seed`}><Main /></Route>     
      </Switch>
    </div>
  );
}


export default App;
