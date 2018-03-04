import React, { Component } from 'react'
import { withStyles } from 'material-ui/styles'
import Button from 'material-ui/Button'
import Typography from 'material-ui/Typography'
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List'

const drawerWidth = 240
const HeaderHeight = 80

const styles = theme => ({
  root: {
    zIndex: 100,
  },
  listHeader: {
    width: '1274px',
    height: '40px',
    backgroundColor: '#FAFAFA',
    borderBottom: '4px solid #FFAB40',
    paddingBottom: '4px',
    paddingLeft: '30px'
  },
  listItemStyle: {
    width: '182px',
    height: '134px',
    backgroundColor: '#FAFAFA',
    display: 'inline-block',
    textAlign: 'center',
    paddingTop: '50px'
  },
  listStyles: {
    paddingTop: '0px',
    paddingBottom: '0px',
  },
  listSideBar: {
    width: '30px',
    height: '618px',
    display: 'inline-block',
    paddingTop: '52px',
    //borderRight: '1px solid',
  },
  listElememt: {
    width: '1310px',
    height: '670px'
  },
  listBlock: {
    display: 'inline-block',
    width: '1274px',
    height: '670px',
    position: 'absolute',
    top: HeaderHeight + 50
  },
  weekText: {
    width: '32px',
    height: '21px',
    display: 'inline-block',
    fontSize: '16px',
    fontFamily: 'Roboto',
    fontWeight: '700',
    textAlign: 'center',
    marginRight: '150px'
  },
  numberText: {
    height: '30px',
    fontSize: '16px',
    fontFamily: 'Roboto',
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: '104px'
  }
})

class TimeTable extends Component {
  render() {
    const {
      classes,
      ...other
    } = this.props
    return (
      <div className={classes.root}>
        <div className={classes.listHeader}>
          <Typography className={classes.weekText}>Mon</Typography>
          <Typography className={classes.weekText}>Tue</Typography>
          <Typography className={classes.weekText}>Web</Typography>
          <Typography className={classes.weekText}>Thu</Typography>
          <Typography className={classes.weekText}>Fri</Typography>
          <Typography className={classes.weekText}>Sat</Typography>
          <Typography className={classes.weekText}>Etc</Typography>
        </div>
        <div className={classes.listElememt}>
          <div className={classes.listSideBar}>
            <Typography className={classes.numberText}>1</Typography>
            <Typography className={classes.numberText}>2</Typography>
            <Typography className={classes.numberText}>3</Typography>
            <Typography className={classes.numberText}>4</Typography>
            <Typography className={classes.numberText}>5</Typography>
          </div>
          <div className={classes.listBlock}>
            <List
              disablePadding={true}
              classes={{
                padding: classes.listStyles
              }}
            >
              <ListItem button divider={true} className={classes.listItemStyle}>
                <ListItemText primary="講義名" />
              </ListItem>
              <ListItem button divider={true} className={classes.listItemStyle}>
                <ListItemText primary="講義名" />
              </ListItem>
              <ListItem button divider={true} className={classes.listItemStyle}>
                <ListItemText primary="講義名" />
              </ListItem>
              <ListItem button divider={true} className={classes.listItemStyle}>
                <ListItemText primary="講義名" />
              </ListItem>
              <ListItem button divider={true} className={classes.listItemStyle}>
                <ListItemText primary="講義名" />
              </ListItem>
              <ListItem button divider={true} className={classes.listItemStyle}>
                <ListItemText primary="講義名" />
              </ListItem>
              <ListItem button divider={true} className={classes.listItemStyle}>
                <ListItemText primary="講義名" />
              </ListItem>
            </List>
            <List
              disablePadding={true}
              classes={{
                padding: classes.listStyles
              }}
            >
              <ListItem
                button
                divider={true}
                className={classes.listItemStyle}
              >
                <ListItemText primary="講義名" />
              </ListItem>
              <ListItem button divider={true} className={classes.listItemStyle}>
                <ListItemText primary="講義名" />
              </ListItem>
              <ListItem button divider={true} className={classes.listItemStyle}>
                <ListItemText primary="講義名" />
              </ListItem>
              <ListItem button divider={true}className={classes.listItemStyle}>
                <ListItemText primary="講義名" />
              </ListItem>
              <ListItem button divider={true} className={classes.listItemStyle}>
                <ListItemText primary="講義名" />
              </ListItem>
              <ListItem button divider={true} className={classes.listItemStyle}>
                <ListItemText primary="講義名" />
              </ListItem>
              <ListItem button divider={true} className={classes.listItemStyle}>
                <ListItemText primary="講義名" />
              </ListItem>
            </List>
            <List
              disablePadding={true}
              classes={{
                padding: classes.listStyles
              }}
            >
              <ListItem button divider={true} className={classes.listItemStyle}>
                <ListItemText primary="講義名" />
              </ListItem>
              <ListItem button divider={true} className={classes.listItemStyle}>
                <ListItemText primary="講義名" />
              </ListItem>
              <ListItem button divider={true} className={classes.listItemStyle}>
                <ListItemText primary="講義名" />
              </ListItem>
              <ListItem button divider={true} className={classes.listItemStyle}>
                <ListItemText primary="講義名" />
              </ListItem>
              <ListItem button divider={true} className={classes.listItemStyle}>
                <ListItemText primary="講義名" />
              </ListItem>
              <ListItem button divider={true} className={classes.listItemStyle}>
                <ListItemText primary="講義名" />
              </ListItem>
              <ListItem button divider={true} className={classes.listItemStyle}>
                <ListItemText primary="講義名" />
              </ListItem>
            </List>
            <List
              disablePadding={true}
              classes={{
                padding: classes.listStyles
              }}
            >
              <ListItem
                button
                divider={true}
                className={classes.listItemStyle}
              >
                <ListItemText primary="講義名" />
              </ListItem>
              <ListItem button divider={true} className={classes.listItemStyle}>
                <ListItemText primary="講義名" />
              </ListItem>
              <ListItem button divider={true} className={classes.listItemStyle}>
                <ListItemText primary="講義名" />
              </ListItem>
              <ListItem button divider={true}className={classes.listItemStyle}>
                <ListItemText primary="講義名" />
              </ListItem>
              <ListItem button divider={true} className={classes.listItemStyle}>
                <ListItemText primary="講義名" />
              </ListItem>
              <ListItem button divider={true} className={classes.listItemStyle}>
                <ListItemText primary="講義名" />
              </ListItem>
              <ListItem button divider={true} className={classes.listItemStyle}>
                <ListItemText primary="講義名" />
              </ListItem>
            </List>
            <List
              disablePadding={true}
              classes={{
                padding: classes.listStyles
              }}
            >
              <ListItem button divider={true} className={classes.listItemStyle}>
                <ListItemText primary="講義名" />
              </ListItem>
              <ListItem button divider={true} className={classes.listItemStyle}>
                <ListItemText primary="講義名" />
              </ListItem>
              <ListItem button divider={true} className={classes.listItemStyle}>
                <ListItemText primary="講義名" />
              </ListItem>
              <ListItem button divider={true} className={classes.listItemStyle}>
                <ListItemText primary="講義名" />
              </ListItem>
              <ListItem button divider={true} className={classes.listItemStyle}>
                <ListItemText primary="講義名" />
              </ListItem>
              <ListItem button divider={true} className={classes.listItemStyle}>
                <ListItemText primary="講義名" />
              </ListItem>
              <ListItem button divider={true} className={classes.listItemStyle}>
                <ListItemText primary="講義名" />
              </ListItem>
            </List>
          </div>
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(TimeTable)
