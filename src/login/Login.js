import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Typography from 'material-ui/Typography'
import Card, { CardActions } from 'material-ui/Card'
import Button from 'material-ui/Button'
import Header from 'app/Header'
import TextField from 'material-ui/TextField'

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
    margin: 'auto',
    width: '30%',
    height: '30%'
  },
  cardTitle: {
    fontSize: '24px',
    textAlign: 'center',
    lineHeight: '64px',
    color: '#FFF',
    width: '100%'
  },
  cardContent: {
    display: 'inline-block',
    textAlign: 'center',
    width: '100%'
  },
  cardTop: {
    width: '100%',
    height: '64px',
    backgroundColor: '#00BCD4'
  },
  error: {
    margin: '8px',
    width: '100%'
  },
  email: {
    marginTop: '20px',
    width: '100%'
  },
  password: {
    marginTop: '60px',
    width: '100%'
  },
  button: {
    marginTop: '20px',
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
      errorMessage,
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
                <div className={classes.error}>
                  <Typography>
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
  errorMessage : PropTypes.string,
  requestLogin : PropTypes.func
}

export default withStyles(styles)(LoginPage)
