import React from 'react'
import { withStyles } from 'material-ui/styles'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import TextField from 'material-ui/TextField'
import Paper from 'material-ui/Paper'

const styles = () => ({
  root: {
    height: '32px',
    paddingTop: '19px'
  },
  paper: {
    height: '32px'
  },
  textField: {
    marginLeft: '1%',
    width: '99%',
    position: 'relative',
    top: '-16px'
  }
})

const SearchTextField = props => {
  const {
    classes,
    onChangeValue,
    onClick,
    className: classNameProp,
    ...other
  } = props

  const className = classNames(classes.root, classNameProp)

  return (
    <div className={className} {...other}>
      <Paper className={classes.paper}>
        <TextField
          fullWidth
          SelectProps
          className={classes.textField}
          id='search'
          label='Search'
          onChange={onChangeValue}
          type='input'
        />
      </Paper>
    </div>
  )
}

SearchTextField.propTypes = {
  classes : PropTypes.object.isRequired,
  className : PropTypes.string,
  onChangeValue : PropTypes.func,
  onClick : PropTypes.func
}

export default withStyles(styles)(SearchTextField)
