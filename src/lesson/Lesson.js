import React, { Component } from 'react'
import { withStyles } from 'material-ui/styles'
import Container from '../Container.js'
import TimeTable from './TimeTable.js'

const styles = () => ({
  root: {
    backgroundColor: '#FAFAFA',
    position: 'absolute',
    top: '0px',
    left: '0px',
    width: '100%',
    height: '100vh'
  }
})

class Lesson extends Component {
  ComponentDidMount() {
    this.props.requestAllLessons()
  }
  render() {
    const {
      classes,
      ...other
    } = this.props
    return(
      <div className={classes.root} {...other}>
        <Container>
          <TimeTable />
        </Container>
      </div>
    )
  }
}

export default withStyles(styles)(Lesson)
