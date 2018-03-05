import React, { Component } from 'react'
import { withStyles } from 'material-ui/styles'
import Button from 'material-ui/Button'
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
  // eslint-disable-next-line
  constructor(props) {
    super(props)
  }
  
  componentDidMount() {
    console.log('chk')
    //this.props.requestAllLessons()
  }
  
  getL = () => {
    this.props.requestAllLessons('理工学実験')
  }

  getT = () => {
    this.props.requestAllTimetables()
  }

  show = () => {
    this.props.requestGetTimetable(4)
  }

  post = () => {
    this.props.requestPostTimetables({ lessons: [12, 365, 7633] })
  }

  put = () => {
    this.props.requestPutTimetables(2, { lessons: [33, 66, 99] })
  }

  delete = () => {
    this.props.requestDeleteTimetables(1)
  }
  render() {
    const {
      classes,
      lessons,
      requestAllLessons,
      requestAllTimetables,
      requestGetTimetable,
      requestPostTimetables,
      requestPutTimetables,
      requestDeleteTimetables,
      ...other
    } = this.props
    return(
      <div className={classes.root} {...other}>
        <Container>
          <div>
            <TimeTable />
            <Button onClick={this.getL}>getL</Button>
            <Button onClick={this.getT}>getT</Button>
            <Button onClick={this.show}>show</Button>
            <Button onClick={this.post}>post</Button>
            <Button onClick={this.put}>put</Button>
            <Button onClick={this.delete}>delete</Button>
          </div>
        </Container>
      </div>
    )
  }
}

export default withStyles(styles)(Lesson)
