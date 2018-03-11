import React from 'react'
import { withStyles } from 'material-ui/styles'
import PropTypes from 'prop-types'
import Typography from 'material-ui/Typography'
import ExpansionPanel, {
  ExpansionPanelSummary,
  ExpansionPanelDetails
} from 'material-ui/ExpansionPanel'
import ExpandMoreIcon from 'material-ui-icons/ExpandMore'
import LessonListContent from './LessonListContent'

const styles = () => ({
  root: {
    width: '100%',
    height: '100%',
    marginRight: '40%',
    display: 'block',
    marginTop: '56px'

  },
  title: {
    fontSize: '24px',
    fontColor: '#000000',
    opacity: '0.87'
  },
  registed: {
    fontSize: '24px',
    fontColor: '#000000',
    opacity: '0.87'
  }
})

const RegistedList = ({ classes, lessons, ...other }) => (
  <div className={classes.root} {...other}>
    {lessons.length === 0 ? lessons.map(lesson => (
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.registed}>
                登録済み
          </Typography>
          <Typography className={classes.title}>
            {lesson.name}
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <LessonListContent lesson={lesson} />
        </ExpansionPanelDetails>
      </ExpansionPanel>
    )) : <div />}
  </div>
)

RegistedList.propTypes = {
  classes : PropTypes.object.isRequired,
  lessons : PropTypes.array
}

export default withStyles(styles)(RegistedList)
