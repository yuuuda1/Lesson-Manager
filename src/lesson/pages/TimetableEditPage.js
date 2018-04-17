import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Typography from 'material-ui/Typography'
import Container from 'app/Container'
import LessonList from './components/LessonList'

const styles = () => ({
  root: {
    width: '100%',
    height: '100%',
  },
  registerContent: {
    width: '100%',
    marginTop: '48px'
  },
  title: {
    maxWidth: '200px',
    margin: 'auto',
    fontSize: '24px',
    fontFamily: 'Roboto',
    fontWeight: 'Regular',
    fontColor: '#000000',
    opacity: '0.87'
  }
})


class TimetableEditPage extends Component {
  state = {
    lessonIds: [],
    searchItems: {
      department: '',
      word: ''
    }
  }

  handleChange = data => {
    this.setState({
      searchItems: data
    })
  }

  handleChange2 = ids => {
    this.setState({
      lessonIds: ids
    })
  }

  handleSearch = () => {
    this.props.requestAllLessons(this.state.searchItems)
  }

  handleRegister = () => {
    // ここで時間割を更新します
    // this.props.requestPutTimetables(this.state.lessonIds)
  }

  render() {
    const {
      classes,
      lessons,
      message,
      requestAllLessons,
      requestPutTimetables,
      timetable,
      ...other
    } = this.props

    return (
      <div className={classes.root} {...other}>
        <Container>
          <div className={classes.registerContent}>
            <div className={classes.title}>
              MY時間割の編集
            </div>
            <Typography>
              {message}
            </Typography>
            <LessonList
              lessons={lessons}
              onChangeData={this.handleChange}
              onChangeValue={this.handleChange2}
              onSearch={this.handleSearch}
              registedLessons={timetable.lessons}
            />
          </div>
        </Container>
      </div>
    )
  }
}

TimetableEditPage.propTypes = {
  classes : PropTypes.object.isRequired,
  lessons : PropTypes.array,
  message : PropTypes.string,
  requestAllLessons : PropTypes.func,
  requestPutTimetables : PropTypes.func,
  timetable : PropTypes.object
}

export default withStyles(styles)(TimetableEditPage)
