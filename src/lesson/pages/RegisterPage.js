import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Container from 'app/Container'
import LessonList from './components/LessonList'
import SearchButton from './components/searchButton'


const styles = () => ({
  root: {
    position: 'absoluto',
    zIndex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: '#FAFAFA'
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
    height: '100%',
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
  }

})


class RegisterPage extends Component {
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
    this.props.requestPostTimetables(this.state.lessonIds)
  }

  render() {
    const {
      classes,
      lessons,
      requestAllLessons,
      requestPostTimetables,
      ...other
    } = this.props

    return (
      <div className={classes.root} {...other}>
        <Container>
          <div className={classes.registerContent}>
            <div className={classes.title}>
              MY時間割の新規登録
            </div>
            <SearchButton
              className={classes.searchButton}
              onChangeValue={this.handleChange}
              onClick={this.handleSearch}
            />
            <LessonList lessons={lessons} onChangeValue={this.handleChange2} onClick={this.handleRegister} />
          </div>
        </Container>
      </div>
    )
  }
}

RegisterPage.propTypes = {
  classes : PropTypes.object.isRequired,
  lessons : PropTypes.array,
  requestAllLessons : PropTypes.func,
  requestPostTimetables : PropTypes.func
}

export default withStyles(styles)(RegisterPage)
