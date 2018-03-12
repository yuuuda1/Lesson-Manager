import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Typography from 'material-ui/Typography'
import Container from 'app/Container'
import TimeTable from 'app/lesson/pages/components/TimeTable'
import { Link } from 'react-router-dom'

const styles = () => ({
  root: {
    backgroundColor: '#FAFAFA',
    position: 'absolute',
    top: '0px',
    left: '0px',
    width: '100%',
    height: '100vh'
  },
  title: {
    marginLeft: '32px',
    marginTop: '32px',
    paddingBottom: '8px',
    borderBottom: '1px solid #000000',
    borderStyle: '0.54',
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#000000',
    opacity: '0.54'
  },
  universal: {
    marginBottom: '8px'
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
      timetable,
      requestMe,
      requestMyTimetable,
      ...other
    } = this.props

    const userProfile = Object.keys(me).length !== 0 ? (
      <div>
        <Typography>
          名前:
          {' '}
          {me.name}
        </Typography>
        <Typography>
          メールアドレス:
          {' '}
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
            <Typography variant='title'>
              マイページ
            </Typography>
            <Link to='/users/edit'>
              <Typography>
                編集する
              </Typography>
            </Link>
          </div>
          {userProfile}
          <div className={classes.title}>
            <Typography variant='title'>
              MY時間割
            </Typography>
          </div>
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
  requestMe : PropTypes.func,
  requestMyTimetable : PropTypes.func,
  timetable : PropTypes.object
}

export default withStyles(styles)(MyPage)
