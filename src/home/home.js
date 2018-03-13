import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'
import { Link } from 'react-router-dom'

const styles = () => ({
  root: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: '0px',
    left: '0px',
    fontFamily: 'Roboto'
  },
  titleBox: {
    width: '100%',
    height: '240px',
    backgroundColor: '#00BCD4',
    paddingTop: '200px'
  },
  subTitleBox: {
    width: '100%',
    height: '240px',
    paddingTop: '80px',
    backgroundColor: '#FAFAFA'
  },
  projectName: {
    textAlign: 'center',
    fontSize: '56px',
    fontWeight: 'bold',
    color: '#FFF'
  },
  projectContent: {
    textAlign: 'center',
    fontSize: '34px',
    fontWeight: 'Regular',
    marginTop: '0px',
    color: '#000000',
    opacity: '0.38'
  },
  guessTitle: {
    textAlign: 'center',
    fontSize: '45px',
    color: '#000000',
    opacity: '0.54'
  },
  buttons: {
    width: '360px',
    position: 'relative',
    margin: 'auto',
    marginTop: '40px',
    color: '#FFF'
  },
  registerButton: {
    width: '160px',
    height: '45px',
    textAlign: 'center',
    marginRight: '40px',
    color: '#FFF',
    backgroundColor: '#00BCD4'
  },
  loginButton: {
    width: '160px',
    height: '45px',
    textAlign: 'center',
    color: '#FFF',
    backgroundColor: '#00BCD4'
  }
})

const Home = ({ classes, ...other }) => (
  <div className={classes.root} {...other}>
    <div className={classes.titleBox}>
      <Typography className={classes.projectName}>
          Lesson-Manager
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
