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
  listElememt: {
    width: '1150x',
    height: '600px'
  },
  listSideBar: {
    width: '30px',
    height: '548px',
    display: 'inline-block',
    paddingTop: '48px',
  },
  listItemStyle: {
    width: '160px',
    height: '120px',
    backgroundColor: '#FAFAFA',
    display: 'inline-block',
    textAlign: 'center',
    paddingTop: '50px'
  },
  listBlock: {
    display: 'inline-block',
    width: '1120px',
    height: '600px',
    fontSize: '16px',
    position: 'relative',
    top: 0
  },
  listStyles: {
    paddingTop: '0px',
    paddingBottom: '0px',
    color: '#000000',
    opacity: '0.87'
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
  },
  primary: {
    fontSize: '16px',
    fontFamily: 'Roboto',
    color: '#000000',
    opacity: '0.87',
    textAlign: 'center'
  }
})

const dailys = [
  "Mon",
  "Tue",
  "Web",
  "Thu",
  "Fri",
  "Sat",
  "Etc"
]

const numbers = [
  "1",
  "2",
  "3",
  "4",
  "5"
]

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

    const weekList = dailys.map(daily => (
      <Typography className={classes.weekText}>{daily}</Typography>
    ))

    const numberList = numbers.map(number => (
      <Typography className={classes.numberText}>{number}</Typography>
    ))

    const listItems = dailys.map(daily => (
      <ListItem label={daily} button onClick={this.handleOpen} divider={true} className={classes.listItemStyle}>
        <ListItemText primary="講義名" classes={{primary: classes.primary}} />
      </ListItem>
    ))

    const lists = numbers.map(number => (
      <List label={number} disablePadding={true} classes={{padding: classes.listStyles}}>
        {listItems}
      </List>
    ))

    return (
      <div className={classes.root} {...other}>
        <div className={classes.listHeader}>
          {weekList}
        </div>
        <div className={classes.listElememt}>
          <div className={classes.listSideBar}>
            {numberList}
          </div>
          <div className={classes.listBlock}>
            {lists}
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
