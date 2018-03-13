import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import { Link } from 'react-router-dom'
import Input from 'material-ui-icons/Input'
import Button from 'material-ui/Button'
import Container from 'app/Container'
import LessonList from './components/LessonList'
import SearchButton from './components/searchButton'


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
    word: ''
  }

  handleChange = data => {
    this.setState({
      word: data
    })
  }

  handleChange2 = ids => {
    this.setState({
      lessonIds: ids
    })
  }

  handleSearch = () => {
    this.props.requestAllLessons(this.state.word)
  }

  handleRegister = () => {
    this.props.requestPutTimetables(this.state.lessonIds)
  }

  render() {
    const {
      classes,
      lessons,
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
            <SearchButton
              className={classes.searchButton}
              onChangeValue={this.handleChange}
              onClick={this.handleSearch}
            />
            <LessonList lessons={lessons} onChangeValue={this.handleChange2} registedLessons={timetable.lessons} />
            <div className={classes.button}>
              <Link to='/lesson'>
                <Button
                  classes={{ colorInherit:classes.colorInherit }}
                  className={classes.getButton}
                  onClick={this.handleRegister}
                >
                   編集する
                  <Input className={classes.icon} />
                </Button>
              </Link>
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
  requestAllLessons : PropTypes.func,
  requestPutTimetables : PropTypes.func,
  timetable : PropTypes.object
}

export default withStyles(styles)(TimetableEditPage)
