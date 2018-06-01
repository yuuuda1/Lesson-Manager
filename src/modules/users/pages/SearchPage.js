import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Container from 'app/foundation/components/Container'
import SearchTextField from 'app/materials/SearchTextField'
import { Link } from 'react-router-dom'

const styles = () => ({
  root: {
    position: 'absoluto',
    zIndex: 1,
    width: '100%',
    height: '100%'
  },
  registerContent: {
    width: '100%',
    height: '100%',
    marginTop: '48px'
  },
  title: {
    fontFamily: 'Roboto',
    maxWidth: '180px',
    margin: 'auto',
    fontSize: '24px',
    fontColor: '#000000',
    opacity: '0.87'
  },
  SearchTextField: {
    marginLeft: '34%',
    marginBottom: '32px',
    marginTop: '8px'
  },
  userLinks: {
    margin: 'auto',
    maxWidth: '800px'
  }
})


class SearchPage extends Component {
  state = {
    word: ''
  }

  handleChange = event => {
    this.setState({
      word: event.target.value
    })
  }

  handleSearch = () => {
    this.props.requestAllUsers(this.state.word)
  }

  render() {
    const {
      classes,
      lessons,
      requestAllUsers,
      users,
      ...other
    } = this.props

    const userLinks = users.length === 0 ? <div /> : users.map(user => (
      <Link to={`users/${user.id}`}>
        {user.name}
      </Link>
    ))

    return (
      <div className={classes.root} {...other}>
        <Container>
          <div className={classes.registerContent}>
            <div className={classes.title}>
              ユーザ検索
            </div>
            <SearchTextField
              className={classes.SearchTextField}
              onChangeValue={this.handleChange}
              onClick={this.handleSearch}
            />
            <div className={classes.userLinks}>
              {userLinks}
            </div>
          </div>
        </Container>
      </div>
    )
  }
}

SearchPage.propTypes = {
  classes : PropTypes.object.isRequired,
  lessons : PropTypes.array,
  requestAllUsers : PropTypes.func,
  users : PropTypes.array
}

export default withStyles(styles)(SearchPage)
