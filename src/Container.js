import React, { Component } from 'react'
import { withStyles } from 'material-ui/styles'
import classNames from 'classnames'
import Drawer from 'material-ui/Drawer'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import List from 'material-ui/List'
import Typography from 'material-ui/Typography'
import { ListItem, ListItemText } from 'material-ui/List'
import IconButton from 'material-ui/IconButton'
import InboxIcon from 'material-ui-icons/Inbox'
import DraftsIcon from 'material-ui-icons/Drafts'
import MenuIcon from 'material-ui-icons/Menu'
import ChevronLeftIcon from 'material-ui-icons/ChevronLeft'
import ChevronRightIcon from 'material-ui-icons/ChevronRight'

const drawerWidth = 240

const styles = theme => ({
  root: {
    flexGrow: 1,
    fontFamily: 'Roboto',
    fontSize: '24px',
    fontWeight: 'bold',
    marginLeft: '16px',
    lineHeight: '64px',
  },
  appFrame: {
    zIndex: 1,
    overflow: 'hidden',
    position: 'absolute',
    top: '0px',
    left: '0px',
    display: 'flex',
    width: '100vw',
  },
  appBar: {
    position: 'absolute',
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  'appBarShift-left': {
    marginLeft: drawerWidth,
  },
  'appBarShift-right': {
    marginRight: drawerWidth,
  },
  menuButton: {
    marginLeft: 2,
    marginRight: 20,
  },
  hide: {
    display: 'none',
  },
  drawerPaper: {
    position: 'relative',
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
    borderBottom: '1px solid #000',
  },
  listStyles: {
    width: '100%',
    maxWidth: 360,
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
  }
})


class PersistentDrawer extends Component {
  state = {
    open: false,
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
            className={classNames(
              classes.appBar,
              this.state.open && classes.appBarShift,
            )}
            classes={{
              colorPrimary: classes.appBarColorDefault
            }}
          >
            <Toolbar disableGutters={!this.state.open}>
              <IconButton
                color="inherit"
                aria-label="MY時間割"
                onClick={this.handleDrawerOpen}
                className={classNames(
                  classes.menuButton,
                  this.state.open && classes.hide
                )}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="title" color="inherit" noWrap>
                MY時間割
              </Typography>
            </Toolbar>
          </AppBar>
          <Drawer
            variant="persistent"
            open={this.state.open}
            classes={{
              paper: classes.drawerPaper
            }}
          >
            <div className={classes.drawerHeader}>
              <IconButton onClick={this.handleDrawerClose}>
                {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
              </IconButton>
            </div>
            <div className={classes.listStyles}>
              <List>
                <ListItem button>
                  <InboxIcon />
                  <ListItemText primary="MY時間割" />
                </ListItem>
                <ListItem button>
                  <DraftsIcon />
                  <ListItemText primary="おすすめ" />
                </ListItem>
              </List>
            </div>
          </Drawer>
          <div
            className={classNames(
              classes.sideBar,
              this.state.open && classes.sideBarShift,
            )}
          >
          </div>
          {children}
        </div>
      </div>
    )
  }
}

export default withStyles(styles, { withTheme: true })(PersistentDrawer)
