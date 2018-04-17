import React, { Component } from 'react'
import { withStyles } from 'material-ui/styles'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import TextField from 'material-ui/TextField'
import Paper from 'material-ui/Paper'
import SearchIcon from 'material-ui-icons/Search'
import IconButton from 'material-ui/IconButton'

const styles = () => ({
  root: {
    width: '400px',
    height: '32px',
    position: 'relative',
    top: '19px'
  },
  paper: {
    width: '400px',
    height: '32px',
  },
  textField: {
    marginLeft: '1%',
    width: '89%',
    position: 'relative',
    top: '-16px',
  },
  iconButton: {
    width: '10%',
    position: 'relative',
    top: '-20px'
  }
})

class SearchButton extends Component {
  render() {
    const {
      classes,
      onChangeValue,
      onClick,
      className: classNameProp,
      ...other
    } = this.props

    const className = classNames(classes.root,classNameProp)

    return(
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
          <IconButton className={classes.iconButton} onClick={onClick}>
            <SearchIcon/>
          </IconButton>
        </Paper>
      </div>
    )
  }
}

SearchButton.propTypes = {
  classes : PropTypes.object.isRequired,
  onChangeValue : PropTypes.func,
  onClick : PropTypes.func
}

export default withStyles(styles)(SearchButton)
