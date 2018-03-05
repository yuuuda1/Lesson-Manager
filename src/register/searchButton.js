import React, {Component} from 'react'
import {withStyles} from 'material-ui/styles'
import PropTypes from 'prop-types'
import MenuItem from 'material-ui/Menu/MenuItem'
import TextField from 'material-ui/TextField'
import Card, {CardContent} from 'material-ui/Card'
import SearchIcon from 'material-ui-icons/Search'

const styles = () => ({
  card: {
    height: '32px',
    width: '400px'
  },
  cardContentPadding: {
    paddingTop: 0
  },
  Content:{
    padding: 0,
    position: 'relative',
    top: '-18px',
    height: '32px',
    width: '400px',
    fontWeight: 'normal',
  },
  icon: {
    float: 'right',
    position: 'relative',
    top:'-40px',
    color:'#000000',
    opacity:'0.54'
  },
  
})

class SearchButton extends Component {
  render() {
    const {
      classes,
      ...other
    } = this.props
    return(
      <div {...other}>
        <div className={classes.button}>
          <Card className={classes.card}>
            <CardContent
              classes={{
                paddingTop: classes.cardContentPadding
              }}
              className={classes.Content}
            >
              <TextField
                id="search"
                label="Search"
                type="input"
                fullWidth={true}
                SelectProps
                className={classes.textField}
              />
              <SearchIcon className={classes.icon} />
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(SearchButton)
