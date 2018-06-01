import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import classNames from 'classnames'
import Drawer from 'material-ui/Drawer'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import List, { ListItem, ListItemText } from 'material-ui/List'
import IconButton from 'material-ui/IconButton'
import MenuIcon from 'material-ui-icons/Menu'
import HomeIcon from 'material-ui-icons/Home'
import DateRangeIcon from 'material-ui-icons/DateRange'
import InputIcon from 'material-ui-icons/Input'
import StarIcon from 'material-ui-icons/Star'
import SearchIcon from 'material-ui-icons/Search'
import ChevronLeftIcon from 'material-ui-icons/ChevronLeft'
import ChevronRightIcon from 'material-ui-icons/ChevronRight'
import { Link } from 'react-router-dom'
import ConnectedHeader from 'app/foundation/containers/ConnectedHeader'

const drawerWidth = 240

const styles = theme => ({
  root: {
    width: '100vw',
    height: '100%',
    minWidth: '960px',
    minHeight: '100vh',
    display: 'flex',
    position: 'relative',
    overflow: 'auto'
  },
  appFrame: {
    backgroundColor: '#FAFAFA',
    width: '100%'
  },
  appBar: {
    display: 'flex',
    flexDirection: 'row',
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
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
    height: '100%',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerPaperClose: {
    width: 60,
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
    borderBottom: '2px solid #000',
    opacity: '0.54'
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
    top: '0px',
    backgroundColor: '#6A1B9A'
  },
  sideBarShift: {
    width: '0px'
  },
  appBarColorDefault: {
    backgroundColor: '#6A1B9A'
  },
  childrenStyle: {
    marginTop: '64px',
    width: 'calc(100% - 20px)',
    height: 'calc(100% - 84px)',
    padding: '10px 20px',
    position: 'relative',
    overflow: 'auto'
  },
  title: {
    color: '#FFF',
    fontSize: '24px'
  },
  listItemText: {
    marginLeft: '16px'
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
        <Drawer
          classes={{
            paper: classNames(
              classes.drawerPaper,
              !this.state.open && classes.drawerPaperClose
            )
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
                <Link className={classes.listItemText} to='/users/me'>
                  <ListItemText primary='マイページ' />
                </Link>
              </ListItem>
              <ListItem button className={classes.listItem}>
                <DateRangeIcon />
                <Link className={classes.listItemText} to='/timetable/home'>
                  <ListItemText primary='MY時間割' />
                </Link>
              </ListItem>
              <ListItem button className={classes.listItem}>
                <InputIcon />
                <Link className={classes.listItemText} to='/timetable/register'>
                  <ListItemText primary='時間割登録' />
                </Link>
              </ListItem>
              <ListItem button className={classes.listItem}>
                <SearchIcon />
                <Link className={classes.listItemText} to='/users/search'>
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
        <div className={classes.appFrame}>
          <ConnectedHeader className={classNames(
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
              <Link to='/timetable/home'>
                <Typography className={classes.title} variant='title'>
                  Lesson Manager
                </Typography>
              </Link>
            </Toolbar>
          </ConnectedHeader>
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
