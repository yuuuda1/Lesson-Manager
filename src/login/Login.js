import React, { Component } from 'react'
import { withStyles } from 'material-ui/styles'
import PropTypes from 'prop-types'
import Typography from 'material-ui/Typography'
import Card, { CardActions } from 'material-ui/Card'
import Button from 'material-ui/Button'
import TextField from 'material-ui/TextField'
import { Link } from 'react-router-dom'
import Header from 'app/Header'

const styles = () => ({
  root: {
    backgroundColor: '#FAFAFA',
    height: '100vh',
    width: '100%'
  },
  header: {
    marginBottom: '160px'
  },
  card: {
    margin: 'auto',
    width: '320px',
    height: '360px'
  },
  cardHeader: {
    width: '100%',
    height: '56px',
    backgroundColor: '#00BCD4',
    marginBottom: '8px'
  },
  cardTitle: {
    fontSize: '20px',
    textAlign: 'center',
    lineHeight: '56px',
    color: '#FFF',
    width: '100%'
  },
  cardContent: {
    display: 'inline-block',
    textAlign: 'center',
    width: '100%',
    padding: '0px'
  },
  error: {
    margin: 'auto',
    width: '240px',
    height: '34px',
    textAlign: 'left'
  },
  errorFont: {
    fontSize: '12px'
  },
  email: {
    marginTop: '0px',
    marginLeft: '0px',
    width: '100%'
  },
  password: {
    marginTop: '20px',
    marginLeft: '0px',
    marginBottom: '40px',
    width: '100%'
  },
  button: {
    margin: 'auto',
    color: '#FFF',
    backgroundColor: '#00BCD4',
    width: '218px',
    height: '40px',
    fontSize: '16px'
  },
  announce: {
    width: '218px',
    marginTop: '4px',
    marginLeft: '47px',
    fontSize: '12px',
    color: '#000',
    opacity: '0.38'
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
      errorMessage,
      requestLogin,
      ...other
    } = this.props
    return (
      <div className={classes.root} {...other}>
        <Header className={classes.header} />
        <Card className={classes.card}>
          <div className={classes.cardHeader}>
            <Typography className={classes.cardTitle}>
              SIGN IN
            </Typography>
          </div>
          <CardActions className={classes.cardContent}>
            <div className={classes.error}>
              <Typography className={classes.errorFont} color='error'>
                {errorMessage}
              </Typography>
            </div>
            <div className={classes.email}>
              <TextField
                id='email'
                label='Email'
                onChange={this.handleChange('email')}
                type='input'
              />
            </div>
            <div className={classes.password}>
              <TextField
                autoComplete='current-password'
                id='password'
                label='Password'
                onChange={this.handleChange('password')}
                type='password'
              />
            </div>
            <Button className={classes.button} onClick={this.handleLogin} variant='flat'>
              LOGIN
            </Button>
            <Link to='/signup'>
              <Typography align='left' className={classes.announce}>
                Do&rsquo;nt have account? Sign up now!!
              </Typography>
            </Link>
          </CardActions>
        </Card>
      </div>
    )
  }
}

LoginPage.propTypes = {
  classes : PropTypes.object.isRequired,
  errorMessage : PropTypes.string,
  requestLogin : PropTypes.func
}

export default withStyles(styles)(LoginPage)
