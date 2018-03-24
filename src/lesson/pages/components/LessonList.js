import React, { Component } from 'react'
import { withStyles } from 'material-ui/styles'
import PropTypes from 'prop-types'
import Typography from 'material-ui/Typography'
import Paper from 'material-ui/Paper'
import ExpansionPanel, {
  ExpansionPanelSummary,
  ExpansionPanelDetails
} from 'material-ui/ExpansionPanel'
import ExpandMoreIcon from 'material-ui-icons/ExpandMore'
import Select from 'material-ui/Select'
import { MenuItem } from 'material-ui/Menu'
import LessonListContent from './LessonListContent'
import RegistedList from './RegistedList'
import SearchButton from './searchButton'

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
  searchButton: {
    marginLeft: '20px',
    marginBottom: '64px',
    marginTop: '20px'
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
    const opens = Array.from({ length: 100 }, () => false)
    this.state = {
      lessonIds: ids,
      open: opens,
      registedLessons: this.props.registedLessons,
      searchItems : {
        word: '',
        department: ''
      }
    }
    this.props.onChangeValue(ids)
  }

  setOpenState = opens => {
    this.setState({
      open: opens
    })
  }

  handleChange = name => event => {
    const data = Object.assign({}, this.state.searchItems, {
      [name] : event.target.value
    })
    this.setState({
      searchItems: data
    })
    this.props.onChangeData(data)
  }

  handleSearch = () => {
    this.props.onSearch()
    const opens = this.state.open.map(open => {
      if (open) {
        return false
      }
      return open
    })
    this.setOpenState(opens)
  }

  handleLessonChange = lesson => () => {
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
      lessons,
      onChangeValue,
      registedLessons,
      ...other
    } = this.props

    const lessonListComponent = lessons.length === 0 ? <div /> : lessons.map((lesson, index) => (
      <ExpansionPanel expanded={this.state.open[index]}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Paper onClick={this.handleOpenChange(index)}>
            <Typography className={classes.title}>
              {lesson.name}
            </Typography>
          </Paper>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <LessonListContent label='Register' lesson={lesson} onClick={this.handleLessonChange(lesson)} />
        </ExpansionPanelDetails>
      </ExpansionPanel>
    ))

    return (
      <div className={classes.root} {...other}>
        <Select
          label='対象学部'
          margin='none'
          onChange={this.handleChange('department')}
          value={this.state.searchItems.department}
        >
          <MenuItem value=''>
            <em>
              None
            </em>
          </MenuItem>
          <MenuItem value='経済学部' >
            経済学部
          </MenuItem>
          <MenuItem value='経営学部' >
            経営学部
          </MenuItem>
          <MenuItem value='法学部' >
            法学部
          </MenuItem>
          <MenuItem value='外国語学部' >
            外国語学部
          </MenuItem>
          <MenuItem value='文化学部' >
            文化学部
          </MenuItem>
          <MenuItem value='理学部' >
            理学部
          </MenuItem>
          <MenuItem value='コンピュータ理工学部' >
            コンピュータ理工学部
          </MenuItem>
          <MenuItem value='総合生命科学部' >
            総合生命科学部
          </MenuItem>
          <MenuItem value='現代社会学部' >
            現代社会学部
          </MenuItem>
        </Select>
        <SearchButton
          className={classes.searchButton}
          onChangeValue={this.handleChange('word')}
          onClick={this.handleSearch}
        />
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
  onChangeData : PropTypes.func,
  onChangeValue : PropTypes.func,
  onSearch : PropTypes.func,
  registedLessons : PropTypes.array
}

LessonList.defaultProps = {
  registedLessons : []
}

export default withStyles(styles)(LessonList)
