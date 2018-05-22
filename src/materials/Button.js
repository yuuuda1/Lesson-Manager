import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import { Link } from 'react-router-dom'
import MuiButton from 'material-ui/Button'
import { withStyles } from 'material-ui/styles'
import { fade } from 'material-ui/styles/colorManipulator'

const styles = theme => ({
  error: {
    color: theme.palette.error.contrastText,
    backgroundColor: theme.palette.error.main,
    '&:hover': {
      backgroundColor: theme.palette.error.dark,
      // Reset on mouse devices
      '@media (hover: none)': {
        backgroundColor: theme.palette.error.main
      }
    }
  },
  flatError: {
    color: theme.palette.error.main,
    '&:hover': {
      backgroundColor: fade(theme.palette.error.main, 0.12),
      // Reset on mouse devices
      '@media (hover: none)': {
        backgroundColor: 'transparent'
      }
    }
  },
  circle: {
    borderRadius: '50%',
    padding: 0,
    minWidth: 0,
    width: 56,
    fontSize: 24,
    height: 56
  }
})

const Button = props => {
  const {
    classes,
    children,
    color,
    className: classNameProp,
    to,
    variant: variantProp,
    ...other
  } = props

  const fab = variantProp === 'fab'
  const raised = variantProp === 'raised'
  const flat = !raised && !fab
  const circle = variantProp === 'circle'

  const className = classNames(
    {
      [classes.error]: !flat && color === 'error',
      [classes.flatError]: flat && color === 'error',
      [classes.circle]: circle
    },
    classNameProp
  )

  const variant = variantProp === 'circle' ? 'flat' : variantProp
  let Component
  if (to) {
    Component = Link
  }

  return (
    <MuiButton
      className={className}
      color={(color === 'error') ? 'inherit' : color}
      component={Component}
      to={to}
      variant={variant}
      {...other}
    >
      {children}
    </MuiButton>
  )
}

Button.propTypes = {
  /**
   * The content of the button.
   */
  children: PropTypes.node.isRequired,

  /**
   * Useful to extend the style applied to components.
   */
  classes: PropTypes.object.isRequired,

  /**
   * @ignore
   */
  className: PropTypes.string,

  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: PropTypes.oneOf(['default', 'primary', 'secondary', 'inherit', 'error']),

  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   * The default value is a `button`.
   */
  component: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),

  /**
   * If `true`, the button will be disabled.
   */
  disabled: PropTypes.bool,

  /**
   * If `true`, the  keyboard focus ripple will be disabled.
   * `disableRipple` must also be true.
   */
  disableFocusRipple: PropTypes.bool,

  /**
   * If `true`, the ripple effect will be disabled.
   */
  disableRipple: PropTypes.bool,

  /**
   * If `true`, the button will take up the full width of its container.
   */
  fullWidth: PropTypes.bool,

  /**
   * If `true`, and `variant` is `'fab'`, will use mini floating action button styling.
   */
  mini: PropTypes.bool,

  /**
   * The size of the button.
   * `small` is equivalent to the dense button styling.
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),

  /**
   * Screen transition location link.
   */
  to: PropTypes.string,

  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  variant: PropTypes.oneOf(['flat', 'raised', 'fab', 'circle'])
}

Button.defaultProps = {
  color: 'default',
  disabled: false,
  disableFocusRipple: false,
  fullWidth: false,
  mini: false,
  size: 'medium',
  variant: 'flat'
}

export default withStyles(styles)(Button)
