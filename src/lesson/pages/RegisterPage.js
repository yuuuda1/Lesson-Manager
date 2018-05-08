import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Typography from 'material-ui/Typography'
import Container from 'app/Container'
import LessonList from './components/LessonList'

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
  }
})

class RegisterPage extends Component {
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
      <div className={classes.root} {...other}>
        <Container>
          <div className={classes.registerContent}>
            <Typography className={classes.title} variant='title'>
              MY時間割の新規登録
            </Typography>
            <Typography variant='title'>
              {message}
            </Typography>
            <LessonList
              lessons={lessons}
              onChangeData={this.handleChange}
              onChangeValue={this.handleChange2}
              onRegister={this.handleRegister}
              onSearch={this.handleSearch}
            />
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
