import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Typography from 'material-ui/Typography'
import LessonList from 'app/modules/timetable/pages/components/LessonList'

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
  }
})

const SearchResult = props => {
  const {
    classes,
    lessons,
    onRegistLesson,
    searchItems,
    ...other
  } = props

  return (
    <div className={classes.registerContent} {...other}>
      <Typography className={classes.title} variant='title'>
        対象学部:
        {searchItems.department}
      </Typography>
      <Typography className={classes.title} variant='title'>
        開講学期:
        {searchItems.term}
      </Typography>
      <Typography className={classes.title} variant='title'>
        配当年次:
        {searchItems.grade}
      </Typography>
      <Typography className={classes.title} variant='title'>
        キーワード:
        {searchItems.word}
      </Typography>
      <Typography className={classes.title} variant='title'>
        での検索結果
        {lessons.length}
        件
      </Typography>
      <LessonList
        label='登録'
        lessons={lessons}
        onClick={onRegistLesson}
      />
    </div>
  )
}

SearchResult.propTypes = {
  classes : PropTypes.object.isRequired,
  lessons : PropTypes.array,
  onRegistLesson : PropTypes.func,
  searchItems : PropTypes.object
}

export default withStyles(styles)(SearchResult)
