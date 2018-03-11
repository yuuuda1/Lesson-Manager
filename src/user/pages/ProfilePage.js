import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Typography from 'material-ui/Typography'
import Container from 'app/Container'
import TimeTable from 'app/lesson/pages/components/TimeTable'

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

class ProfilePage extends Component {
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

    const typo = Object.keys(user).length === 0 ? <div /> : (
      <Typography variant='title'>
        {user.name}
        {' '}
        の時間割
        {' '}
      </Typography>
    )
    const timetableComponent = Object.keys(timetable).length === 0 ? (
      <Typography>
        時間割はありません
      </Typography>) : <TimeTable timetable={timetable} />

    return (
      <div className={classes.root} {...other}>
        <Container>
          <div className={classes.title}>
            {typo}
          </div>
          <div>
            {timetableComponent}
          </div>
        </Container>
      </div>
    )
  }
}

ProfilePage.propTypes = {
  classes : PropTypes.object.isRequired,
  match : PropTypes.object,
  requestGetTimetable : PropTypes.func,
  requestGetUser : PropTypes.func,
  timetable : PropTypes.object,
  user : PropTypes.object
}

export default withStyles(styles)(ProfilePage)
