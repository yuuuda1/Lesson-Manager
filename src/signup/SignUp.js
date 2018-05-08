import React, { Component } from 'react'
import { withStyles } from 'material-ui/styles'
import PropTypes from 'prop-types'
import Typography from 'material-ui/Typography'
import Card, { CardActions } from 'material-ui/Card'
import Button from 'material-ui/Button'
import TextField from 'material-ui/TextField'
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
  name: {
    marginTop: '0px',
    marginLeft: '0px',
    width: '68%'
  },
  email: {
    marginTop: '20px',
    marginLeft: '0px',
    width: '68%'
  },
  password: {
    marginTop: '20px',
    marginLeft: '0px',
    marginBottom: '40px',
    width: '68%'
  },
  button: {
    margin: 'auto',
    color: '#FFF',
    backgroundColor: '#00BCD4',
    width: '218px',
    height: '40px',
    fontSize: '16px'
  }
})

class SignUp extends Component {
  state = {
    name: '',
    email: '',
    password: ''
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    })
  }

  handleCreateUser = () => {
    axios.post('api/create', { name:this.state.name, email:this.state.email, password:this.state.password })
  }

  render() {
    const {
      classes,
      ...other
    } = this.props
    return (
      <div className={classes.root} {...other}>
        <Header className={classes.header} />
        <Card className={classes.card}>
          <div className={classes.cardHeader}>
            <Typography className={classes.cardTitle}>
              Create New Account
            </Typography>
          </div>
          <CardActions className={classes.cardContent}>
            <TextField
              className={classes.name}
              id='name'
              label='Name'
              onChange={this.handleChange('name')}
              type='input'
            />
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
            <Button className={classes.button} onClick={this.handleCreateUser} variant='flat'>
              SIGN UP
            </Button>
          </CardActions>
        </Card>
      </div>
    )
  }
}

SignUp.propTypes = {
  classes : PropTypes.object.isRequired
}

export default withStyles(styles)(SignUp)
