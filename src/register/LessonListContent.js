import React, { Component } from 'react'
import { withStyles } from 'material-ui/styles'
import List, { ListItem, ListItemText } from 'material-ui/List'


const styles = theme => ({
  root: {
    width: '1000px'
  },
  textPrimary: {
    fontSize: '14px',
  },
  secondary: {
    fontSize: '16px',
    color: '#000'
  }
})

class LessonListContent extends Component {
  render() {
    const {
      classes,
      ...other
    } = this.props
    return(
      <div className={classes.root} {...other}>
        <List>
          <ListItem>
            <ListItemText
              primary="開講日"
              secondary="秋学期"
              classes={{
                primary: classes.textPrimary,
                secondary: classes.secondary
              }}
            />
            <ListItemText
              primary="対象学部"
              secondary="コンピュータ理工学部"
              classes={{
                primary: classes.textPrimary,
                secondary: classes.secondary
              }}
            />
            <ListItemText
              primary="年次"
              secondary="２年"
              classes={{
                primary: classes.textPrimary,
                secondary: classes.secondary
              }}
            />
            <ListItemText
              primary="単位数"
              secondary="2単位"
              classes={{
                primary: classes.textPrimary,
                secondary: classes.secondary
              }}
            />
            <ListItemText
              primary="教員名"
              secondary="田中権五郎"
              classes={{
                primary: classes.textPrimary,
                secondary: classes.secondary
              }}
            />
            <ListItemText
              primary="曜日"
              secondary="火曜日"
              classes={{
                primary: classes.textPrimary,
                secondary: classes.secondary
              }}
            />
            <ListItemText
              primary="時限"
              secondary="2時間"
              classes={{
                primary: classes.textPrimary,
                secondary: classes.secondary
              }}
            />
            <ListItemText
              primary="評価方法"
              secondary="評価方法は。。。"
              classes={{
                primary: classes.textPrimary,
                secondary: classes.secondary
              }}
            />
          </ListItem>
          <ListItemText
            primary="概要"
            secondary="本授業は。。。。"
            classes={{
              primary: classes.textPrimary,
              secondary: classes.secondary
            }}
          />
        </List>
      </div>
    )
  }
}

export default withStyles(styles)(LessonListContent)
