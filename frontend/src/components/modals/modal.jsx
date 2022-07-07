
import React from 'react';
import LoginModal from './login_modal';
import {closeModal} from '../../actions/modal_actions'
import { connect } from 'react-redux';
import LoginContainer from '../sessions/login_container';

class Modal extends React.Component {
      constructor(props){
            super(props)
      }

      render(){
            let component;

            switch (this.props.modal) {
                  case 'login':
                        component=<LoginContainer/>
                        break
                  case 'manual':
                        break
                  case 'library':
                        break
                  case 'puzzle-reveal':
                        break
                  default:
                        return null
            }

            if (!this.props.modal) { return null }

            return(
                  <div>{component}</div>
            )
      }
}

const mapStateToProps = state => {
      return {
            modal: state.modal
      }
}

const mapDispatchToProps = dispatch => {
      return {
            closeModal: () => dispatch(closeModal())
      }
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal);