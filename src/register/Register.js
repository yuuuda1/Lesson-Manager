import React, { Component } from 'react'
import { withStyles } from 'material-ui/styles'
import Container from '../Container'
import LessonList from './LessonList'

const styles = () => {
  root: {

  }
}

class Register extends Component {
  render() {
    const {
      classes,
      ...other
    } = this.props
    return(
      <div className={classes.root} {...other}>
        <Container>
          <LessonList />
        </Container>
      </div>
    )
  }
}

export default withStyles(styles)(Register)
