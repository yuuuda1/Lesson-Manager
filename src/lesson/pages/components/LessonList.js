import React, { Component } from 'react'
import { withStyles } from 'material-ui/styles'
import PropTypes from 'prop-types'
import Typography from 'material-ui/Typography'
// import Paper from 'material-ui/Paper'
import ExpansionPanel, {
  ExpansionPanelSummary,
  ExpansionPanelDetails
} from 'material-ui/ExpansionPanel'
import ExpandMoreIcon from 'material-ui-icons/ExpandMore'
import LessonListContent from './LessonListContent'
import RegistedList from './RegistedList'


const styles = () => ({
  root: {
    width: '100%',
    height: '100%',
    marginRight: '40%',
    marginLeft: '10%',
    display: 'block',
    marginBottom: '120px'
  },
  title: {
    fontSize: '24px',
    fontColor: '#000000',
    opacity: '0.87'
  },
  getButton: {
    color: '#00BCD4',
    fontSize: '18px',
    marginTop: '32px',
    position: 'absolute',
    buttom: '64px'
  },
  colorInherit: {
    color: '#00BCD4'
  },
  icon: {
    marginLeft: '5px'
  },
  button: {
  }
})

class LessonList extends Component {
  constructor(props) {
    super(props)
    const ids = this.props.registedLessons.map(registedLesson => (
      registedLesson.id
    ))
    this.state = {
      lessonIds: ids,
      registedLessons: this.props.registedLessons
    }
    this.props.onChangeValue(ids)
  }

  handleChange = lesson => () => {
    const ids = this.state.lessonIds
    ids.push(lesson.id)
    const array = this.state.registedLessons.map(registedLesson => (
      registedLesson
    ))
    array.push(lesson)
    this.props.onChangeValue(ids)
    this.setState({
      registedLessons: array
    })
  }

  handleDelete = id => () => {
    const lessonsIds = this.state.lessonIds
    const registLessons = this.state.registedLessons
    lessonsIds.map((lessonsId, index) => {
      if (lessonsId === id) {
        lessonsIds.splice(index, 1)
      }
      return ''
    })
    registLessons.map((registLesson, index) => {
      if (registLesson.id === id) {
        registLessons.splice(index, 1)
      }
      return ''
    })
    this.props.onChangeValue(lessonsIds)
    this.setState({
      registedLessons : registLessons
    })
  }

  // handleOpenChange = () => {
  //   this.setState({
  //     open: !this.state.open
  //   })
  // }

  render() {
    const {
      classes,
      lessons,
      onChangeValue,
      registedLessons,
      ...other
    } = this.props

    const lessonListComponent = lessons.length === 0 ? <div /> : lessons.map(lesson => (
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.title}>
            {lesson.name}
          </Typography>
          {/* <Paper onClick={this.handleOpenChange} /> */}
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <LessonListContent label='Register' lesson={lesson} onClick={this.handleChange(lesson)} />
        </ExpansionPanelDetails>
      </ExpansionPanel>
    ))

    return (
      <div className={classes.root} {...other}>
        {lessonListComponent}
        <div className={classes.registed}>
          <RegistedList lessons={this.state.registedLessons} onClick={this.handleDelete} />
        </div>
      </div>
    )
  }
}

LessonList.propTypes = {
  classes : PropTypes.object.isRequired,
  lessons : PropTypes.array,
  onChangeValue : PropTypes.func,
  registedLessons : PropTypes.array
}

LessonList.defaultProps = {
  registedLessons : []
}

export default withStyles(styles)(LessonList)
