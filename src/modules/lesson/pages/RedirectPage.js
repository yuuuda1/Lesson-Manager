import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Typography from 'material-ui/Typography'
import Container from 'app/foundation/components/Container'
import { Link } from 'react-router-dom'
import Button from 'material-ui/Button'

const styles = () => ({
  root: {
    backgroundColor: '#FAFAFA',
    position: 'absolute',
    top: '0px',
    left: '0px',
    width: '100%',
    height: '100vh'
  },
  getButton: {
    color: '#00BCD4',
    fontSize: '18px',
    marginTop: '32px',
    position: 'absolute',
    buttom: '64px'
  },
  title: {
    marginLeft: '32px',
    marginTop: '32px',
    paddingBottom: '8px',
    borderBottom: '1px solid #000000',
    borderStyle: '0.54',
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#000000',
    opacity: '0.54'
  }
})

const RedirectPage = ({ classes, message, ...other }) => (
  <div className={classes.root} {...other}>
    <Container>
      <div className={classes.title}>
        <Typography variant='title'>
          {message}
        </Typography>
      </div>
      <div>
        <Link to='/lesson'>
          <Button className={classes.getButton}>
            トップページへ
          </Button>
        </Link>
      </div>
    </Container>
  </div>
)

RedirectPage.propTypes = {
  classes : PropTypes.object.isRequired,
  message : PropTypes.string
}

export default withStyles(styles)(RedirectPage)
