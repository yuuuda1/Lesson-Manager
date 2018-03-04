import React, { Component } from 'react'
import { withStyles } from 'material-ui/styles'
import Container from '../Container'
import LessonList from './LessonList'
import SearchButton from './searchButton'

const styles = () => ({
  root: {
  },
  title: {
    marginLeft: '110px',
    textAlign: 'center',
    fontSize: '16px',
    color: '#000000',
    opacity: '0.87',
    fontFamily: 'Roboto',
    
    
  },
  searchButton: {
    marginLeft: '420px',
    marginBottom: '64px',
    marginTop: '20px',
  },
  registerContent: {
    width: '100%',
    height: '100%',
    marginLeft: '70px',
    marginTop: '60px'
  }

})

class Register extends Component {
  render() {
    const {
      classes,
      ...other
    } = this.props
    return(
      <div className={classes.root} {...other}>
        <Container>
          <div className={classes.registerContent}>
            <div className={classes.title}>
              My時間割の新規登録
            </div>
            <SearchButton className={classes.searchButton}
            />
            <LessonList />
          </div>
        </Container>
      </div>
    )
  }
}

export default withStyles(styles)(Register)
