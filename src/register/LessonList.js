import React, { Component } from 'react'
import { withStyles } from 'material-ui/styles'
import Typography from 'material-ui/Typography'
import ExpansionPanel, {
  ExpansionPanelSummary,
  ExpansionPanelDetails,
} from 'material-ui/ExpansionPanel'
import ExpandMoreIcon from 'material-ui-icons/ExpandMore'
import LessonListContent from './LessonListContent'

const styles = () => ({
  root: {
    width: '100%',
    height: '100%',
    marginRight: '40%',
    marginLeft: '10%',
    display: 'block'
  }
})

class LessonList extends Component {
  render() {
    const {
      classes,
      ...other
    } = this.props
    return(
      <div className={classes.root} {...other}>
        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>コンピュータ理工学実験</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <LessonListContent />
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>コンピュータ理工学実験</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <LessonListContent />
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>コンピュータ理工学実験</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <LessonListContent />
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    )
  }
}

export default withStyles(styles)(LessonList)
