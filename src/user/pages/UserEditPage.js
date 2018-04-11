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
    // ここでユーザー情報を更新します
    // this.props.requestPutMe(this.state.name, this.state.email, this.state.password)
  }

  render() {
    const {
      classes,
      me,
      requestPutMe,
      ...other
    } = this.props
    return (
      <div className={classes.root} {...other}>
        <Container>
          <div className={classes.pageAll}>
            <Card className={classes.card}>
              <div className={classes.cardTop}>
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
                  編集する
                </Button>
              </CardActions>
            </Card>
          </div>
        </Container>
      </div>
    )
  }
}

UserEditPage.propTypes = {
  classes : PropTypes.object.isRequired,
  me : PropTypes.object,
  requestPutMe : PropTypes.func
}

export default withStyles(styles)(UserEditPage)
