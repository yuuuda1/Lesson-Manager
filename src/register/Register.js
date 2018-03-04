import React, { Component } from 'react'
import { withStyles } from 'material-ui/styles'
import Container from '../Container'
import LessonList from './LessonList'
import SearchButton from './searchButton'

const styles = () => ({
  root: {
    

  },
  title: {
    textAlign: 'center'
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
          <div className={classes.title}>
            My時間割の新規登録
          </div>
          <LessonList />
        </Container>
      </div>
    )
  }
}

export default withStyles(styles)(Register)
