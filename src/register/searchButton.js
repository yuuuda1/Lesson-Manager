import React, {Component} from 'react'
import {withStyles} from 'material-ui/styles'
import PropTypes from 'prop-types'
import MenuItem from 'material-ui/Menu/MenuItem'
import TextField from 'material-ui/TextField'
import Card, {CardContent, CardActions} from 'material-ui/Card'
import SearchIcon from 'material-ui-icons/Search'
import IconButton from 'material-ui/IconButton'

const styles = () => ({
  card: {
    width: '400px',
    height: '32px',
  },
  Content:{
    width: '400px',
    height: '32px',
  },
  searchButton: {
    width: '400px',
    position: 'relative',
    top: '-8px',
    maxWidth: 'true',
  },
  search: {
    marginLeft: '-24px',
    position: 'relative',
    left: '16px',
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
    return(
      <div className={classes.root} {...other}>
        <div className={classes.button}>
          <Card className={classes.card}>
            <CardActions className={classes.Content}
              classes={{
                paddingTop: classes.cardContentPadding
              }}
            >
              <TextField className={classes.searchButton}
                onChange={this.handleChange()}
                id="search"
                label="Search"
                type="input"
                fullWidth={true}
                SelectProps
                
              />
              <IconButton onClick={onClick} className={classes.search}>
                <SearchIcon />
              </IconButton>
            </CardActions>
          </Card>
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(SearchButton)
