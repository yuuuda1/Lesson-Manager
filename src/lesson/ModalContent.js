import React, { Component } from 'react'
import { withStyles } from 'material-ui/styles'
import List, { ListItemText, ListItem } from 'material-ui/List'
import Typography from 'material-ui/Typography'

const styles = () => ({
  root: {
    width: '100%',
    height: '360px',
    backgoundColor: '#FFF',
    fontFamily: 'Roboto'
  },
  primary: {
    fontSize: '12px',
    paddingBottom: '6px',
    color: '#000000',
    opacity: '0.54'
  },
  secondary: {
    fontSize: '16px',
    color: '#000000',
    opacity: '0.87'
  },
  contentSecondary: {
    fontSize: '14px',
    color: '#000000',
    opacity: '0.87'
  },
  listPadding: {
    paddingTop: '0px',
    paddingBottom: '2px',
    paddingLeft: '0px',
    marginBottom: '16px',
    width: '100%'
  },
  listLessonName: {
    paddingTop: '0px',
    paddingBottom: '2px',
    paddingLeft: '0px',
    marginBottom: '16px',
    borderBottom: '1px solid #000',
    width: '100%'
  },
  listLessonContent: {
    paddingTop: '0px',
    paddingBottom: '2px',
    paddingLeft: '0px',
    marginBottom: '16px',
    borderBottom: '1px solid #000',
    width: '100%'
  },
  listLessonStudent: {
    paddingTop: '0px',
    paddingBottom: '2px',
    paddingLeft: '0px',
    marginBottom: '16px',
    borderBottom: '1px solid #000',
    width: '100%'
  },
  listLessonTime: {
    paddingTop: '0px',
    paddingBottom: '2px',
    paddingLeft: '0px',
    marginBottom: '16px',
    borderBottom: '1px solid #000',
    width: '100%'
  },
  font: {
    fontSize: '18px',
    fontWeight: 'bold'
  }
})

class ModalContent extends Component {
  render() {
    const {
      classes,
      lesson,
      ...other
    } = this.props
    return (
      <div className={classes.root} {...other}>
        <List>
        <ListItem className={classes.listPadding}>
          <Typography className={classes.font}>授業詳細</Typography>
        </ListItem>
          <ListItem className={classes.listLessonName}>
            <ListItemText
              primary="科目名"
              secondary={lesson.name}
              classes={{
                primary: classes.primary,
                secondary: classes.secondary
              }}
            />
          </ListItem>
          <ListItem className={classes.listLessonContent}>
            <ListItemText
              primary="開講日"
              secondary={lesson.semester}
              classes={{
                primary: classes.primary,
                secondary: classes.secondary
              }}
            />
            <ListItemText
              primary="年次"
              secondary={lesson.year}
              classes={{
                primary: classes.primary,
                secondary: classes.secondary
              }}
            />
            <ListItemText
              primary="開講学部"
              secondary={lesson.department}
              classes={{
                primary: classes.primary,
                secondary: classes.secondary
              }}
            />
          </ListItem>
          <ListItem className={classes.listLessonStudent}>
            <ListItemText
              primary="単位数"
              secondary={lesson.unit}
              classes={{
                primary: classes.primary,
                secondary: classes.secondary
              }}
            />
            <ListItemText
              primary="教員名"
              secondary={lesson.teacher}
              classes={{
                primary: classes.primary,
                secondary: classes.secondary
              }}
            />
            <ListItemText
              primary="曜日"
              secondary={lesson.daily}
              classes={{
                primary: classes.primary,
                secondary: classes.secondary
              }}
            />
            <ListItemText
              primary="時限"
              secondary={lesson.time}
              classes={{
                primary: classes.primary,
                secondary: classes.secondary
              }}
            />
          </ListItem>
          <ListItem className={classes.listLessonName}>
            <ListItemText
              primary="授業概要"
              secondary={lesson.overview}
              classes={{
                primary: classes.primary,
                secondary: classes.contentSecondary
              }}
            />
          </ListItem>
          <ListItem className={classes.listLessonName}>
            <ListItemText
              primary="評価方法"
              secondary={lesson.evaluation}
              classes={{
                primary: classes.primary,
                secondary: classes.contentSecondary
              }}
            />
          </ListItem>
        </List>
      </div>
    )
  }
}

export default withStyles(styles)(ModalContent)
