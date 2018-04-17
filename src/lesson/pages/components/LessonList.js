import React, { Component } from 'react'
import { withStyles } from 'material-ui/styles'
import PropTypes from 'prop-types'
import Typography from 'material-ui/Typography'
import Paper from 'material-ui/Paper'
import ExpansionPanel, {
  ExpansionPanelSummary,
  ExpansionPanelDetails
} from 'material-ui/ExpansionPanel'
import classNames from 'classnames'
import ExpandMore from 'material-ui-icons/ExpandMore'
import Select from 'material-ui/Select'
import { FormControl } from 'material-ui/Form'
import Input, { InputLabel } from 'material-ui/Input'
import Button from 'material-ui/Button'
import { MenuItem } from 'material-ui/Menu'
import LessonListContent from './LessonListContent'
import RegistedList from './RegistedList'
import SearchButton from './searchButton'

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
  },
  departmentList: {
    minWidth: '192px',
    marginRight: '16px'
  },
  semesterList: {
    minWidth: '112px',
    marginRight: '16px'
  },
  gradeList: {
    minWidth: '112px',
    marginRight: '16px'
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
      className: classNameProp,
      lessons,
      onChangeValue,
      registedLessons,
      ...other
    } = this.props

    const className = classNames(classes.root, classNameProp)

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
      <div className={className} {...other}>
        <div className={classes.form}>
          <FormControl className={classes.formControl} className={classes.departmentList}>
            <InputLabel htmlFor='department'>開講学部</InputLabel>
            <Select
              label='対象学部'
              margin='none'
              onChange={this.handleChange('department')}
              value={this.state.searchItems.department}
            >
              <MenuItem value=''>
                <em>None</em>
              </MenuItem>
              <MenuItem value='経済学部'>経済学部</MenuItem>
              <MenuItem value='経営学部'>経営学部</MenuItem>
              <MenuItem value='法学部'>法学部</MenuItem>
              <MenuItem value='外国語学部'>外国語学部</MenuItem>
              <MenuItem value='文化学部'>文化学部</MenuItem>
              <MenuItem value='理学部'>理学部</MenuItem>
              <MenuItem value='コンピュータ理工学部'>コンピュータ理工学部</MenuItem>
              <MenuItem value='総合生命科学部'>総合生命科学部</MenuItem>
              <MenuItem value='現代社会学部'>現代社会学部</MenuItem>
            </Select>
          </FormControl>
          <FormControl className={classes.formControl} className={classes.semesterList}>
            <InputLabel htmlFor='semester'>開講学期</InputLabel>
            <Select
              label='開講学期'
              margin='none'
              onChange=''
              value=''
            >
              <MenuItem value=''>
                <em>None</em>
              </MenuItem>
              <MenuItem value='春学期'>春学期</MenuItem>
              <MenuItem value='秋学期'>秋学期</MenuItem>
              <MenuItem value='通年'>通年</MenuItem>
              <MenuItem value='春学期集中'>春学期集中</MenuItem>
              <MenuItem value='秋学期集中'>秋学期集中</MenuItem>
              <MenuItem value='集中'>集中</MenuItem>
            </Select>
          </FormControl>
          <FormControl className={classes.formControl} className={classes.gradeList}>
            <InputLabel htmlFor='grade'>配当年次</InputLabel>
            <Select
              label='配当年次'
              margin='none'
              onChange=''
              value=''
            >
              <MenuItem value=''>
                <em>None</em>
              </MenuItem>
              <MenuItem value='１年次'>１年次</MenuItem>
              <MenuItem value='２年次'>２年次</MenuItem>
              <MenuItem value='３年次'>３年次</MenuItem>
              <MenuItem value='４年次'>４年次</MenuItem>
            </Select>
          </FormControl>
          <SearchButton
            className={classes.searchButton}
            onChangeValue={this.handleChange('word')}
            onClick={this.handleSearch}
          />
          <Button
            classes={{ colorInherit:classes.colorInherit }}
            className={classes.getButton}
            variant='raised'
            color='primary'
            onClick={this.handleRegister}
          >
            登録
          </Button>
        </div>
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
