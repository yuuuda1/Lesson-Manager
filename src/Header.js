import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {withStyles} from 'material-ui/styles'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'

const styles = () => ({
  root: {
    fontFamily: 'Roboto',
    width: '100vh',
    height: '64px'
  },
  appbar: {
    width: '100%',
    zIndex: 1,
    position: 'absolute',
    top: '0px',
    left: '0px',
  },
  title: {
    color: '#FFF',
    fontSize: '24px',
  },
  appBarColorDefault: {
    backgroundColor: '#00BCD4',
  },

})

class Header extends Component {
  render() {
    const {
      classes,
      ...other
    } = this.props
    return(
      <div className={classes.root} {...other}>
        <div className={classes.appbar}>
          <AppBar
            classes={{
            colorPrimary: classes.appBarColorDefault
            }}
          >
            <Toolbar>
              <Typography variant="title" className={classes.title}>
                Lesson-Manager
              </Typography>
            </Toolbar>
          </AppBar>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Header)
