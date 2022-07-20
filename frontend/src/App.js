import logo from './logo.svg';
import './App.css';
import { Route, Routes, Switch, withRouter } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from './util/route_util.js';
// import SplashContainer from "./components/splash/splash_container.js"
// import LoginContainer from "./components/sessions/login_container.js";
// import SignUpContainer from "./components/sessions/signup_container.js";

import Main from './components/main';

function App () {
  return (
    <div className="App">
   

      <Switch>
        <Route exact path={`/`}><Main/></Route>
        <Route path={`/:seed`}><Main/></Route>
      </Switch>

     



    </div>
  );
}


// const App = () => (
//       <div className="App">
      

//        <Switch>
//         <Route exact path="/" component={SplashContainer} />
//         <AuthRoute path="/register" component={SignUpContainer} />
//         <AuthRoute path="/login" component={LoginContainer} />

//       </Switch>

//     </div>
// )




export default App;
