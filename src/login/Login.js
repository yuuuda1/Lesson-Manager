/* eslint no-undef: off */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Typography from 'material-ui/Typography'
import Card, { CardActions, CardContent } from 'material-ui/Card'
import Button from 'material-ui/Button'
import Header from '../Header'
import TextField from 'material-ui/TextField'
import { Link } from 'react-router-dom';

const styles = () => ({
  root: {
    fontSize: 'Roboto',
    backgroundColor: '#FAFAFA',
    position: 'absolute',
    zIndex: 1,
    height: '100%',
    width: '100%',

      
  },
  mainContent: {
    marginTop: '250px',
  },
  card: {
    position: 'relative',
    margin: 'auto',
    width: '400px',
    height: '400px',
  },
  cardTitle: {
    fontSize: '24px',
    textAlign: 'center',
    lineHeight: '64px',
    color: '#FFF',
  },
  cardContent: {
    height: '336px',
    width: '400px',
  },  
  cardTop: {
    width: '400px',
    height: '64px',
    backgroundColor: '#00BCD4',
  },
  email: {
    position: 'absolute',
    top: '92px',
    left: '80px',
    width: '240px',
  },
  password: {
    position: 'absolute',
    top: '184px',
    left: '80px',
    width: '240px',
  },
  button: {
    position: 'absolute',
    top: '280px',
    left: '80px',
    color: '#FFF',
    backgroundColor: '#00BCD4',
    width: '240px',
    height: '45px',
    fontSize: '18px',
  },
  pageAll: {
    backgroundColor: '#FAFAFA',
    width: '100%',
    height: '100%',
  }
    
})

class Login extends Component {
  state = {
    email: '',
    password: ''
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    })
  }

  loginUser = () => {
    sessionStorage.removeItem('_lesson_manager_token')
    this.props.requestLogin(this.state.email, this.state.password)
  }

  render() {
    const {
      classes,
      ...other
    } = this.props
    return(
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
                <TextField className={classes.email}
                  onChange={this.handleChange('email')}
                  id="email"
                  label="Email"
                  type="input"
                />
                <TextField className={classes.password}
                  onChange={this.handleChange('password')}
                  id="password"
                  label="Password"
                  type="password"
                  autoComplete="current-password"
                />
                <Link to='../register'>
                  <Button onClick={this.loginUser} variant="flat" className={classes.button}>
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

export default withStyles(styles)(Login)   
