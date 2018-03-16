import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Typography from 'material-ui/Typography'
import Container from 'app/Container'
import { Link } from 'react-router-dom'
import TimeTable from './components/TimeTable'

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
            <Typography variant='title'>
              MY時間割
            </Typography>
            <Link to='/users/timetables/edit'>
              <Typography>
                編集する
              </Typography>
            </Link>
          </div>
          <div>
            {myTimetable}
          </div>
          <div className={classes.title}>
            <Typography className={classes.universal} variant='title'>
              京都産業大学 コンピュータ理工学部 インテリジェントシステム学科
            </Typography>
            <Typography variant='title'>
              平成28年度 秋学期 時間割
              {' '}
            </Typography>
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
