import React from 'react'
import PropTypes from 'prop-types'
import { Route as ReactRoute, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

// TODO: redirect時にwarningがでるのを修正
const Route = props => {
  const {
    redirectUri,
    isAuthenticated: isAuthenticatedProp,
    notAuth,
    path,
    ...other
  } = props

  const isAuthenticated = notAuth ? true : isAuthenticatedProp

  if (isAuthenticated) {
    return (<ReactRoute {...other} />)
  }

  return (
    <ReactRoute
      render={redirectProps => (
        <Redirect
          to={{
            pathname: redirectUri,
            state: { from: redirectProps.location }
          }}
        />
      )}
    />
  )
}

Route.propTypes = {
  component: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  isAuthenticated: PropTypes.bool,
  notAuth: PropTypes.bool,
  path: PropTypes.string,
  redirectUri: PropTypes.string
}

Route.defaultProps = {
  redirectUri: '/login',
  isAuthenticated: false
}

export default connect(state => ({
  isAuthenticated: state.authReducer.isAuthenticated
}))(Route)
