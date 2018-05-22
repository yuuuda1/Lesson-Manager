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

class RegisterPage extends Component {
  state = {
    lessonIds: [],
    registedLessons: [],
    searchItems: {
      word: '',
      department: '',
      term: '',
      grade: ''
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
    this.props.requestPostTimetables(this.state.lessonIds)
  }

  render() {
    const {
      classes,
      lessons,
      message,
      requestAllLessons,
      requestPostTimetables,
      ...other
    } = this.props

    return (
      <div className={classes.root}>
        <Container>
          <div {...other}>
            <Switch>
              <Route
                exact
                path='/register/home'
                render={() => (
                  <RegisterMain
                    label='新規登録'
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
                path='/register/search'
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
                from='/register'
                to='/register/home'
              />
            </Switch>
          </div>
        </Container>
      </div>
    )
  }
}

RegisterPage.propTypes = {
  classes : PropTypes.object.isRequired,
  lessons : PropTypes.array,
  message : PropTypes.string,
  requestAllLessons : PropTypes.func,
  requestPostTimetables : PropTypes.func
}

export default withStyles(styles)(RegisterPage)
