import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'
import { Link } from 'react-router-dom'

const styles = () => ({
  root: {
    fontFamily: 'Roboto',
    width: '100%',
    height: '100%',
  },
  titleBox: {
    width: '100%',
    height: 'calc(55vh - 240px)',
    backgroundColor: '#00BCD4',
    paddingTop: '240px',
  },
  subTitleBox: {
    width: '100%',
    height: 'calc(45vh - 64px)',
    backgroundColor: '#FAFAFA',
    paddingTop: '64px'
  },
  projectName: {
    textAlign: 'center',
    fontSize: '24px',
    fontFamily: 'Roboto',
    fontWeight: 'Regular',
    color: '#FFF',
    marginBottom: '24px'
  },
  projectContent: {
    textAlign: 'center',
    fontSize: '20px',
    fontFamily: 'Roboto',
    fontWeight: 'Regular',
    marginTop: '0px',
    color: '#000000',
    opacity: '0.38'
  },
  guessTitle: {
    textAlign: 'center',
    fontSize: '20px',
    fontFamily: 'Roboto',
    fontWeight: 'Regular',
    color: '#000000',
    opacity: '0.54'
  },
  buttons: {
    width: '204px',
    position: 'relative',
    margin: 'auto',
    marginTop: '32px',
    color: '#FFF'
  },
  registerButton: {
    width: '90px',
    height: '36px',
    textAlign: 'center',
    marginRight: '24px',
    color: '#FFF',
    backgroundColor: '#00BCD4'
  },
  loginButton: {
    width: '90px',
    height: '36px',
    textAlign: 'center',
    color: '#FFF',
    backgroundColor: '#00BCD4'
  }
})

const Home = ({ classes, ...other }) => (
  <div className={classes.root} {...other}>
    <div className={classes.titleBox}>
      <Typography className={classes.projectName}>
        Lesson Manager
      </Typography>
      <Typography className={classes.projectContent}>
        This application can manage your timetable
      </Typography>
    </div>
    <div className={classes.subTitleBox}>
      <Typography className={classes.guessTitle}>
        Let&rsquo;s start manage!!
      </Typography>
      <div className={classes.buttons}>
        <Link to='/signup'>
          <Button className={classes.registerButton}>
            SIGN UP
          </Button>
        </Link>
        <Link to='/login'>
          <Button className={classes.loginButton}>
            LOGIN
          </Button>
        </Link>
      </div>
    </div>
  </div>
)

Home.propTypes = {
  classes: PropTypes.object.isRequired
}
export default withStyles(styles)(Home)
