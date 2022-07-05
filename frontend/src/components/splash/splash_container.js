import { connect } from "react-redux";
import Splash from './splash';




const mSTP = state => ({
    state: state
  });
  
  
  
  const SplashContainer = connect(mSTP, null)(Splash);
  export default SplashContainer;