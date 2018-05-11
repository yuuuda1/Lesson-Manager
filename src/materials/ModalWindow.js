import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Modal from 'material-ui/Modal'
import Button from 'material-ui/Button'

const styles = () => ({
  root: {
    width: '800px',
    height: '600px',
    maxHight: '800px',
    backgroundColor: '#FFFFFF',
    borderRadius: '2px',
    padding: '24px',
    position: 'relative',
    margin: 'auto'
  },
  buttonStyle: {
    position: 'relative',
    bottom: '-200px',
    margin: 'auto',
    height: '32px',
    width: '100px'
  },
  button: {
  }
})

const ModalWindow = ({
  classes, children, open, onClose, ...other
}) => (
  <Modal
    open={open}
    {...other}
  >
    <div className={classes.root}>
      {children}
      <div className={classes.buttonStyle}>
        <Button className={classes.button} onClick={onClose}>
          Close
        </Button>
      </div>
    </div>
  </Modal>
)

ModalWindow.propTypes = {
  children : PropTypes.node,
  classes : PropTypes.object.isRequired,
  onClose : PropTypes.func,
  open : PropTypes.bool
}

export default withStyles(styles)(ModalWindow)
