import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Typography from 'material-ui/Typography'
import Card, { CardActions, CardContent } from 'material-ui/Card'
import Button from 'material-ui/Button'
import Header from '../Header'
import TextField from 'material-ui/TextField'

const marginTop = 250

const styles = () => ({
  root: {
    fontSize: 'Roboto',
    backgroundColor: '#FAFAFA',
    position: 'absolute',
    top: '0px',
    left: '0px',
    height: '100%',
    width: '100%',
  },
  mainContent: {
    marginTop: 'marginTop',
  },
  card: {
    position: 'relative',
    margin: 'auto',
    top: '120px',
    width: '400px',
    height: '480px',
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
  name: {
    position: 'absolute',
    top: '92px',
    left: '80px',
    width: '240px',
  },
  email: {
    position: 'absolute',
    top: '172px',
    left: '80px',
    width: '240px',
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
    fontSize: '18px',
  }
})

class SignUp extends Component {
  render() {
    const {
      classes,
      ...other
    } = this.props
    return(
      <div className={classes.root} {...other}>
        <Header />
        <div className={classes.pageAll}>
          <Card className={classes.card}>
            <div className={classes.cardTop}>
              <Typography className={classes.cardTitle}>Create New Account</Typography>
            </div>
            <CardActions className={classes.cardContent}>
              <TextField className={classes.name}
                id="name"
                label="Name"
                type="input"
              />
              <TextField className={classes.email}
                id="email"
                label="Email"
                type="input"
              />
              <TextField className={classes.password}
                id="password"
                label="Password"
                type="password"
                autoComplete="current-password"
              />
              <Button variant="flat" className={classes.button}>SIGN UP</Button>
            </CardActions>
          </Card>
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(SignUp)
