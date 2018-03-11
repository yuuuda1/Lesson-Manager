import React, { Component } from 'react'
import { withStyles } from 'material-ui/styles'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Typography from 'material-ui/Typography'
import Input from 'material-ui-icons/Input'
import Button from 'material-ui/Button'
import Paper from 'material-ui/Paper'
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
  state= {
    open: this.props.open,
    lessonIds: [],
    registedLessons: []
  }

  handleChange = lesson => () => {
    const ids = this.state.lessonIds
    ids.push(lesson.id)
    const array = this.state.registedLessons
    array.push(lesson)
    this.props.onChangeValue(ids)
    this.setState({
      registedLessons: array
    })
  }

  handleOpenChange = () => {
    this.setState({
      open: !this.state.open
    })
  }

  render() {
    const {
      classes,
      lessons,
      onChangeValue,
      onClick,
      ...other
    } = this.props

    const lessonListComponent = lessons.length === 0 ? <div /> : lessons.map(lesson => (
      <ExpansionPanel expanded={this.state.open}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.title}>
            {lesson.name}
          </Typography>
          <Paper onClick={this.handleOpenChange} />
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <LessonListContent lesson={lesson} onClick={this.handleChange(lesson)} />
        </ExpansionPanelDetails>
      </ExpansionPanel>
    ))

    return (
      <div className={classes.root} {...other}>
        {lessonListComponent}
        <div className={classes.registed}>
          <RegistedList lessons={this.state.registedLessons} />
        </div>
        <div className={classes.button}>
          <Link to='lesson'>
            <Button
              classes={{ colorInherit:classes.colorInherit }}
              className={classes.getButton}
              onClick={onClick}
            >
              All Register
              <Input className={classes.icon} />
            </Button>
          </Link>
        </div>
      </div>
    )
  }
}

LessonList.propTypes = {
  classes : PropTypes.object.isRequired,
  lessons : PropTypes.array,
  onChangeValue : PropTypes.func,
  onClick : PropTypes.func,
  open : PropTypes.bool
}

LessonList.defaultProps = {
  open: false
}

export default withStyles(styles)(LessonList)
