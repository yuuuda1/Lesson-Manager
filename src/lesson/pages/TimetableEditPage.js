import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Input from 'material-ui-icons/Input'
import Button from 'material-ui/Button'
import Typography from 'material-ui/Typography'
import Container from 'app/Container'
import LessonList from './components/LessonList'

const styles = () => ({
  root: {
    position: 'absolute',
    zIndex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: '#FAFAFA'
  },
  getButton: {
    color: '#00BCD4',
    fontSize: '18px',
    marginTop: '32px'
  },
  maintitle: {
    position: 'absolute',
    left: '500px',
    textAlign: 'center',
    fontSize: '34px',
    color: '#000000',
    opacity: '0.87',
    fontFamily: 'Roboto'
  },
  searchButton: {
    marginLeft: '420px',
    marginBottom: '64px',
    marginTop: '20px'
  },
  registerContent: {
    width: '100%',
    marginLeft: '70px',
    marginTop: '60px'
  },
  title: {
    position: 'relative',
    left: '180px',
    textAlign: 'center',
    fontSize: '24px',
    fontColor: '#000000',
    opacity: '0.87'
  },
  button: {
  },
  icon: {
    marginLeft: '5px'
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
            <div className={classes.button}>
              <Button
                classes={{ colorInherit:classes.colorInherit }}
                className={classes.getButton}
                onClick={this.handleRegister}
              >
                  編集する
                <Input className={classes.icon} />
              </Button>
            </div>
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
