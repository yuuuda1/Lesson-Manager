import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
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
    left: '0px'
  },
  title: {
    color: '#FFF',
    fontSize: '24px'
  },
  appBarColorDefault: {
    backgroundColor: '#00BCD4'
  }

})

const Header = ({ classes, ...other }) => (
  <div className={classes.root} {...other}>
    <div className={classes.appbar}>
      <AppBar
        classes={{
          colorPrimary: classes.appBarColorDefault
        }}
      >
        <Toolbar>
          <Typography className={classes.title} variant='title'>
            Lesson-Manager
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  </div>
)

Header.propTypes = {
  classes : PropTypes.object.isRequired
}

export default withStyles(styles)(Header)
