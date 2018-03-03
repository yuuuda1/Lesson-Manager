import React, {Component} from 'react'
import {withStyles} from 'material-ui/styles'
import Container from './Container'

const drawerWidth = 56

const styles = () => ({
  root: {
    marginLeft: drawerWidth,
    marginTop: '64px',
    zIndex: '1000'
  },
  mainTitle: {
   // marginLeft: '459px',
    textAlign: 'center',
    marginTop: '176px',
    fontSize: '56px',
    color: '#000000',
    opacity: '0.87'
  },
  topSubTitle: {
    //marginLeft: '337px',
    textAlign: 'center',
    fontSize: '34px',
    marginTop: '14px',
    color: '#000000',
    opacity: '0.54'
  },
  bottomSubTitle: {
   // marginLeft: '483px',
    textAlign: 'center',
    fontSize: '45px',
    marginTop: '261px',
    color: '#000000',
    opacity: '0.54'
  }
})

class Home extends Component {
  render() {
    const {  
      classes,
      ...other
    } = this.props
    return(
       <div className={classes.root}>
         <div {...other}>
           <Container />
         </div>
         <div className={classes.mainTitle}>
           Lesson-Manager
         </div>
         <div className={classes.topSubTitle}>
           This application can manage your timetable
         </div>
         <div className={classes.bottomSubTitle}>
           Let's start manage
         </div>
       </div>
    )
  }
}

export default withStyles(styles)(Home)


