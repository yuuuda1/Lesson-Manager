import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Container from 'app/Container'
import SearchButton from 'app/lesson/pages/components/searchButton'
import { Link } from 'react-router-dom'

const styles = () => ({
  root: {
    position: 'absoluto',
    zIndex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: '#FAFAFA'
  },
  maintitle: {
    position: 'absolute',
    left: '500px',
    textAlign: 'center',
    fontSize: '34px',
    color: '#000000',
    opacity: '0.87',
    fontFamily: 'Roboto'
  },
  searchButton: {
    marginLeft: '420px',
    marginBottom: '64px',
    marginTop: '20px'
  },
  registerContent: {
    width: '100%',
    height: '100%',
    marginLeft: '70px',
    marginTop: '60px'
  },
  title: {
    position: 'relative',
    left: '180px',
    textAlign: 'center',
    fontSize: '24px',
    fontColor: '#000000',
    opacity: '0.87'
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
      <Link to={`profile/${user.id}`}>
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
            <SearchButton
              className={classes.searchButton}
              onChangeValue={this.handleChange}
              onClick={this.handleSearch}
            />
            {userLinks}
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
