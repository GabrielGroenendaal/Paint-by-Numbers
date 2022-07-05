import logo from './logo.svg';
import './App.css';
import { Route, Routes, Switch, withRouter } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../utils/route_util.js';
import SplashContainer from "./components/splash/splash_container.js"
import LoginContainer from "./components/sessions/login_container.js";
import SignUpContainer from "./components/sessions/signup_container.js";



function App () {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>


      <Routes>
        <AuthRoute exact path="/" component={SplashContainer} />
        <AuthRoute path="/register" component={SignUpContainer} />
        <AuthRoute path="/login" component={LoginContainer} />

      </Routes>






    </div>
  );
}

export default App;
