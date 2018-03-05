import React, { Component } from 'react'
import { withStyles } from 'material-ui/styles'
import Button from 'material-ui/Button'
import Typography from 'material-ui/Typography'
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
  },
  title: {
    marginLeft: '32px',
    marginTop: '32px',
    paddingBottom: '8px',
    borderBottom: '1px solid #000000',
    borderStyle: '0.54',
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#000000',
    opacity: '0.54'
  },
  universal: {
    marginBottom: '8px'
  }
})

class Lesson extends Component {
  // eslint-disable-next-line
  constructor(props) {
    super(props)
  }
  
  componentWillMount() {
    this.props.requestGetTimetable(4)
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
    //this.props.requestDeleteTimetables(11)
    console.log(this.props.timetables)
  }
  render() {
    const {
      classes,
      lessons,
      timetables,
      requestAllLessons,
      requestAllTimetables,
      requestGetTimetable,
      requestPostTimetables,
      requestPutTimetables,
      requestDeleteTimetables,
      ...other
    } = this.props
    console.log('render:', timetables)
    return(
      <div className={classes.root} {...other}>
        <Container>
          <div>
            <TimeTable timetable={timetables}/>
            <Button onClick={this.getL}>getL</Button>
            <Button onClick={this.getT}>getT</Button>
            <Button onClick={this.show}>show</Button>
            <Button onClick={this.post}>post</Button>
            <Button onClick={this.put}>put</Button>
            <Button onClick={this.delete}>delete</Button>
          </div>
          <div className={classes.title}>
            <Typography variant="title" className={classes.universal}>京都産業大学 コンピュータ理工学部 インテリジェントシステム学科</Typography>
            <Typography variant="title">平成28年度 秋学期 時間割 </Typography>
          </div>
          <TimeTable timetable={timetables} />
        </Container>
      </div>
    )
  }
}

export default withStyles(styles)(Lesson)
