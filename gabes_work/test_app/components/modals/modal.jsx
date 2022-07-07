
import React from 'react';
import LoginModal from './login_modal';
import Manual from './manual';
import Reveal from './reveal_puzzle';
import Library from './library';

class Modal extends React.Component {
      constructor(props){
            super(props)
      }

      render(){
            let component;

            switch (this.props.modal) {
                  case 'login':
                        component = <LoginModal />
                        break
                  case 'manual':
                        component = <Manual />
                        break
                  case 'library':
                        component = <Library />
                        break
                  case 'puzzle-reveal':
                        <Reveal /> 
                        break
                  default:
                        return null
            }

            if (!this.props.modal) { return null }

            return(
                  {component}
            )
      }
}

const mapStateToProps = state => {
      return {
            modal: state.ui.modal
      }
}

const mapDispatchToProps = dispatch => {
      return {
            closeModal: () => dispatch(closeModal())
      }
}

export default ConnectionType(mapStateToProps, mapDispatchToProps)(Modal);