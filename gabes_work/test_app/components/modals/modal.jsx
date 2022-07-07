
import React from 'react';
import LoginModal from './login_modal';

class Modal extends React.Component {
      constructor(props){
            super(props)
      }

      render(){
            let component;

            switch (this.props.modal) {
                  case 'login':
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