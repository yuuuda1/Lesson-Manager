import React, { Component } from 'react'
import { withStyles } from 'material-ui/styles'
import Container from './Container.js'

const styles = () => ({

})

class Lesson extends Component {
  render() {
    const {
      classes,
      ...other
    } = this.props
    return(
      <div {...other}>
        <Container />
      </div>
    )
  }
}

export default withStyles(styles)(Lesson)
