import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Container from 'app/foundation/components/Container'
import Route from 'app/Route'
import { Switch, Redirect } from 'react-router-dom'
import RegisterMain from 'app/modules/lesson/pages/components/RegisterMain'
import SearchResult from 'app/modules/lesson/pages/components/SearchResult'

const styles = () => ({
  root: {
    zIndex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: '#FAFAFA',
    fontFamily: 'Roboto'
  },
  registerContent: {
    width: 'calc(100% - 56spx)',
    height: '100%',
    marginLeft: '48px',
    marginTop: '48px'
  },
  title: {
    minWidth: '320px',
    width: '20%',
    marginLeft: '34%',
    textAlign: 'center',
    fontSize: '24px',
    color: '#000',
    opacity: '0.87'
  },
  contents: {
  }
})

class TimetableEditPage extends Component {
  constructor(props) {
    super(props)
    const ids = this.props.timetable.lessons.map(lesson => lesson.id)
    this.state = {
      lessonIds: ids,
      registedLessons: this.props.timetable.lessons,
      searchItems: {
        word: '',
        department: '',
        term: '',
        grade: ''
      }
    }
  }

  handleChange = (name, value) => {
    const data = Object.assign({}, this.state.searchItems, {
      [name] : value
    })
    this.setState({
      searchItems: data
    })
  }

  handleRegistLesson = lesson => {
    const ids = this.state.lessonIds
    ids.push(lesson.id)
    const array = this.state.registedLessons.map(registedLesson => (
      registedLesson
    ))
    array.push(lesson)
    this.setState({
      registedLessons: array
    })
  }

  handleDeleteLesson = lesson => () => {
    const lessonsIds = this.state.lessonIds
    const registLessons = this.state.registedLessons
    lessonsIds.map((lessonsId, index) => {
      if (lessonsId === lesson.id) {
        lessonsIds.splice(index, 1)
      }
      return ''
    })
    registLessons.map((registLesson, index) => {
      if (registLesson.id === lesson.id) {
        registLessons.splice(index, 1)
      }
      return ''
    })
    this.setState({
      registedLessons : registLessons
    })
  }

  handleSearch = () => {
    this.props.requestAllLessons(this.state.searchItems)
  }

  handleRegister = () => {
    this.props.requestPutTimetables(this.state.lessonIds)
  }

  render() {
    const {
      classes,
      lessons,
      message,
      requestAllLessons,
      requestPutTimetables,
      ...other
    } = this.props

    return (
      <div className={classes.root}>
        <Container>
          <div {...other}>
            <Switch>
              <Route
                exact
                path='/users/timetables/edit/home'
                render={() => (
                  <RegisterMain
                    label='編集'
                    lessons={this.state.registedLessons}
                    onChange={this.handleChange}
                    onDeleteLesson={this.handleDeleteLesson}
                    onRegister={this.handleRegister}
                    onSearch={this.handleSearch}
                    searchItems={this.state.searchItems}
                  />
                )}
              />
              <Route
                exact
                path='/users/timetables/edit/search'
                render={() => (
                  <SearchResult
                    lessons={lessons}
                    onRegistLesson={this.handleRegistLesson}
                    searchItems={this.state.searchItems}
                  />
                )}
              />
              <Redirect
                exact
                from='/users/timetables/edit'
                to='/users/timetables/edit/home'
              />
            </Switch>
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
