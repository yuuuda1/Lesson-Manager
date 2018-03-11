import React, { Component } from 'react'
import { withStyles } from 'material-ui/styles'
import PropTypes from 'prop-types'
import TextField from 'material-ui/TextField'
import Card, { CardActions } from 'material-ui/Card'
import SearchIcon from 'material-ui-icons/Search'
import IconButton from 'material-ui/IconButton'

const styles = () => ({
  card: {
    width: '400px',
    height: '32px'
  },
  Content:{
    width: '400px',
    height: '32px'
  },
  searchButton: {
    width: '400px',
    position: 'relative',
    top: '-8px',
    maxWidth: 'true'
  },
  search: {
    marginLeft: '-24px',
    position: 'relative',
    left: '16px'
  }

})

class SearchButton extends Component {
  handleChange = () => event => {
    this.props.onChangeValue(event.target.value)
  }

  render() {
    const {
      classes,
      onChangeValue,
      onClick,
      ...other
    } = this.props
    return (
      <div className={classes.root} {...other}>
        <div className={classes.button}>
          <Card className={classes.card}>
            <CardActions
              classes={{
                paddingTop: classes.cardContentPadding
              }}
              className={classes.Content}
            >
              <TextField
                fullWidth
                SelectProps
                className={classes.searchButton}
                id='search'
                label='Search'
                onChange={this.handleChange()}
                type='input'

              />
              <IconButton className={classes.search} onClick={onClick}>
                <SearchIcon />
              </IconButton>
            </CardActions>
          </Card>
        </div>
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
