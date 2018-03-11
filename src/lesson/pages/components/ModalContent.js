import React from 'react'
import PropTypes from 'prop-types'
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

const ModalContent = ({ classes, lesson, ...other }) => (
  <div className={classes.root} {...other}>
    <List>
      <ListItem className={classes.listPadding}>
        <Typography className={classes.font}>
              授業詳細
        </Typography>
      </ListItem>
      <ListItem className={classes.listLessonName}>
        <ListItemText
          classes={{
            primary: classes.primary,
            secondary: classes.secondary
          }}
          primary='科目名'
          secondary={lesson.name}
        />
      </ListItem>
      <ListItem className={classes.listLessonContent}>
        <ListItemText
          classes={{
            primary: classes.primary,
            secondary: classes.secondary
          }}
          primary='開講日'
          secondary={lesson.term}
        />
        <ListItemText
          classes={{
            primary: classes.primary,
            secondary: classes.secondary
          }}
          primary='年次'
          secondary={`${lesson.grade}年次`}
        />
        <ListItemText
          classes={{
            primary: classes.primary,
            secondary: classes.secondary
          }}
          primary='開講学部'
          secondary={lesson.department}
        />
      </ListItem>
      <ListItem className={classes.listLessonStudent}>
        <ListItemText
          classes={{
            primary: classes.primary,
            secondary: classes.secondary
          }}
          primary='単位数'
          secondary={`${lesson.unit}単位`}
        />
        <ListItemText
          classes={{
            primary: classes.primary,
            secondary: classes.secondary
          }}
          primary='教員名'
          secondary={lesson.teacher_name}
        />
        <ListItemText
          classes={{
            primary: classes.primary,
            secondary: classes.secondary
          }}
          primary='曜日'
          secondary={lesson.daily}
        />
        <ListItemText
          classes={{
            primary: classes.primary,
            secondary: classes.secondary
          }}
          primary='時限'
          secondary={lesson.time}
        />
      </ListItem>
      <ListItem className={classes.listLessonName}>
        <ListItemText
          classes={{
            primary: classes.primary,
            secondary: classes.contentSecondary
          }}
          primary='授業概要'
          secondary={lesson.outline}
        />
      </ListItem>
      <ListItem className={classes.listLessonName}>
        <ListItemText
          classes={{
            primary: classes.primary,
            secondary: classes.contentSecondary
          }}
          primary='評価方法'
          secondary={lesson.evaluation}
        />
      </ListItem>
    </List>
  </div>
)

ModalContent.propTypes = {
  classes : PropTypes.object.isRequired,
  lesson : PropTypes.object
}

export default withStyles(styles)(ModalContent)
