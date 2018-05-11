import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Typography from 'material-ui/Typography'
import Card, { CardActions } from 'material-ui/Card'
import Button from 'material-ui/Button'
import Container from 'app/foundation/components/Container'
import TextField from 'material-ui/TextField'
import { Link } from 'react-router-dom'

const styles = () => ({
  root: {
    fontSize: 'Roboto',
    backgroundColor: '#FAFAFA',
    height: '100%',
    width: '100%'
  },
  container: {
    padding: '20% 30%'
  },
  message: {
    height: '64px',
    lineHeight: '64px',
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#000000',
    opacity: '0.54'
  },
  card: {
    width: '80%',
    height: '360px'
  },
  cardHeader: {
    width: '100%',
    height: '56px',
    backgroundColor: '#00BCD4',
    marginBottom: '8px'
  },
  cardTitle: {
    width: '100%',
    fontSize: '20px',
    textAlign: 'center',
    lineHeight: '56px',
    color: '#FFF'
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
  },
  backButton: {
    marginTop: '30px',
    color: '#FFF',
    backgroundColor: '#00BCD4',
    width: '80%',
    height: '40px',
    fontSize: '16px'
  }
})

class UserEditPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: this.props.me.name,
      email: this.props.me.email,
      password: ''
    }
  }

  componentDidMount() {
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    })
  }

  handleUpdateUser = () => {
    this.props.requestPutMe(this.state.name, this.state.email, this.state.password)
  }

  render() {
    const {
      classes,
      me,
      message,
      requestPutMe,
      ...other
    } = this.props
    return (
      <div className={classes.root} {...other}>
        <Container>
          <div className={classes.container}>
            <Typography className={classes.message}>
              {message}
            </Typography>
            <Card className={classes.card}>
              <div className={classes.cardHeader}>
                <Typography className={classes.cardTitle}>
                    My Account
                </Typography>
              </div>
              <CardActions className={classes.cardContent}>
                <TextField
                  className={classes.name}
                  defaultValue={me.name}
                  id='name'
                  label='Name'
                  onChange={this.handleChange('name')}
                  type='input'
                />
                <TextField
                  className={classes.email}
                  defaultValue={me.email}
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
                <Button className={classes.button} onClick={this.handleUpdateUser} variant='flat'>
                  編集
                </Button>
              </CardActions>
            </Card>
            <Link to='/users/me'>
              <Button className={classes.backButton} variant='flat'>
                戻る
              </Button>
            </Link>
          </div>
        </Container>
      </div>
    )
  }
}

UserEditPage.propTypes = {
  classes : PropTypes.object.isRequired,
  me : PropTypes.object,
  message : PropTypes.string,
  requestPutMe : PropTypes.func
}

export default withStyles(styles)(UserEditPage)
