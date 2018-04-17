import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'
import Container from 'app/Container'
import TimeTable from './components/TimeTable'
import { Link } from 'react-router-dom'

const styles = () => ({
  root: {
    backgroundColor: '#FAFAFA',
    width: '100%',
    height: '100%'
  },
  title: {
    maxWidth: '1150px',
    marginLeft: '32px',
    marginTop: '32px',
    paddingBottom: '8px',
    borderBottom: '1px solid #000000',
    borderStyle: '0.54',
    fontWeight: 'Regular',
    opacity: '0.54'
  },
  titleStyle: {
    height: '32px',
    display: 'inline-block',
    fontSize: '20px',
    paddingTop: '8px'
  },
  buttonStyle: {
    height: '36px',
    fontSize: '16px',
    display: 'inline-block',
    float: 'right'
  }
})

class LessonPage extends Component {
  componentWillMount() {
    this.props.requestMyTimetable()
  }

  render() {
    const {
      classes,
      lessons,
      timetable,
      requestMyTimetable,
      ...other
    } = this.props

    const myTimetable = Object.keys(timetable).length === 0 ? (
      <Typography>
        まだ時間割が登録されていません
      </Typography>
    ) : <TimeTable timetable={timetable} />
    return (
      <div className={classes.root} {...other}>
        <Container>
          <div className={classes.title}>
            <Typography variant='title' className={classes.titleStyle}>
              MY時間割
            </Typography>
            <Link to='/users/timetables/edit'>
              <Button className={classes.buttonStyle} color='defalut'>
                編集
              </Button>
            </Link>
          </div>
          <div>
          </div>
          {myTimetable}
        </Container>
      </div>
    )
  }
}

LessonPage.propTypes = {
  classes : PropTypes.object.isRequired,
  lessons : PropTypes.array,
  requestMyTimetable : PropTypes.func,
  timetable : PropTypes.object
}

export default withStyles(styles)(LessonPage)
