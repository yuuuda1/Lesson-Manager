import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Typography from 'material-ui/Typography'
import Card, { CardActions } from 'material-ui/Card'
import Button from 'material-ui/Button'
import Container from 'app/Container'
import TextField from 'material-ui/TextField'

const styles = () => ({
  root: {
    fontSize: 'Roboto',
    backgroundColor: '#FAFAFA',
    position: 'absolute',
    top: '0px',
    left: '0px',
    height: '100%',
    width: '100%'
  },
  mainContent: {
    marginTop: 'marginTop'
  },
  card: {
    position: 'relative',
    margin: 'auto',
    top: '120px',
    width: '400px',
    height: '480px'
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
  name: {
    position: 'absolute',
    top: '92px',
    left: '80px',
    width: '240px'
  },
  email: {
    position: 'absolute',
    top: '172px',
    left: '80px',
    width: '240px'
  },
  password: {
    position: 'absolute',
    top: '252px',
    left: '80px',
    width: '240px'
  },
  button: {
    position: 'absolute',
    top: '360px',
    left: '80px',
    color: '#FFF',
    backgroundColor: '#00BCD4',
    width: '240px',
    height: '45px',
    fontSize: '18px'
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
        <Container>
          <div className={classes.pageAll}>
            <Card className={classes.card}>
              <div className={classes.cardTop}>
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
        </Container>
      </div>
    )
  }
}

SignUp.propTypes = {
  classes : PropTypes.object.isRequired
}

export default withStyles(styles)(SignUp)
