import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'
import Container from 'app/Container'
import TimeTable from 'app/lesson/pages/components/TimeTable'
import { Link } from 'react-router-dom'

const styles = () => ({
  root: {
    backgroundColor: '#FAFAFA',
    width: '100%',
    height: '100%'
  },
  title: {
    maxWidth: '1330px',
    marginLeft: '32px',
    marginTop: '24px',
    paddingBottom: '8px',
    borderBottom: '1px solid #000000',
    borderStyle: '0.54',
    fontWeight: 'bold',
    opacity: '0.54'
  },
  titleStyle: {
    height: '32px',
    display: 'inline-block',
    fontSize: '20px',
    paddingTop: '8px'
  },
  buttonStyle: {
    height: '36px',
    fontSize: '16px',
    display: 'inline-block',
    float: 'right'
  },
  userProfile: {
    maxWidth: '1330px'
  },
  userName: {
    display: 'inline',
    marginLeft: '32px',
    marginRight: '16px'
  },
  userAddress: {
    display: 'inline'
  }
})

class MyPage extends Component {
  componentDidMount() {
    this.props.requestMe()
    this.props.requestMyTimetable()
  }

  render() {
    const {
      classes,
      me,
      message,
      timetable,
      requestMe,
      requestMyTimetable,
      ...other
    } = this.props

    const userProfile = Object.keys(me).length !== 0 ? (
      <div className={classes.userProfile}>
        <Typography className={classes.userName}>
          名前：
          {''}
          {me.name}
        </Typography>
        <Typography className={classes.userAddress}>
          メールアドレス：
          {''}
          {me.email}
        </Typography>
      </div>
    ) : <div />

    const timetableComponent = Object.keys(timetable).length === 0 ? (
      <Typography>
        時間割はありません
      </Typography>) : <TimeTable timetable={timetable} />

    return (
      <div className={classes.root} {...other}>
        <Container>
          <div className={classes.title}>
            <Typography>
              {message}
            </Typography>
            <Typography variant='title' className={classes.titleStyle}>
              マイページ
            </Typography>
            <Link to='/users/edit'>
              <Button className={classes.buttonStyle} color='defalut'>
                編集
              </Button>
            </Link>
          </div>
          {userProfile}
          <div>
            {timetableComponent}
          </div>
        </Container>
      </div>
    )
  }
}

MyPage.propTypes = {
  classes : PropTypes.object.isRequired,
  match : PropTypes.object,
  me : PropTypes.object,
  message : PropTypes.string,
  requestMe : PropTypes.func,
  requestMyTimetable : PropTypes.func,
  timetable : PropTypes.object
}

export default withStyles(styles)(MyPage)
