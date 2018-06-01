import React, { Component } from 'react'
import { withStyles } from 'material-ui/styles'
import PropTypes from 'prop-types'
import Typography from 'material-ui/Typography'
import ExpansionPanel, {
  ExpansionPanelSummary,
  ExpansionPanelDetails
} from 'material-ui/ExpansionPanel'
import classNames from 'classnames'
import ExpandMoreIcon from 'material-ui-icons/ExpandMore'
import LessonListContent from 'app/modules/timetable/pages/components/LessonListContent'

const styles = () => ({
  root: {
    width: '100%',
    height: '80px',
    display: 'block',
    marginLeft: '10%',
    marginTop: '16px'
  },
  title: {
    fontFmaily: 'Roboto',
    fontSize: '24px',
    fontColor: '#000000',
    opacity: '0.87'
  },
  searchButton: {
    display: 'inline-block',
    marginRight: '16px'
  },
  colorInherit: {
    color: '#00BCD4'
  },
  getButton: {
    display: 'inline-block',
    color: '#FFF',
    fontSize: '16px',
    backgroundColor: '#00BCD4',
    width: '90px',
    height: '32px',
    positoin: 'relative',
    top: '-2px'
  }
})

class LessonList extends Component {
  constructor(props) {
    super(props)
    const opens = Array.from({ length: 100 }, () => false)
    this.state = {
      open: opens
    }
  }

  setOpenState = opens => {
    this.setState({
      open: opens
    })
  }

  handleClick = lesson => () => {
    this.props.onClick(lesson)
  }

  handleOpenChange = openNum => () => {
    // console.log(openNum)
    // console.log(this.state.open[1])
    const opens = this.state.open.map((op, index) => {
      if (index === openNum) {
        return !this.state.open[index]
      }
      return this.state.open[index]
    })
    this.setOpenState(opens)
  }

  render() {
    const {
      classes,
      className: classNameProp,
      label,
      lessons,
      onClick,
      ...other
    } = this.props

    const className = classNames(classes.root, classNameProp)

    const lessonListComponent = lessons.length === 0 ? <div /> : lessons.map(lesson => (
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.title}>
            {lesson.name}
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <LessonListContent label={label} lesson={lesson} onClick={this.handleClick(lesson)} />
        </ExpansionPanelDetails>
      </ExpansionPanel>
    ))

    return (
      <div className={className} {...other}>
        {lessonListComponent}
      </div>
    )
  }
}

LessonList.propTypes = {
  classes : PropTypes.object.isRequired,
  className : PropTypes.string,
  label : PropTypes.string,
  lessons : PropTypes.array,
  onClick : PropTypes.func
}

export default withStyles(styles)(LessonList)
