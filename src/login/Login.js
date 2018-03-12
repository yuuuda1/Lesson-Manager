import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Typography from 'material-ui/Typography'
import Card, { CardActions } from 'material-ui/Card'
import Button from 'material-ui/Button'
import Header from 'app/Header'
import TextField from 'material-ui/TextField'
import { Link } from 'react-router-dom'

const styles = () => ({
  root: {
    fontSize: 'Roboto',
    backgroundColor: '#FAFAFA',
    position: 'absolute',
    zIndex: 1,
    height: '100%',
    width: '100%'
  },
  mainContent: {
    marginTop: '250px'
  },
  card: {
    position: 'relative',
    margin: 'auto',
    width: '400px',
    height: '400px'
  },
  cardTitle: {
    fontSize: '24px',
    textAlign: 'center',
    lineHeight: '64px',
    color: '#FFF'
  },
  cardContent: {
    height: '336px',
    width: '400px'
  },
  cardTop: {
    width: '400px',
    height: '64px',
    backgroundColor: '#00BCD4'
  },
  email: {
    position: 'absolute',
    top: '92px',
    left: '80px',
    width: '240px'
  },
  password: {
    position: 'absolute',
    top: '184px',
    left: '80px',
    width: '240px'
  },
  button: {
    position: 'absolute',
    top: '280px',
    left: '80px',
    color: '#FFF',
    backgroundColor: '#00BCD4',
    width: '240px',
    height: '45px',
    fontSize: '18px'
  },
  pageAll: {
    backgroundColor: '#FAFAFA',
    width: '100%',
    height: '100%'
  }
})

class LoginPage extends Component {
  state = {
    email: '',
    password: ''
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    })
  }

  handleLogin = () => {
    sessionStorage.removeItem('_lesson_manager_token')
    this.props.requestLogin(this.state.email, this.state.password)
  }

  render() {
    const {
      classes,
      requestLogin,
      ...other
    } = this.props
    return (
      <div className={classes.root} {...other}>
        <Header />
        <div className={classes.pageAll}>
          <div className={classes.mainContent}>
            <Card className={classes.card}>
              <div className={classes.cardTop}>

                <Typography className={classes.cardTitle}>
                    SIGN IN
                </Typography>
              </div>
              <CardActions className={classes.cardContent}>
                <TextField
                  className={classes.email}
                  id='email'
                  label='Email'
                  onChange={this.handleChange('email')}
                  type='input'
                />
                <TextField
                  autoComplete='current-password'
                  className={classes.password}
                  id='password'
                  label='Password'
                  onChange={this.handleChange('password')}
                  type='password'
                />
                <Link to='/lesson'>
                  <Button className={classes.button} onClick={this.handleLogin} variant='flat'>
                    LOGIN
                  </Button>
                </Link>
              </CardActions>
            </Card>
          </div>
        </div>
      </div>
    )
  }
}

LoginPage.propTypes = {
  classes : PropTypes.object.isRequired,
  requestLogin : PropTypes.func
}

export default withStyles(styles)(LoginPage)
