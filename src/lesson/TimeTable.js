import React, { Component } from 'react'
import { withStyles } from 'material-ui/styles'
import Typography from 'material-ui/Typography'
import List, { ListItem, ListItemText } from 'material-ui/List'
import ModalWindow from './ModalWindow'
import ModalContent from './ModalContent'

const styles = theme => ({
  root: {
    zIndex: 100,
    marginTop: '32px',
    marginLeft: '32px'
  },
  listHeader: {
    width: '1120px',
    height: '18px',
    backgroundColor: '#FAFAFA',
    borderBottom: '4px solid #FFAB40',
    paddingBottom: '4px',
    paddingLeft: '30px'
  },
  listItemStyle: {
    width: '160px',
    height: '120px',
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
    height: '548px',
    display: 'inline-block',
    paddingTop: '48px',
  },
  listElememt: {
    width: '1150x',
    height: '5px'
  },
  listBlock: {
    display: 'inline-block',
    width: '1120px',
    height: '600px',
    position: 'relative',
    top: 0
  },
  weekText: {
    width: '32px',
    height: '21px',
    display: 'inline-block',
    fontSize: '14px',
    fontFamily: 'Roboto',
    fontWeight: '700',
    textAlign: 'center',
    marginRight: '127px'
  },
  numberText: {
    height: '30px',
    fontSize: '16px',
    fontFamily: 'Roboto',
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: '90px'
  }
})

class TimeTable extends Component {
  state = {
    open: false
  }

  handleOpen = () => {
    this.setState({ open: true })
    console.log('open')
  }

  handleClose = () => {
    this.setState({ open: false })
  }

  render() {
    const {
      classes,
      ...other
    } = this.props
    return (
      <div className={classes.root} {...other}>
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
              <ListItem button onClick={this.handleOpen} divider={true} className={classes.listItemStyle}>
                <ListItemText primary="講義名" />
              </ListItem>
              <ListItem button onClick={this.handleOpen} divider={true} className={classes.listItemStyle}>
                <ListItemText primary="講義名" />
              </ListItem>
              <ListItem button onClick={this.handleOpen} divider={true} className={classes.listItemStyle}>
                <ListItemText primary="講義名" />
              </ListItem>
              <ListItem button onClick={this.handleOpen} divider={true} className={classes.listItemStyle}>
                <ListItemText primary="講義名" />
              </ListItem>
              <ListItem button onClick={this.handleOpen} divider={true} className={classes.listItemStyle}>
                <ListItemText primary="講義名" />
              </ListItem>
              <ListItem button onClick={this.handleOpen} divider={true} className={classes.listItemStyle}>
                <ListItemText primary="講義名" />
              </ListItem>
              <ListItem button onClick={this.handleOpen} divider={true} className={classes.listItemStyle}>
                <ListItemText primary="講義名" />
              </ListItem>
            </List>
            <List
              disablePadding={true}
              classes={{
                padding: classes.listStyles
              }}
            >
              <ListItem button onClick={this.handleOpen} divider={true} className={classes.listItemStyle}>
                <ListItemText primary="講義名" />
              </ListItem>
              <ListItem button onClick={this.handleOpen} divider={true} className={classes.listItemStyle}>
                <ListItemText primary="講義名" />
              </ListItem>
              <ListItem button onClick={this.handleOpen} divider={true} className={classes.listItemStyle}>
                <ListItemText primary="講義名" />
              </ListItem>
              <ListItem button onClick={this.handleOpen} divider={true}className={classes.listItemStyle}>
                <ListItemText primary="講義名" />
              </ListItem>
              <ListItem button onClick={this.handleOpen} divider={true} className={classes.listItemStyle}>
                <ListItemText primary="講義名" />
              </ListItem>
              <ListItem button onClick={this.handleOpen} divider={true} className={classes.listItemStyle}>
                <ListItemText primary="講義名" />
              </ListItem>
              <ListItem button onClick={this.handleOpen} divider={true} className={classes.listItemStyle}>
                <ListItemText primary="講義名" />
              </ListItem>
            </List>
            <List
              disablePadding={true}
              classes={{
                padding: classes.listStyles
              }}
            >
              <ListItem button onClick={this.handleOpen} divider={true} className={classes.listItemStyle}>
                <ListItemText primary="講義名" />
              </ListItem>
              <ListItem button onClick={this.handleOpen} divider={true} className={classes.listItemStyle}>
                <ListItemText primary="講義名" />
              </ListItem>
              <ListItem button onClick={this.handleOpen} divider={true} className={classes.listItemStyle}>
                <ListItemText primary="講義名" />
              </ListItem>
              <ListItem button onClick={this.handleOpen} divider={true} className={classes.listItemStyle}>
                <ListItemText primary="講義名" />
              </ListItem>
              <ListItem button onClick={this.handleOpen} divider={true} className={classes.listItemStyle}>
                <ListItemText primary="講義名" />
              </ListItem>
              <ListItem button onClick={this.handleOpen} divider={true} className={classes.listItemStyle}>
                <ListItemText primary="講義名" />
              </ListItem>
              <ListItem button onClick={this.handleOpen} divider={true} className={classes.listItemStyle}>
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
                button onClick={this.handleOpen}
                divider={true}
                className={classes.listItemStyle}
              >
                <ListItemText primary="講義名" />
              </ListItem>
              <ListItem button onClick={this.handleOpen} divider={true} className={classes.listItemStyle}>
                <ListItemText primary="講義名" />
              </ListItem>
              <ListItem button onClick={this.handleOpen} divider={true} className={classes.listItemStyle}>
                <ListItemText primary="講義名" />
              </ListItem>
              <ListItem button onClick={this.handleOpen} divider={true}className={classes.listItemStyle}>
                <ListItemText primary="講義名" />
              </ListItem>
              <ListItem button onClick={this.handleOpen} divider={true} className={classes.listItemStyle}>
                <ListItemText primary="講義名" />
              </ListItem>
              <ListItem button onClick={this.handleOpen} divider={true} className={classes.listItemStyle}>
                <ListItemText primary="講義名" />
              </ListItem>
              <ListItem button onClick={this.handleOpen} divider={true} className={classes.listItemStyle}>
                <ListItemText primary="講義名" />
              </ListItem>
            </List>
            <List
              disablePadding={true}
              classes={{
                padding: classes.listStyles
              }}
            >
              <ListItem button onClick={this.handleOpen} divider={true} className={classes.listItemStyle}>
                <ListItemText primary="講義名" />
              </ListItem>
              <ListItem button onClick={this.handleOpen} divider={true} className={classes.listItemStyle}>
                <ListItemText primary="講義名" />
              </ListItem>
              <ListItem button onClick={this.handleOpen} divider={true} className={classes.listItemStyle}>
                <ListItemText primary="講義名" />
              </ListItem>
              <ListItem button onClick={this.handleOpen} divider={true} className={classes.listItemStyle}>
                <ListItemText primary="講義名" />
              </ListItem>
              <ListItem button onClick={this.handleOpen} divider={true} className={classes.listItemStyle}>
                <ListItemText primary="講義名" />
              </ListItem>
              <ListItem button onClick={this.handleOpen} divider={true} className={classes.listItemStyle}>
                <ListItemText primary="講義名" />
              </ListItem>
              <ListItem button onClick={this.handleOpen} divider={true} className={classes.listItemStyle}>
                <ListItemText primary="講義名" />
              </ListItem>
            </List>
            <ModalWindow onClose={this.handleClose} open={this.state.open}>
              <ModalContent />
            </ModalWindow>
          </div>
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(TimeTable)
