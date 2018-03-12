import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Button from 'material-ui/Button'
import Typography from 'material-ui/Typography'
import Container from 'app/Container'
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
  componentDidMount() {
    // this.props.requestMyTimetable()
  }

  handleShow = () => {
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
          <div>
            {myTimetable}
            <Button onClick={this.handleShow}>
              show
            </Button>
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