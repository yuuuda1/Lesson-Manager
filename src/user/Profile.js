/* eslint no-undef: off*/
import React, { Component } from 'react'
import { withStyles } from 'material-ui/styles'
import Button from 'material-ui/Button'
import Typography from 'material-ui/Typography'
import Container from '../Container.js'
import TimeTable from './../lesson/TimeTable.js'

const styles = () => ({
  root: {
    backgroundColor: '#FAFAFA',
    position: 'absolute',
    top: '0px',
    left: '0px',
    width: '100%',
    height: '100vh'
  },
  title: {
    marginLeft: '32px',
    marginTop: '32px',
    paddingBottom: '8px',
    borderBottom: '1px solid #000000',
    borderStyle: '0.54',
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#000000',
    opacity: '0.54'
  },
  universal: {
    marginBottom: '8px'
  }
})

class Profile extends Component {
  // eslint-disable-next-line
  constructor(props) {
    super(props)
  }
  componentDidMount() {
      this.props.requestGetUser(this.props.match.params.id)
      this.props.requestGetTimetable(this.props.match.params.id)
  }

  render() {
    const {
      classes,
      user,
      timetable,
      requestGetUser,
      requestGetTimetable,
      ...other
    } = this.props

    const typo = user.length === 0 ? <div/> : <Typography variant="title">{user.data.name} の時間割 </Typography>

    return(
      <div className={classes.root} {...other}>
        <Container>
          <div className={classes.title}>
            {typo}
          </div>
          <div>
            <TimeTable timetable={timetable}/>
          </div>
        </Container>
      </div>
    )
  }
}

export default withStyles(styles)(Profile)
