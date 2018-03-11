import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import classNames from 'classnames'
import Drawer from 'material-ui/Drawer'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import List, { ListItem, ListItemText } from 'material-ui/List'
import IconButton from 'material-ui/IconButton'
import MenuIcon from 'material-ui-icons/Menu'
import HomeIcon from 'material-ui-icons/Home'
import DateRangeIcon from 'material-ui-icons/DateRange'
import InputIcon from 'material-ui-icons/Input'
import StarIcon from 'material-ui-icons/Star'
import StoreIcon from 'material-ui-icons/Store'
import ChevronLeftIcon from 'material-ui-icons/ChevronLeft'
import ChevronRightIcon from 'material-ui-icons/ChevronRight'
import { Link } from 'react-router-dom'

const drawerWidth = 240

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  appFrame: {
    zIndex: 1,
    overflow: 'hidden',
    position: 'absolute',
    top: '0px',
    left: '0px',
    display: 'flex',
    width: '100vw'
  },
  appBar: {
    position: 'absolute',
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  'appBarShift-left': {
    marginLeft: drawerWidth
  },
  'appBarShift-right': {
    marginRight: drawerWidth
  },
  menuButton: {
    marginLeft: 2,
    marginRight: 20
  },
  hide: {
    display: 'none'
  },
  drawerPaper: {
    position: 'relative',
    width: drawerWidth
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
    borderBottom: '1px solid #000'
  },
  listStyles: {
  },
  listItem: {
    paddingTop: '16px',
    paddingBottom: '16px',
    width: '100%'
  },
  sideBar: {
    width: '56px',
    height: '100%',
    position: 'absolute',
    left: '0px',
    top: '64px',
    backgroundColor: '#00BCD4'
  },
  sideBarShift: {
    display: 'none'
  },
  appBarColorDefault: {
    backgroundColor: '#00BCD4'
  },
  childrenStyle: {
    marginLeft: 56 - drawerWidth,
    marginTop: '64px',
    width: '100%' - 56,
    height: '100%' - 64
  },
  icon: {
    position: 'absolute',
    right:'32px',
    color: '#FFF'

  }
})


class PersistentDrawer extends Component {
  state = {
    open: false
  }

  handleDrawerOpen = () => {
    this.setState({ open: true })
  }

  handleDrawerClose = () => {
    this.setState({ open: false })
  }

  render() {
    const {
      classes,
      children,
      theme,
      ...other
    } = this.props

    return (
      <div className={classes.root} {...other}>
        <div className={classes.appFrame}>
          <AppBar
            classes={{
              colorPrimary: classes.appBarColorDefault
            }}
            className={classNames(
              classes.appBar,
              this.state.open && classes.appBarShift,
            )}
          >
            <Toolbar disableGutters={!this.state.open}>
              <IconButton
                aria-label='MY時間割'
                className={classNames(
                  classes.menuButton,
                  this.state.open && classes.hide
                )}
                color='inherit'
                onClick={this.handleDrawerOpen}
              >
                <MenuIcon />
              </IconButton>
              <Typography noWrap color='inherit' variant='title'>
                MY時間割
              </Typography>
              <IconButton className={classes.icon}>
                <StoreIcon />
              </IconButton>
            </Toolbar>
          </AppBar>
          <Drawer
            classes={{
              paper: classes.drawerPaper
            }}
            open={this.state.open}
            variant='persistent'
          >
            <div className={classes.drawerHeader}>
              <IconButton onClick={this.handleDrawerClose}>
                {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
              </IconButton>
            </div>
            <div className={classes.listStyles}>
              <List>
                <ListItem button className={classes.listItem}>
                  <HomeIcon />
                  <Link to='/home'>
                    <ListItemText primary='ホーム' />
                  </Link>
                </ListItem>
                <ListItem button className={classes.listItem}>
                  <DateRangeIcon />
                  <Link to='/lesson'>
                    <ListItemText primary='MY時間割' />
                  </Link>
                </ListItem>
                <ListItem button className={classes.listItem}>
                  <InputIcon />
                  <Link to='/register'>
                    <ListItemText primary='時間割登録' />
                  </Link>
                </ListItem>
                <ListItem button className={classes.listItem}>
                  <InputIcon />
                  <Link to='/users/search'>
                    <ListItemText primary='ユーザ検索' />
                  </Link>
                </ListItem>
                <ListItem button className={classes.listItem}>
                  <StarIcon />
                  <ListItemText primary='おすすめ' />
                </ListItem>
              </List>
            </div>
          </Drawer>
          <div
            className={classNames(
              classes.sideBar,
              this.state.open && classes.sideBarShift,
            )}
          />
          <div className={classes.childrenStyle}>
            {children}
          </div>
        </div>
      </div>
    )
  }
}

PersistentDrawer.propTypes = {
  children : PropTypes.node,
  classes : PropTypes.object.isRequired,
  theme : PropTypes.any
}

export default withStyles(styles, { withTheme: true })(PersistentDrawer)
