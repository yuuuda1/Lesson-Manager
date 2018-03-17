import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import StoreIcon from 'material-ui-icons/Store'
import Button from 'material-ui/Button'
import IconButton from 'material-ui/IconButton'

const styles = () => ({
  root: {
    fontFamily: 'Roboto',
    width: '100vh',
    height: '64px'
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row'
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
    fontSize: '18px'
  },
  appBarColorDefault: {
    backgroundColor: '#00BCD4'
  },
  icon: {
    color: '#FFF'
  }

})

const Header = ({
  classes, children, logout, ...other
}) => (
  <AppBar
    classes={{
      root: classes.header,
      colorPrimary: classes.appBarColorDefault
    }}
    {...other}
  >
    {children}
    <Toolbar style={{ marginLeft: 'auto' }}>
      <Button onClick={logout}>
        <Typography className={classes.title}>
          ログアウト
        </Typography>
      </Button>
      <IconButton className={classes.icon}>
        <StoreIcon />
      </IconButton>
    </Toolbar>
  </AppBar>
)

Header.propTypes = {
  children : PropTypes.node,
  classes : PropTypes.object.isRequired,
  logout : PropTypes.func
}

export default withStyles(styles)(Header)
