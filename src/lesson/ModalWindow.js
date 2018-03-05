import React, { Component } from 'react'
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

class ModalWindow extends Component {
  render() {
    const {
      classes,
      children,
      open,
      onClose,
      ...other
    } = this.props
    return(
      <Modal
        open={open}
        {...other}
      >
        <div className={classes.root}>
          {children}
          <div className={classes.buttonStyle} onClick={onClose}>
            <Button className={classes.button}>Close</Button>
          </div>
        </div>
      </Modal>
    )
  }
}

export default withStyles(styles)(ModalWindow)
