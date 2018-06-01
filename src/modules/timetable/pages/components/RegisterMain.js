import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Typography from 'material-ui/Typography'
import LessonList from 'app/modules/timetable/pages/components/LessonList'
import Button from 'app/materials/Button'
import Select from 'material-ui/Select'
import { FormControl } from 'material-ui/Form'
import { InputLabel } from 'material-ui/Input'
import { MenuItem } from 'material-ui/Menu'
import SearchTextField from 'app/materials/SearchTextField'

const styles = () => ({
  root: {
    zIndex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: '#FAFAFA',
    fontFamily: 'Roboto'
  },
  registerContent: {
    width: 'calc(100% - 56spx)',
    height: '100%',
    marginLeft: '48px',
    marginTop: '48px'
  },
  title: {
    minWidth: '320px',
    width: '20%',
    marginLeft: '34%',
    textAlign: 'center',
    fontSize: '24px',
    color: '#000',
    opacity: '0.87'
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
  },
  SearchTextField: {
    width: '50%'
  }
})

class RegisterMain extends Component {
  handleChange = name => event => {
    this.props.onChange(name, event.target.value)
  }

  render() {
    const {
      classes,
      label,
      lessons,
      onDeleteLesson,
      onRegister,
      onSearch,
      searchItems,
      ...other
    } = this.props

    return (
      <div className={classes.registerContent} {...other}>
        <Typography className={classes.title} variant='title'>
          MY時間割の
          {label}
        </Typography>
        <FormControl className={classes.departmentList}>
          <InputLabel htmlFor='department'>
            対象学部
          </InputLabel>
          <Select
            label='対象学部'
            margin='none'
            onChange={this.handleChange('department')}
            value={searchItems.department}
          >
            <MenuItem value=''>
              <em>
                None
              </em>
            </MenuItem>
            <MenuItem value='共通教育科目'>
              共通教育科目
            </MenuItem>
            <MenuItem value='経済学部'>
              経済学部
            </MenuItem>
            <MenuItem value='経営学部'>
              経営学部
            </MenuItem>
            <MenuItem value='法学部'>
              法学部
            </MenuItem>
            <MenuItem value='外国語学部'>
              外国語学部
            </MenuItem>
            <MenuItem value='文化学部'>
              文化学部
            </MenuItem>
            <MenuItem value='理学部'>
              理学部
            </MenuItem>
            <MenuItem value='コンピュータ理工学部'>
              コンピュータ理工学部
            </MenuItem>
            <MenuItem value='総合生命科学部'>
              総合生命科学部
            </MenuItem>
            <MenuItem value='現代社会学部'>
              現代社会学部
            </MenuItem>
            <MenuItem value='情報理工学部'>
              情報理工学部
            </MenuItem>
          </Select>
        </FormControl>
        <FormControl className={classes.semesterList}>
          <InputLabel htmlFor='semester'>
            開講学期
          </InputLabel>
          <Select
            label='開講学期'
            margin='none'
            onChange={this.handleChange('term')}
            value={searchItems.term}
          >
            <MenuItem value=''>
              <em>
                None
              </em>
            </MenuItem>
            <MenuItem value='春学期'>
              春学期
            </MenuItem>
            <MenuItem value='秋学期'>
              秋学期
            </MenuItem>
            <MenuItem value='通年'>
              通年
            </MenuItem>
            <MenuItem value='春学期集中'>
              春学期集中
            </MenuItem>
            <MenuItem value='秋学期集中'>
              秋学期集中
            </MenuItem>
            <MenuItem value='集中'>
              集中
            </MenuItem>
          </Select>
        </FormControl>
        <FormControl className={classes.gradeList}>
          <InputLabel htmlFor='grade'>
            配当年次
          </InputLabel>
          <Select
            label='配当年次'
            margin='none'
            onChange={this.handleChange('grade')}
            value={searchItems.grade}
          >
            <MenuItem value=''>
              <em>
                None
              </em>
            </MenuItem>
            <MenuItem value='1'>
              １年次
            </MenuItem>
            <MenuItem value='2'>
              ２年次
            </MenuItem>
            <MenuItem value='3'>
              ３年次
            </MenuItem>
            <MenuItem value='4'>
              ４年次
            </MenuItem>
          </Select>
        </FormControl>
        <SearchTextField
          className={classes.SearchTextField}
          onChangeValue={this.handleChange('word')}
          onClick={onSearch}
        />
        <Button
          className={classes.getButton}
          color='primary'
          onClick={onSearch}
          variant='raised'
        >
          検索
        </Button>
        <Button
          className={classes.getButton}
          color='primary'
          onClick={onRegister}
          variant='raised'
        >
          {label}
        </Button>
        <Typography variant='title'>
          登録済み授業
        </Typography>
        <LessonList
          label='削除'
          lessons={lessons}
          onClick={onDeleteLesson}
        />
      </div>
    )
  }
}

RegisterMain.propTypes = {
  classes : PropTypes.object.isRequired,
  label : PropTypes.string,
  lessons : PropTypes.array,
  onChange : PropTypes.func,
  onDeleteLesson : PropTypes.func,
  onRegister : PropTypes.func,
  onSearch : PropTypes.func,
  searchItems : PropTypes.object
}

export default withStyles(styles)(RegisterMain)
