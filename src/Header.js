import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import classNames from 'classnames'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import StoreIcon from 'material-ui-icons/Store'
import Button from 'material-ui/Button'
import IconButton from 'material-ui/IconButton'

const styles = () => ({
  root: {
    width: '100vh',
    height: '64px'
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  appbar: {
    width: '100%'
  },
  headerTitle: {
    flex: 1,
    fontSize: '24px'
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

const Header = props => {
  const {
    classes,
    children,
    logout,
    className: classNameProp,
    ...other
  } = props

  const className = classNames(classes.root, classNameProp)

  return (
    <div className={className} {...other} >
      <AppBar
        classes={{
          root: classes.header,
          colorPrimary: classes.appBarColorDefault
        }}
      >
        <Toolbar style={{ marginRight: 'auto' }}>
          <Typography className={classes.headerTitle} color='inherit' variant='title'>
            Lesson Manager
          </Typography>
        </Toolbar>
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
      {children}
    </div>
  )
}

Header.propTypes = {
  children : PropTypes.node,
  classes : PropTypes.object.isRequired,
  className : PropTypes.string,
  logout : PropTypes.func
}

export default withStyles(styles)(Header)
