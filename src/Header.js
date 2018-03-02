import React from 'react';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';

const styles = {
  root: {
  },
  flex: {
    flex: 1,
    fontFamily: 'Roboto',
    fontSize: '24px'
  },
};

class Header extends React.Component {
  render() {
    const { classes } = this.props;
    return (
        <AppBar className={classes.root}>
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="title" color="inherit" className={classes.flex}>
              MY時間割
            </Typography>
          </Toolbar>
        </AppBar>
    );
  }
}

export default withStyles(styles)(Header);
