import React, { Component } from 'react'
import { withStyles } from 'material-ui/styles'
import Typography from 'material-ui/Typography'
import ExpansionPanel, {
  ExpansionPanelSummary,
  ExpansionPanelDetails,
} from 'material-ui/ExpansionPanel'
import ExpandMoreIcon from 'material-ui-icons/ExpandMore'
import LessonListContent from './LessonListContent'
import RegistedList from './RegistedList'
import Input from 'material-ui-icons/Input'
import Button from 'material-ui/Button'
import { Link } from 'react-router-dom';
import Paper from 'material-ui/Paper';


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
    opacity: '0.87',
  },
  getButton: {
    color: '#00BCD4',
    fontSize: '18px',
    marginTop: '32px',
    position: 'absolute',
    buttom: '64px',
  },
  colorInherit: {
    color: '#00BCD4'
  },
  icon: {
    marginLeft: '5px'
  },
  button: {

    
  },
})

class LessonList extends Component {
  state= {
    open: this.props.open,
    lessonIds: [],
    registedLessons: []
  }
  handleChange = lesson => () => {
    console.log(this.state.registedLessons)
    console.log(this.state.lessonIds)
    const ids = this.state.lessonIds
    ids.push(lesson.id)
    const array = this.state.registedLessons
    array.push(lesson)
    this.props.onChangeValue(ids)
    this.setState({
      registedLessons: array
    })
  }

  openChange = () => {
    this.setState({
      open: !this.state.open
    })
  }

  render() {
    const {
      classes,
      lessons,
      onClick,
      ...other
    } = this.props

    console.log(this.state.open)

    const lessonListComponent = lessons.length === 0 ? <div/> : lessons.data.map(lesson => (
      <ExpansionPanel expanded={this.state.open}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.title}>{lesson.name}</Typography>
          <Paper onClick={this.openChange}/>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <LessonListContent onClick={this.handleChange(lesson)} lesson={lesson}/>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    ))

    return(
      <div className={classes.root} {...other}>
        {lessonListComponent}
        <div className={classes.registed}>
          <RegistedList lessons={this.state.registedLessons}/>
        </div>
        <div className={classes.button}>
          <Link to='lesson'>
            <Button
              onClick={onClick}
              className={classes.getButton}
              classes={{colorInherit:classes.colorInherit}}
            >All Register<Input className={classes.icon} />
            </Button>
          </Link>
        </div>
      </div>
    )
  }
}

LessonList.defaultProps = {
  open: false
}

export default withStyles(styles)(LessonList)
